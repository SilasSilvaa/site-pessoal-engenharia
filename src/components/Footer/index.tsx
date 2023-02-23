
import styles from './styles.module.scss'

import Link from 'next/link'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'


export function Footer(){
    return(
        <footer className={styles.footerContent}>
            <div className={styles.linkContent}>
            
            <Link href="/sobre">
                Sobre nós 
            </Link>                
             <Link href="/">
                Entre em contato conosco    
            </Link>                
            <Link href="/projetos">
                Projetos    
            </Link>                
            </div>

            <div className={styles.socialContent}>
                <Link href="/">
                    <FaFacebook href='/' data-color="blue" size={25} color="#FFF"/>
                </Link>
                <Link href="/">
                    <FaInstagram data-color="red" size={25} color="#FFF"/>
                </Link>
                <Link href="/">
                    <FaWhatsapp data-color="green" size={25} color="#FFF"/>
                </Link>
            </div>
        </footer>
    )
} 