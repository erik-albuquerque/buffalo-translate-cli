import { URLSearchParams } from 'url'
import { AxiosError, AxiosResponse } from 'axios'

import { api } from '../lib'
import { DEFAULT_SOURCE_LANGUAGE } from '../constants'
import { printMode, getMode } from '../utils'

type ApiResponseData = {
  trans: string
  source_language_code: string
  source_language: string
  trust_level: number
}

type GetTranslateOptions = {
  targetLanguage: string
  verbose?: boolean
  brief?: boolean
}

/**
 * Function to get a translation.
 *
 * @param query Text to translate.
 * @param options.targetLanguage Target language. (default: en)
 * @param option.verbose Use verbose logging. (default)
 * @param option.brief Use brief logging.
 */
const getTranslate = async (
  query: string,
  options: GetTranslateOptions
): Promise<void> => {
  if (!query) {
    throw new Error('Invalid parameters.')
  }

  const { targetLanguage: to, verbose, brief } = options

  const params = new URLSearchParams({
    from: DEFAULT_SOURCE_LANGUAGE,
    text: query,
    to
  })

  try {
    const apiResponse: AxiosResponse<ApiResponseData> = await api.post(
      '/text',
      params.toString()
    )

    const { trans: translation, source_language_code: from } = apiResponse.data

    const mode = getMode(verbose, brief)

    printMode(mode, 'translate', { from, to, text: translation })
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data?.message)
    }

    throw new Error('Unexpected error.')
  }
}

export { getTranslate }
