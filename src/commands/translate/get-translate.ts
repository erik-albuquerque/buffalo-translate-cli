import { URLSearchParams } from 'url'

import { AxiosResponse } from 'axios'

import { api } from '../../lib'

import {
  TranslateApiResponseData,
  TranslateOptions
} from '../../types/translate'

import {
  DEFAULT_SOURCE_LANGUAGE,
  DEFAULT_TARGET_LANGUAGE
} from '../../constants'

import { handleError } from '../../utils'

import { HandleTranslationPrintMode } from './handle-translation-print-mode'

const TRANSLATE_ENDPOINT = process.env.RAPID_API_TRANSLATE_ENDPOINT!

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
  options: TranslateOptions
): Promise<void> => {
  const { targetLanguage = DEFAULT_TARGET_LANGUAGE, verbose, brief } = options

  if (!TRANSLATE_ENDPOINT) {
    throw new Error(
      'Error: Environment variable RAPID_API_TRANSLATE_ENDPOINT is not defined.'
    )
  }

  if (!query) {
    throw new Error('Error: Invalid parameters - Query is required.')
  }

  const params = new URLSearchParams({
    from: DEFAULT_SOURCE_LANGUAGE,
    text: query,
    to: targetLanguage
  })

  try {
    const apiResponse: AxiosResponse<TranslateApiResponseData> = await api.post(
      TRANSLATE_ENDPOINT,
      params.toString()
    )

    HandleTranslationPrintMode(apiResponse.data, {
      targetLanguage,
      verbose,
      brief
    })
  } catch (error) {
    handleError(error)
  }
}

export { getTranslate }
