import { URLSearchParams } from 'url'

import { AxiosError, AxiosResponse } from 'axios'
import { api } from '../lib'

import { DEFAULT_SOURCE_LANGUAGE } from '../constants'

type ApiResponseData = {
  trans: string
  source_language_code: string
  source_language: string
  trust_level: number
}

/**
 * Function to get a translation.
 *
 * @param query Text to translate.
 * @param target.targetLanguage Target language.
 */
const getTranslate = async (
  query: string,
  target: { targetLanguage: string }
): Promise<void> => {
  if (!query || !target?.targetLanguage) {
    throw new Error('Invalid parameters.')
  }

  const params = new URLSearchParams({
    from: DEFAULT_SOURCE_LANGUAGE,
    to: target.targetLanguage,
    text: query
  })

  try {
    const apiResponse: AxiosResponse<ApiResponseData> = await api.post(
      '/text',
      params.toString()
    )

    const { trans } = apiResponse.data

    console.log(`🐃 Translation: '${trans}'`)
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data?.message)
    }

    throw error
  }
}

export { getTranslate }
