import { DetectApiResponseData, DetectOptions } from '../../types/detect'

import { getMode, printMode } from '../../utils'

const handleDetectPrintMode = (
  data: DetectApiResponseData,
  query: string,
  { verbose, brief }: DetectOptions
) => {
  const { source_lang } = data

  const mode = getMode(verbose, brief)

  printMode(mode, 'detect', { query, text: source_lang })
}

export { handleDetectPrintMode }
