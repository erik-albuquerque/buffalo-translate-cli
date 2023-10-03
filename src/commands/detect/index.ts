import { CLI } from '../../models'

import { detectLanguage } from './detect-language'

const makeDetectCommand = () => {
  const cli = new CLI().createCommand('detect')

  cli
    .description('Detect the language of the source text.')
    .argument('<query>', 'Text to detect.')
    .alias('d')
    .action(detectLanguage)

  return cli
}

export { makeDetectCommand }
