import { URLSearchParams } from 'url'

import { AxiosError, AxiosResponse } from 'axios'
import { api } from '../lib'
import { getMode, printMode } from '../utils'

type ApiResponseData = {
  source_lang: string
  source_lang_code: string
  trust_level: number
}

type DetectLanguageOptions = {
  verbose?: boolean
  brief?: boolean
}

/**
 * Function to detect the language of a text.
 *
 * @param query Text to detect.
 * @param option.verbose Use verbose logging. (default)
 * @param option.brief Use brief logging.
 */
const detectLanguage = async (
  query: string,
  options: DetectLanguageOptions
): Promise<void> => {
  if (!query) {
    throw new Error('Invalid parameter.')
  }

  const params = new URLSearchParams({
    text: query
  })

  const { verbose, brief } = options

  try {
    const apiResponse: AxiosResponse<ApiResponseData> = await api.post(
      '/detect-language',
      params.toString()
    )

    const { source_lang } = apiResponse.data

    const mode = getMode(verbose, brief)

    printMode(mode, 'detect', { query, text: source_lang })
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data?.message)
    }

    throw error
  }
}

export { detectLanguage }
