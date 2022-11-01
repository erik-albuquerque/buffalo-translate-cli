import './env'
import { translate } from './commands'
import { BuffaloType } from './types'

const main = async () => {
	const text = 'The quick brown fox jumps over the lazy dog'

	const args: BuffaloType = {
		action: 'translate',
		language: 'pt', // temp
		context: text,
	}

	const { action } = args // [<translate>[-t], <detect>[-d], <help>[-h]]

	const targetLanguageCode = args.language // <language>['EN', -en]

	const sourceLanguageCode = 'en' // temp

	switch (action) {
		case 'translate':
		case '-t':
			await translate({
				sourceLanguageCode,
				targetLanguageCode,
				contents: args.context,
			})
			break
		case 'detect':
		case '-d':
			console.log('detect no implemented')
			break

		case 'help':
		case '-h':
			console.log('help no implemented')
			break

		default:
			console.log('Command not found! Try: help | -h')
			break
	}
}

main()
