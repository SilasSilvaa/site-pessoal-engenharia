
import Image from 'next/image'

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
            <Image src={conteudo.image} alt={conteudo.title} width={500} height={500}/>
            <span>{conteudo.description}</span>
        </div>
    )
}