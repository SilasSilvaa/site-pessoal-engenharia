
import { GetStaticProps } from 'next'
import * as prismic from "@prismicio/client"
import * as prismicH from '@prismicio/helpers'
import sm from '../../../sm.json'

import Image from 'next/image'

import styles from './styles.module.scss'
import Head from 'next/head'

type Data ={
    title: string,
    description: string,
    banner: string
}

interface DataProps{
    data: Data
}

export default function Sobre({ data }: DataProps){
    
    return(
        <>
        <Head>  
            <title>Sobre</title>
        </Head>
            <section className={styles.container}>
                <h1>{data.title}</h1>
                <div className={styles.content}>
                    <span> {data.description}</span>
                <Image placeholder='blur' blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk2AQAALgAtFVIVl0AAAAASUVORK5CYII=' src={data.banner} alt="" width={420} height={420} quality={100}/>
                </div>
            </section>
        </>
    )
}

export const getStaticProps: GetStaticProps = async() =>{
    
    const client = prismic.createClient(sm.apiEndpoint)
    const response = await client.getSingle('sobre')

    const {tite, description, banner} = response.data


    const data = {
        title: prismicH.asText(tite),
        description: prismicH.asText(description),
        banner: banner.url
    }

    return{
        props:{
            data
        },
        revalidate: 60 * 60
    }
}
