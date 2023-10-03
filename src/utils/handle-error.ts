import { isAxiosError } from 'axios'

const handleError = (error: unknown) => {
  if (isAxiosError(error)) {
    throw new Error(error.response?.data?.message || 'Unknown error occurred.')
  }
  throw new Error('Unexpected error.')
}

export { handleError }
