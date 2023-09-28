import { infoTemplate } from './info-template'

const verboseTranslationTemplate = (
  from: string,
  to: string,
  translation: string
) => {
  return `🐃
  from: ${from}
  to: ${to}

  Translation: ${translation}

  ${infoTemplate}
  `
}

export { verboseTranslationTemplate }
