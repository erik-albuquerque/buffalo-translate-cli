import { CLI } from '../../models'

import { DEFAULT_TARGET_LANGUAGE } from '../../constants'

import { getTranslate } from './get-translate'

const makeTranslateCommand = () => {
  const cli = new CLI().createCommand('translate')

  cli
    .description('Translate text to the target language.')
    .argument('<query>', 'Text to translate.')
    .option(
      '-to, --target-language <language>',
      'Target language.',
      DEFAULT_TARGET_LANGUAGE
    )
    .aliases(['t', 'trans'])
    .action(getTranslate)

  return cli
}

export { makeTranslateCommand }
