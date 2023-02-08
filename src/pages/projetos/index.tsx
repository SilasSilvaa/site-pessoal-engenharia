
import { GetStaticProps } from 'next'

import * as prismic from "@prismicio/client"
import * as prismicH from '@prismicio/helpers'
import sm from '../../../sm.json'

import Image from 'next/image'
import styles from './styles.module.scss'
import { useState } from 'react'

type DataProject = {
    map(arg0: (projeto: any) => JSX.Element): import("react").ReactNode
    uid: string,
    image: string,
    title: string,
    description: string,
    date: string
}

interface Project{
 data: DataProject,
 page: number
}

export default function Projetos({data, page}: Project){

    const [dataProject, setDataProject] = useState(data || [])
    const [currentPage, setCurrentPage] = useState(Number(page))

    async function moreProjects(pageNumber: number){

        const client = prismic.createClient(sm.apiEndpoint)

        return console.log(client)
    }

    return(
        <section className={styles.container}>
            <h1>Projetos Realizados</h1>
    
            <div className={styles.content}> 
            {dataProject.map( projeto =>{
                return(
                    <div className={styles.projectInfo} key={projeto.uid}>
                      <Image src={projeto.image} alt="" width={350} height={300}/>
                      <p>{projeto.title}</p>
                    </div>
                )
            })
        }
        </div>

            <button onClick={() => moreProjects(currentPage + 1)}>Ver mais</button>

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
        fetch: ["project.imageproject", "project.titleproject", "project.descriptionproject", "project.dateproject"],
        pageSize: 6
    })

    
    const data = response.results.map((project) => {
        return{
            uid: project.uid,
            image: prismicH.asImageSrc(project.data.imageproject),
            title: prismicH.asText(project.data.titleproject),
            description: prismicH.asText(project.data.descriptionproject),
            data: prismicH.asDate(project.data.dateproject)?.toLocaleDateString('pt-br', {
                day: '2-digit',
                month:'long',
                year: '2-digit'
            })
        }
        
    })


    console.log(response)

    
    return{
        props:{
            data,
            page: response.total_pages

        }
    }
}