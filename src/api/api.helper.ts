import axios from 'axios'

export function getContentType(): Record<string, string> {
  return {
    'Content-Type': 'application/json'
  }
}

export function errorCatch(error: unknown): string {
  if (axios.isAxiosError(error) && error.response?.data?.message) {
    return error.response.data.message
  }
  return 'Unknown error'
}
