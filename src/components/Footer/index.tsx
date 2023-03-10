
import styles from './styles.module.scss'

import Link from 'next/link'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'


export function Footer(){

    return(
        <footer className={styles.container}>
        <div className={styles.footerContent}>
            <div className={styles.linkContent}>
            
            <Link href="/sobre">
                Sobre nós 
            </Link>                
             <Link href="/https://web.whatsapp.com" target="_blank">
                Entre em contato conosco    
            </Link>                
            <Link href="/projetos">
                Projetos    
            </Link>                
            </div>

            <div className={styles.socialContent}>
                <Link href='https://pt-br.facebook.com/' target="_blank">
                    <FaFacebook data-color="blue" size={25} color="#FFF"/>
                </Link>
                <Link href="https://www.instagram.com/" target="_blank">
                    <FaInstagram data-color="red" size={25} color="#FFF"/>
                </Link>
                <Link href="https://web.whatsapp.com/" target="_blank">
                    <FaWhatsapp data-color="green" size={25} color="#FFF"/>
                </Link>
            </div>
        </div>
        </footer>
    )
}