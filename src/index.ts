import './env'
import { translate, detect, help } from './commands'
import { BuffaloActionType, BuffaloType } from './types'

const main = async () => {
	const context = 'The quick brown fox jumps over the lazy dog'

	const args: BuffaloType = {
		action: '-d',
		language: 'pt', // temp
		context,
	}

	const { action } = args // [<translate>[-t], <detect>[-d], <help>[-h]]

	const targetLanguageCode = args.language // <language>['EN', -en]

	const detectLanguage = await detect({ content: context })

	switch (action) {
		case 'translate':
		case '-t':
			await translate({
				sourceLanguageCode: detectLanguage?.languageCode ?? '',
				targetLanguageCode,
				contents: args.context,
			})
			break

		case 'detect':
		case '-d':
			const language = await detect({ content: context })
			console.log('🐃', language && language.languageCode)
			break

		case 'help':
		case '--help':
		case '-h':
			help()
			break

		default:
			console.log('Command not found! Try: help | --help | -h')
			break
	}
}

main()
