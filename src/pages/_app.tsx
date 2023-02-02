
import type { AppProps } from 'next/app'

import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import { website } from  '../../prismicio'

import Link from 'next/link'

import '../styles/global.scss' 

import { Header } from '../components/Header'
import { Footer } from '@/components/Footer'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <PrismicProvider internalLinkComponent={(props) => <Link {...props}/>}>
      <PrismicPreview repositoryName={website}>
        <Header/>
          <Component {...pageProps} />
        <Footer/>
      </PrismicPreview>
    
    </PrismicProvider>
    </>
  )
}
