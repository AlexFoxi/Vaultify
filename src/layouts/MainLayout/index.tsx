import { Metadata } from 'next'

import styles from './styles.module.scss'

type Props = {
  children: React.ReactNode
  params: { id: string; lang: string }
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Fit Track App',
    description: 'App for fitness'
  }
}

export default async function MainLayoutLM({ children, params }: Props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>{children}</div>
      <div id='modal' />
    </div>
  )
}
