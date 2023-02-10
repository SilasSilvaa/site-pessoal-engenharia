
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
 page: number,
 totalPage: number
}

export default function Projetos({data, page, totalPage}: Project){

    const [dataProject, setDataProject] = useState(data || [])
    const [currentPage, setCurrentPage] = useState(Number(page))

    async function reqProject(pageNumber: number){

        const client = prismic.createClient(sm.apiEndpoint)
        
        const response = await client.get({
            predicates:[
                prismic.predicate.at("document.type", "project")
            ],
            orderings: "document.last_publication_date, asc",
            fetch: ["project.imageproject", "project.titleproject", "project.descriptionproject", "project.dateproject"],
            pageSize: 6,
            page: pageNumber,
        })
        
        return response


    } 

    async function moreProjects(pageNumber: number){

        const response = await reqProject(pageNumber)

        if(response.results.length === 0){
            return
        }

        const dataProject = response.results.map((project) => {
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
            const updateData = data.concat(dataProject).reduce((unique, item) => {
                return unique.some(x => x.uid === dataProject.uid)
                ? unique
                : [...unique, item]
            }, [])
    
            setDataProject(updateData)
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
        orderings: "document.last_publication_date, desc",
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


    
    return{
        props:{
            data,
            page: response.page,
            totalPage: response.total_pages
        }
    }
}