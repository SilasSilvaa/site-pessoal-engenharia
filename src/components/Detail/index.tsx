
import styles from './styles.module.scss'
import Image from 'next/image'

import {FiX} from 'react-icons/fi'

type DataProject = {
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
        <section className={styles.container}>
            <div className={styles.content}>
                <div>
                    <FiX size={25} color="#000" onClick={close}/>
                </div>
                <Image placeholder="blur" blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO8VQ8AAjkBW2DmN5EAAAAASUVORK5CYII=' src={conteudo.image} alt={conteudo.title} width={500} height={500}/>
                <div className={styles.contentDescription}>
                    <h1>{conteudo.title}</h1>
                    <span>{conteudo.description}</span>
                </div>
            </div>
        </section>
    )
}