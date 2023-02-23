
import { GetStaticProps } from 'next'

import * as prismic from "@prismicio/client"
import * as prismicH from '@prismicio/helpers'
import sm from '../../../sm.json'


import Image from 'next/image'
import styles from './styles.module.scss'
import { useState} from 'react'
import Detail from '@/components/Detail'

import { toast }  from 'react-toastify'

type DataProject = {
    concat: any
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
 conteudo: DataProject
}

export default function Projetos({data, page}: Project){

    const [dataProject, setDataProject] = useState(data)
    const [button, setButton] = useState(true)
    const [currentPage, setCurrentPage] = useState(Number(page))
    const [loading, setLoading] = useState(false)

    const [newData, setNewData] = useState()

    const [showDetail, setShowDetail] = useState(false)


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

        // if(response.results.length = 3){
        //     setButton(false)
        //     setLoading(false)
        //     toast.info('Todos os projetos foram carregados')
        // }

        return response
    } 

    async function moreProjects(pageNumber: number){

        setLoading(true)
        setButton(false)

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

            
            const updateData = data.concat(dataProject).reduce((unique: any[], item: { uid: any }) => {
                return unique.some(x => x.uid === item.uid)
                ? unique
                : [...unique, item]
            }, [])

                setLoading(false)
                setButton(false)
                setDataProject(updateData)
    }

    function openDetail(projeto: any){


        if(showDetail === true){
            document.documentElement.style.overflow = 'visible'
        }else{
            document.documentElement.style.overflow = 'hidden'
        }
        
        setShowDetail(!showDetail)
        setNewData(projeto)

    }


    return(
    <div>

        <section className={styles.container}>
            <h1>Projetos Realizados</h1>
            <div className={styles.content}> 
            {dataProject.map( projeto =>{
                return(
                    <div className={styles.projectInfo} key={projeto.uid} onClick={() => openDetail(projeto)}>
                        <Image placeholder='blur' blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk2AQAALgAtFVIVl0AAAAASUVORK5CYII=' src={projeto.image} alt="" width={350} height={300}/>
                      <p>{projeto.title}</p>
                    </div>
                )
            })
        }

        </div>
            { loading == true ? ( <div className={styles.loading}> <div></div></div>): <div style={{marginBottom: 50}}></div>}
            {button == false ? (<></>) : <button onClick={() => moreProjects(currentPage + 1)}>Ver todos</button>}
        </section>

        {showDetail && (
            <Detail
            conteudo = {newData ?? dataProject} 
            close = {openDetail}
            />
        )}

    </div>
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
        },
        revalidate: 15 * 60
    }
}