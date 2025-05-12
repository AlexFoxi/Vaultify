import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['en', 'ua'],
  defaultLocale: 'en'
  // pathnames: {
  //   '/anime': {
  //     en: '/anime',
  //     ua: '/аніме'
  //   }
  // }
})

export const DefaultLocale = routing.defaultLocale
