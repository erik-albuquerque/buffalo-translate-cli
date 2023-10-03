import {
  TranslateApiResponseData,
  TranslateOptions
} from '../../types/translate'

import { getMode, printMode } from '../../utils'

const HandleTranslationPrintMode = (
  data: TranslateApiResponseData,
  { targetLanguage, verbose, brief }: TranslateOptions
) => {
  const { trans: translation, source_language_code: from } = data

  const mode = getMode(verbose, brief)

  printMode(mode, 'translate', { from, to: targetLanguage, text: translation })
}

export { HandleTranslationPrintMode }
