import Footer from '@/components/Footer'
import Header from '@/components/Header'

import styles from './styles.module.scss'

type Props = {
  children: React.ReactNode
  params: { locale: string }
}

export default async function MainLayout({ children, params }: Props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  )
}
