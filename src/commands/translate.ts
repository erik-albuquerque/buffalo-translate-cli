import { ResourceType } from '../types'
import { TranslationServiceClient } from '@google-cloud/translate'

type TranslateProps = ResourceType

const PROJECT_ID = process.env.GOOGLE_CLOUD_PROJECT_ID

const translate = async ({
	sourceLanguageCode,
	targetLanguageCode,
	contents,
}: TranslateProps) => {
	const translationClient = new TranslationServiceClient()

	const resource = {
		sourceLanguageCode,
		targetLanguageCode,
		contents,
	}

	try {
		const request = {
			parent: `projects/${PROJECT_ID}/locations/global`,
			mimeType: 'text/plain',
			contents,
			sourceLanguageCode,
			targetLanguageCode,
		}

		const [response] = await translationClient.translateText(request)

		const { translations } = response

		if (translations) {
			const translateData = {
				resource: {
					source: resource.sourceLanguageCode.toUpperCase(),
					target: resource.targetLanguageCode.toUpperCase(),
					contexts:
						resource.contents.length > 1
							? resource.contents
							: resource.contents[0],
				},
				content:
					translations.length > 1
						? translations
						: translations[0].translatedText,
			}

			console.log('🐃', translateData)
		}
	} catch (err) {
		console.log(err)
	}
}

export { translate }
