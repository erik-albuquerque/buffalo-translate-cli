import { Command } from 'commander'

class CLI extends Command {
  createCommand(name: string) {
    const cli = new Command(name)

    cli.option('-v, --verbose', 'Use verbose logging. (default)')
    cli.option('-b, --brief', 'Use brief logging.')

    return cli
  }
}

export { CLI }
