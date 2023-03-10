
import React from 'react';
import styles from './styles.module.scss'

import Head from 'next/head';


export const ErrorPage = () => {
  return (
  <>
    <Head>  
      <title>Pagina não encontrada</title>
    </Head>
    <section className={styles.container}> 
    <div className={styles.content}>
      <h1>Página não encontrada</h1>
      <p>Desculpe, a página que você está procurando não foi encontrada.</p>
      <a href='/'>Voltar a tela inicial</a>
    </div>
    </section>
    
  </>
  );
};

export default ErrorPage;