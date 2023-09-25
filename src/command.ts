import { Command } from 'commander'

const command = new Command()

command
  .name('buffalo-translate-cli')
  .description(
    'Buffalo Translate CLI offers the ability to perform translations directly in the terminal, providing an efficient way of translating texts from one language to another.'
  )
  .version('1.0.1', '-v, --version', 'output the current version')

command.configureHelp({
  sortSubcommands: true,
  subcommandTerm: (cmd) => cmd.name()
})

export { command }
