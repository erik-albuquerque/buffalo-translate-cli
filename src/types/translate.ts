type TranslateApiResponseData = {
  trans: string
  source_language_code: string
  source_language: string
  trust_level: number
}

type TranslateOptions = {
  targetLanguage?: string
  verbose?: boolean
  brief?: boolean
}

export type { TranslateApiResponseData, TranslateOptions }
