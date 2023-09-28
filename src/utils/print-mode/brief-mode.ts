import { briefDetectTemplate, briefTranslateTemplate } from './templates'

const briefMode = (type: 'translate' | 'detect', text: string) => {
  switch (type) {
    case 'translate':
      console.log(briefTranslateTemplate(text))
      break
    case 'detect':
      console.log(briefDetectTemplate(text))
      break
    default:
      break
  }
}

export { briefMode }
