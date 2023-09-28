import 'dotenv/config'

import { DEFAULT_TARGET_LANGUAGE } from './constants'
import { version } from '../package.json'

import { CLI } from './models'

import { getTranslate, detectLanguage } from './commands'
import { listLanguages } from './options'

const cli = new CLI()

cli
  .name('buffalo-translate-cli')
  .description(
    'Buffalo Translate CLI offers the ability to perform translations directly in the terminal, providing an efficient way of translating texts from one language to another.'
  )
  .version(version, '--version', 'Output the current version')

cli.configureHelp({
  sortSubcommands: true,
  subcommandTerm: (cmd) => cmd.name()
})

// Main commands

cli
  .command('translate')
  .description('Translate text to the target language.')
  .argument('<query>', 'Text to translate.')
  .option(
    '-to, --target-language <language>',
    'Target language.',
    DEFAULT_TARGET_LANGUAGE
  )
  .aliases(['t', 'trans'])
  .action(getTranslate)

cli
  .command('detect')
  .description('Detect the language of the source text.')
  .argument('<query>', 'Text to detect.')
  .alias('d')
  .action(detectLanguage)

// Main options

cli
  .option('-ll, --list-languages', 'List all available languages.')
  .action(listLanguages)

export { cli }
