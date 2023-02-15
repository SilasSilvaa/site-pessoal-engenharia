
import styles from './styles.module.scss'


export default function Detail({conteudo, close}){
    return(
        <div>
            <button onClick={close}>X</button>
            <h1>{conteudo.title}</h1>
        </div>
    )
}