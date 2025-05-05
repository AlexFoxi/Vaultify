import { Metadata } from 'next'

import Footer from '@/components/Footer'
import Header from '@/components/Header'

import styles from './styles.module.scss'

type Props = {
  children: React.ReactNode
  params: { id: string; lang: string }
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Vaultify App',
    description: 'App for story data'
  }
}

export default async function MainLayoutLM({ children, params }: Props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <Header />
        {children}
        <Footer />
      </div>
      <div id='modal' />
    </div>
  )
}
