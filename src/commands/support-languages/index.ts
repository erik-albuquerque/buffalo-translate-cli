import { CLI } from '../../models'

import { getSupportLanguages } from './get-support-languages'

const makeSupportLanguagesOption = () => {
  const cli = new CLI().createCommand('support-languages')

  cli
    .description('List all available languages.')
    .aliases(['sl', 'll', 'list-languages'])
    .action(getSupportLanguages)

  return cli
}

export { makeSupportLanguagesOption }
