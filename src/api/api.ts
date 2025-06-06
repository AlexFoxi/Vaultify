import axios from 'axios'

import { getContentType } from './api.helper'

const AXIOS_BOOKS = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BOOKS_API,
  timeout: 2000,
  headers: getContentType()
})

// AXIOS_BOOKS.interceptors.request.use((config: any) => {
//   console.log(
//     'Axios URL:',
//     config.baseURL + config.url + '?' + new URLSearchParams(config.params),
//     process.env.NEXT_PUBLIC_BOOKS_API
//   )
//   return config
// })

// AXIOS_BOOKS.interceptors.response.use(
//   response => response,
//   error => {
//     console.log('Axios error:', error.message)
//     return Promise.reject(error)
//   }
// )

export default AXIOS_BOOKS
