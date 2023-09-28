import { AxiosError, AxiosResponse } from 'axios'
import { api } from '../lib'

type Language = {
  code: string
  language: string
}

type ApiResponseData = Language[]

const listLanguages = async () => {
  try {
    const apiResponse: AxiosResponse<ApiResponseData> =
      await api.get('/support-languages')

    const languages = apiResponse.data

    console.table(languages)
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data?.message)
    }

    throw error
  }
}

export { listLanguages }
