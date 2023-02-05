
import Image from 'next/image'
import styles from './styles.module.scss'

import logo from '../../../public/image/logo.png'
import Link from 'next/link'

export function Header(){
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Link href="/">
                <Image src={logo} alt='logo' />
                </Link>
                <nav>
                    <Link legacyBehavior href='/'>
                        <a>Home</a>
                    </Link>
                    <Link legacyBehavior href='/projetos'>
                        <a>Projetos</a>
                    </Link>
                    <Link legacyBehavior href='/sobre'>
                        <a>Sobre</a>
                    </Link>
                </nav>
                <div className={styles.buttonContact}>
                    <a>
                        Entre em contato
                    </a>
                </div>
            </div>
        </header>
    )
}