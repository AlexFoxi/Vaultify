import axios, { AxiosResponse } from 'axios'

export function getContentType(): Record<string, string> {
  return {
    'Content-Type': 'application/json'
  }
}

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
    } else {
      console.log('Unknown error:', error)
    }

    return fallback
  }
}
