
import { GetStaticProps } from 'next'

import * as prismic from "@prismicio/client"
import * as prismicH from '@prismicio/helpers'
import sm from '../../../sm.json'

import Image from 'next/image'
import styles from './styles.module.scss'

type DataProject = {
    uid: string,
    image: string,
    title: string,
    description: string,
    date: string
}

interface Project{
 data: DataProject
}

export default function Projetos({data}: Project){

    console.log(data)

    return(
        <section className={styles.container}>
            <h1>Projetos Realizados</h1>
    
            <div className={styles.content}> 
            {data.map( projeto =>{
                return(
                    <div className={styles.projectInfo} key={projeto.uid}>
                      <Image src={projeto.image} alt="" width={350} height={300}/>
                      <p>{projeto.title}</p>
                    </div>
                )
            })
        }
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
        fetch: ["project.imageproject", "project.titleproject", "project.descriptionproject", "project.dateproject"],
        pageSize: 6
    })

    // console.log(response.results)
    
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

    console.log(data)
    
    return{
        props:{
            data
        }
    }
}