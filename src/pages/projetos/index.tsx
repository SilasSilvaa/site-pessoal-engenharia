
import { GetStaticProps } from 'next'

import * as prismic from "@prismicio/client"
import * as prismicH from '@prismicio/helpers'
import sm from '../../../sm.json'

import Image from 'next/image'
import styles from './styles.module.scss'
import banner from '../../../public/image/banner.png'


export default function Projetos(){
    return(
        <section className={styles.container}>
            <h1>Projetos Realizados</h1>

            
            <div className={styles.content}> 
                <div className={styles.projectInfo}>
                  <Image src={banner} alt="" width={350} height={300}/>
                  <p>Projetos</p>
                </div>

                <div className={styles.projectInfo}>
                  <Image src={banner} alt="" width={350} height={300}/>
                  <p>Projetos</p>

                </div>
                <div className={styles.projectInfo}>
                  <Image src={banner} alt="" width={350} height={300}/>
                  <p>Projetos</p>
                </div>

                <div className={styles.projectInfo}>
                  <Image src={banner} alt="" width={350} height={300}/>
                  <p>Projetos</p>
                </div>

                <div className={styles.projectInfo}>
                  <Image src={banner} alt="" width={350} height={300}/>
                  <p>Projetos</p>
                </div>

                <div className={styles.projectInfo}>
                  <Image src={banner} alt="" width={350} height={300}/>
                  <p>Projetos</p>
                </div>
            </div>

            <button>Ver mais</button>

        </section>
    )
}

export const getStaticProps: GetStaticProps = async () => {

    const client = prismic.createClient(sm.apiEndpoint)
    const response = await client.get({
        predicates:[
            prismic.predicate.at("document.type", "project")
        ],
        orderings: "document.last_publication_date desc",
        fetch: ["project.imageproject", "project.texproject", "project.description", "project.dateproject"],
        pageSize: 6
    })

    const data = response.results.map((project) => {
        return{
            id: project.data.id,
            imageProject: prismicH.asText(project.data.imageproject),

        }
    })

    return{
        props:{

        }
    }
}