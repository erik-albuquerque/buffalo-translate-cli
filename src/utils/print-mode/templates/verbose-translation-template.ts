const verboseTranslationTemplate = (
  from: string,
  to: string,
  translation: string
) => {
  return `🐃
  from: ${from}
  to: ${to}

  Translation: ${translation}
  `
}

export { verboseTranslationTemplate }
