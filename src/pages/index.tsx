
import { GetStaticProps } from 'next'

import * as prismic from "@prismicio/client"
import * as prismicH from '@prismicio/helpers'
import sm from '../../sm.json'

import Head from 'next/head'
import Image from 'next/image'

import { motion } from 'framer-motion'

import styles from '../styles/home.module.scss'

import Link from 'next/link'

import { useEffect, useRef, useState } from 'react'

type Data = {
  title: string,
  span: string,
  banner: string,
  title_projects: string,
  title_services: string,
  subtitle_firts: string,
  description_first: string,
  subtitle_second: string,
  description_second: string,
  subtitle_third: string
  description_third: string,
  banner_footer: string,
}

type Project = {
  map(arg0: (project: any) => JSX.Element): import("react").ReactNode | import("framer-motion").MotionValue<number> | import("framer-motion").MotionValue<string>
  image: string,
  uid: string
}
interface DataProps {
  data: Data,
  dataProject: Project
}

export default function Home({ data, dataProject }: DataProps) {


  const carousel = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(0)

  useEffect(() => {

    setWidth(carousel!.current!.scrollWidth - carousel!.current!.offsetWidth)

  }, [])




  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.content}>

          <section className={styles.ctatext}>
            <h1>{data.title}</h1>
            <span>{data.span}</span>
            <div className={styles.buttonContact}>
              <Link href="https://web.whatsapp.com" target="_blank">
                Fale conosco!
              </Link>
            </div>
          </section>
          <Image placeholder='blur' blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk2AQAALgAtFVIVl0AAAAASUVORK5CYII=' src={data.banner} alt='banner' quality={100} width={550} height={500} />
        </div>
        <hr className={styles.divisor} />

        <div className={styles.sectionContainer}>
          <section>
            <h2>{data.title_projects}</h2>

            <motion.div ref={carousel} className={styles.containerCarousel}
              whileTap={{ cursor: "grabbing" }}>

              <motion.div className={styles.contentCarousel}
                drag="x"
                dragConstraints={{ right: 0, left: -width }}
              >
                {dataProject.map((project) => (
                  <motion.div key={project.uid}>
                    <Image placeholder='blur' blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk2AQAALgAtFVIVl0AAAAASUVORK5CYII=' src={project.image} alt="imagem" width={450} height={350} quality={100} />
                  </motion.div>
                ))}
              </motion.div>

            </motion.div>

            <div className={styles.buttonGalary}>
              <Link href="/projetos">Ver todos os projetos</Link>
            </div>

          </section>
        </div>

        <hr className={styles.divisor} />

        <div className={styles.sectionText}>
          <h2>{data.title_services}</h2>

          <div className={styles.contentText}>

            <div className={styles.imageSection}>
              <Image placeholder='blur' blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk2AQAALgAtFVIVl0AAAAASUVORK5CYII=' src={data.banner_footer} alt="banner" width={450} height={450} />
            </div>

            <section>
              <p>{data.subtitle_firts}</p>
              <div>
                <span>{data.description_first}</span>
              </div>

              <p>{data.subtitle_second}</p>
              <div>
                <span>{data.description_second}</span>
              </div>

              <p>{data.subtitle_third}</p>

              <div>
                <span>{data.description_third}</span>
              </div>

            </section>



          </div>
          <div className={styles.buttonService}>

          <a href='https://web.whatsapp.com' target="_blank">Faça seu orçamento</a>
          </div>
        </div>
      </main>

    </>
  )
}


export const getStaticProps: GetStaticProps = async () => {

  const client = prismic.createClient(sm.apiEndpoint)
  const response = await client.getSingle("homepage")

  const { title, span, banner, title_projects, title_services,
    description_first, subtitle_second, description_second,
    subtitle_third, description_third, banner_footer, subtitle_firts } = response.data


  const data = {
    title: prismicH.asText(title),
    span: prismicH.asText(span),
    banner: banner.url,
    title_projects: prismicH.asText(title_projects),
    title_services: prismicH.asText(title_services),
    subtitle_firts: prismicH.asText(subtitle_firts),
    description_first: prismicH.asText(description_first),
    subtitle_second: prismicH.asText(subtitle_second),
    description_second: prismicH.asText(description_second),
    subtitle_third: prismicH.asText(subtitle_third),
    description_third: prismicH.asText(description_third),
    banner_footer: banner_footer.url
  }

  const responseProject = await client.get({
    predicates: [
      prismic.predicate.at("document.type", "project")
    ],
    orderings: "document.last_publication_date, desc",
    fetch: ["project.imageproject", "project.titleproject"],
    pageSize: 6
  })

  const dataProject = responseProject.results.map((project) => {
    return {
      uid: project.uid,
      image: prismicH.asImageSrc(project.data.imageproject),
    }

  })


  return {
    props: {
      data,
      dataProject
    },
    revalidate: 60 * 2
  }
}