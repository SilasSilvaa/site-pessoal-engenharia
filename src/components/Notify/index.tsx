
import styles from './styles.module.scss'


export default function Notify(){
    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <span>Todos os projetos foram carregados!</span>
            </div>
        </div>
    )

}