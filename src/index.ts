import './env'
import { translate, detect, help } from './commands'
import { getArgs } from './utils'

const main = async () => {
	const args = getArgs()

	const detectLanguage = await detect({ content: args.context })

	switch (args.action) {
		case 'translate':
		case '-t':
			await translate({
				sourceLanguageCode: detectLanguage?.languageCode ?? '',
				targetLanguageCode: args.language,
				contents: args.context,
			})
			break

		case 'detect':
		case '-d':
			const language = await detect({ content: args.context })
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
