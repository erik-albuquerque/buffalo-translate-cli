import { briefMode } from './brief-mode'
import { verboseMode } from './verbose-mode'

const printMode = (
  mode: '-v' | '--verbose' | '-b' | '--brief' | 'unknown',
  type: 'translate' | 'detect',
  content: {
    text?: string
    from?: string
    to?: string
    query?: string
  }
) => {
  switch (mode) {
    case '-b':
    case '--brief':
      briefMode(type, content.text!)
      break
    case '-v':
    case '--verbose':
      verboseMode(type, content)
      break
    default:
      console.log('mode not found')
      break
  }
}

export { printMode }
