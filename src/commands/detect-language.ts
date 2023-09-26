import { URLSearchParams } from 'url'

import { AxiosError, AxiosResponse } from 'axios'
import { api } from '../lib'

type ApiResponseData = {
  source_lang: string
  source_lang_code: string
  trust_level: number
}

/**
 * Function to detect the language of a text.
 *
 * @param query Text to detect.
 */
const detectLanguage = async (query: string): Promise<void> => {
  if (!query) {
    throw new Error('Invalid parameter.')
  }

  const params = new URLSearchParams({
    text: query
  })

  try {
    const apiResponse: AxiosResponse<ApiResponseData> = await api.post(
      '/detect-language',
      params.toString()
    )

    const { source_lang } = apiResponse.data

    console.log(`🐃 Detected language is: ${source_lang}`)
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data?.message)
    }

    throw error
  }
}

export { detectLanguage }
