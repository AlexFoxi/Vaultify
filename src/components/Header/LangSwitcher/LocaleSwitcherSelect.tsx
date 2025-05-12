'use client'

import cn from 'clsx'
import { usePathname, useRouter } from 'i18n/navigation'
import { useEffect, useState, useTransition } from 'react'

import styles from './styles.module.scss'

type Props = {
  locales: readonly string[]
}

const LocaleSwitcherSelect = ({ locales }: Props) => {
  // const router = useRouter()
  // const pathname = usePathname()
  // const [selected, setSelected] = useState('en')
  // const [isPending, startTransition] = useTransition()
  // const onSelectChange = (locale: any) => {
  //   const pathSegments = pathname.split('/')
  //   const isLocalePath = locales.includes(pathSegments[1])
  //   const cleanedPath = isLocalePath
  //     ? `/${pathSegments.slice(2).join('/')}`
  //     : pathname
  //   setSelected(locale)
  //   startTransition(() => {
  //     router.push(cleanedPath, { locale: locale })
  //   })
  // }
  // useEffect(() => {
  //   const pathSegments = pathname.split('/')
  //   const isLocalePath = locales.includes(pathSegments[1])
  //   isLocalePath && setSelected(pathSegments[1])
  // }, [pathname, locales])
  // return (
  //   <div className={styles.LangBox}>
  //     <div className={styles.active}>
  //       <p className={styles.lang}>{selected}</p>
  //     </div>
  //     <div className={styles.dropdown}>
  //       {locales.map(locale => (
  //         <div
  //           key={locale}
  //           className={cn(
  //             styles.lang,
  //             selected === locale ? styles.selected : ''
  //           )}
  //           onClick={() => onSelectChange(locale)}
  //           aria-disabled={isPending}
  //         >
  //           {locale}
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // )
}

export default LocaleSwitcherSelect
