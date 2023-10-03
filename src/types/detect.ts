type DetectApiResponseData = {
  source_lang: string
  source_lang_code: string
  trust_level: number
}

type DetectOptions = {
  verbose?: boolean
  brief?: boolean
}

export type { DetectApiResponseData, DetectOptions }
