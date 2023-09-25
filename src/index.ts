#!/usr/bin/env node

import { Command } from 'commander'

const program = new Command()

program
  .name('buffalo-translate-cli')
  .description('Buffalo Translate CLI offers the ability to perform translations directly in the terminal, providing an efficient way of translating texts from one language to another.')
  .version('1.0.0', '-v, --version', 'output the current version')

program
  .configureHelp({
    sortSubcommands: true,
    subcommandTerm: (cmd) => cmd.name()
  })

program
  .parse()