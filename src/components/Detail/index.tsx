
import Image from 'next/image'
import {FiX} from 'react-icons/fi'
import styles from './styles.module.scss'


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
 conteudo: DataProject,
 close: any
}

export default function Detail({conteudo, close}: Project){
    return(
        <div className={styles.container}>
            <FiX onClick={close} size={25} color="#FFF"/>
            <h1>{conteudo.title}</h1>
            <Image src={conteudo.image} alt={conteudo.title} width={500} height={500}/>
            <span>{conteudo.description}</span>
        </div>
    )
}