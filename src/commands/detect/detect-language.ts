import { URLSearchParams } from 'url'

import { AxiosResponse } from 'axios'

import { api } from '../../lib'

import { DetectApiResponseData, DetectOptions } from '../../types/detect'

import { handleError } from '../../utils'

import { handleDetectPrintMode } from './handle-detect-print-mode'

const DETECT_ENDPOINT = process.env.RAPID_API_DETECT_ENDPOINT

/**
 * Function to detect the language of a text.
 *
 * @param query Text to detect.
 * @param option.verbose Use verbose logging. (default)
 * @param option.brief Use brief logging.
 */
const detectLanguage = async (
  query: string,
  options: DetectOptions
): Promise<void> => {
  const { verbose, brief } = options

  if (!DETECT_ENDPOINT) {
    throw new Error(
      'Error: Environment variable RAPID_API_DETECT_ENDPOINT is not defined.'
    )
  }

  if (!query) {
    throw new Error('Error: Invalid parameters - Query is required.')
  }

  const params = new URLSearchParams({
    text: query
  })

  try {
    const apiResponse: AxiosResponse<DetectApiResponseData> = await api.post(
      DETECT_ENDPOINT,
      params.toString()
    )

    handleDetectPrintMode(apiResponse.data, query, { verbose, brief })
  } catch (error) {
    handleError(error)
  }
}

export { detectLanguage }
