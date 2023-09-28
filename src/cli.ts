import 'dotenv/config'

import { version } from '../package.json'

import { Command } from 'commander'

import { getTranslate, detectLanguage } from './commands'

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

cli
  .command('translate')
  .description('Translate text to the target language.')
  .argument('<query>', 'Text to translate.')
  .option('-tl, --target-language <language>', 'Target language.')
  .alias('t')
  .action(getTranslate)

cli
  .command('detect')
  .description('Detect the language of the source text.')
  .argument('<query>', 'Text to detect.')
  .alias('d')
  .action(detectLanguage)

export { cli }
