import './env'
import { translate, detect, help } from './commands'
import { BuffaloActionType, BuffaloType } from './types'

const main = async () => {
	const args: BuffaloType = {
		action: process.argv[2] as BuffaloActionType,
		language: process.argv[3],
		context: process.argv[4] || process.argv[3],
	}

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
