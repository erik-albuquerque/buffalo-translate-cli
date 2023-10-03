import { AxiosResponse } from 'axios'

import { api } from '../../lib'

import { SupportLanguagesApiResponseData } from '../../types/support-languages'

import { handleError } from '../../utils'

const SUPPORT_LANGUAGES_ENDPOINT =
  process.env.RAPID_API_SUPPORT_LANGUAGES_ENDPOINT

const getSupportLanguages = async () => {
  if (!SUPPORT_LANGUAGES_ENDPOINT) {
    throw new Error(
      'Error: Environment variable RAPID_API_SUPPORT_LANGUAGES_ENDPOINT is not defined.'
    )
  }

  try {
    const apiResponse: AxiosResponse<SupportLanguagesApiResponseData> =
      await api.get(SUPPORT_LANGUAGES_ENDPOINT)

    const languages = apiResponse.data

    // TODO: add pretty message log with verbose and brief mode

    console.table(languages)
  } catch (error) {
    handleError(error)
  }
}

export { getSupportLanguages }
