
import styles from './styles.module.scss'

type DataProject = {
    uid: string,
    image: string,
    title: string,
    description: string,
    date: string
}

interface Project{
 conteudo: DataProject,
 close: Function
}

export default function Detail({conteudo, close}: Project){
    return(
        <div>
            <button onClick={() => close}>X</button>
            <h1>{conteudo.title}</h1>
        </div>
    )
}