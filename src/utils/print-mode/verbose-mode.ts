import { verboseDetectTemplate, verboseTranslationTemplate } from './templates'

const verboseMode = (
  type: 'translate' | 'detect',
  content: {
    text?: string
    from?: string
    to?: string
    query?: string
  }
) => {
  switch (type) {
    case 'translate':
      console.log(
        verboseTranslationTemplate(content.from!, content.to!, content.text!)
      )
      break
    case 'detect':
      console.log(verboseDetectTemplate(content.query!, content.text!))
      break
    default:
      break
  }
}

export { verboseMode }
