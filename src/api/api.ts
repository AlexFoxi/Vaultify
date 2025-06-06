import axios, { AxiosResponse } from 'axios'

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

export async function safeRequest<T = any>(
  request: () => Promise<AxiosResponse<T>>,
  fallback: T
): Promise<T> {
  try {
    const { data } = await request()
    return data
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.log('Axios error:', error.message)

      // if (error.code === 'ECONNABORTED') {
      //   console.log('⏱️ Timeout error')
      // } else {
      //   console.log('❌ Axios error:', error.message)
      // }
    } else {
      console.log('❓ Unknown error:', error)
    }

    return fallback
  }
}

export default AXIOS_BOOKS
