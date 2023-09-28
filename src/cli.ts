import 'dotenv/config'

import { version } from '../package.json'

import { Command } from 'commander'

import { getTranslate, detectLanguage } from './commands'
import { listLanguages } from './options'

const cli = new Command()

cli
  .name('buffalo-translate-cli')
  .description(
    'Buffalo Translate CLI offers the ability to perform translations directly in the terminal, providing an efficient way of translating texts from one language to another.'
  )
  .version(version, '-v, --version', 'output the current version')

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
    '-to, -tl, -lang, --target, --target-language <language>',
    'Target language.'
  )
  .aliases(['tl', 't', 'trans'])
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
