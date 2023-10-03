import 'dotenv/config'

import { version } from '../package.json'

import { cli } from './get-cli'

import {
  makeTranslateCommand,
  makeDetectCommand,
  makeSupportLanguagesOption
} from './commands'

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

cli.addCommand(makeTranslateCommand())
cli.addCommand(makeDetectCommand())
cli.addCommand(makeSupportLanguagesOption())

export { cli }
