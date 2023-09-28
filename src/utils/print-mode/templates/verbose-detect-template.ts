import { infoTemplate } from './info-template'

const verboseDetectTemplate = (query: string, language: string) => {
  return `
  🐃

  text: ${query}

  Language: ${language}

  ${infoTemplate}
  `
}

export { verboseDetectTemplate }
