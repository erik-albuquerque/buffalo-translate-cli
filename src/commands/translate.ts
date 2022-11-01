import { ResourceType, TranslateDataType } from '../types'

type TranslateProps = ResourceType

const MAIN_URL = process.env.GOOGLE_CLOUD_MAIN_URL as string
const PROJECT_ID = process.env.GOOGLE_CLOUD_PROJECT_ID
const TRANSLATE_API_TOKEN = process.env.GOOGLE_CLOUD_TRANSLATE_API_TOKEN

const translate = async ({
	sourceLanguageCode,
	targetLanguageCode,
	contents,
}: TranslateProps) => {
	const resource = {
		sourceLanguageCode,
		targetLanguageCode,
		contents,
	}

	try {
		const response = await fetch(`${MAIN_URL}/${PROJECT_ID}/:translateText`, {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${TRANSLATE_API_TOKEN}`,
			},
			body: JSON.stringify(resource),
		})

		const data: TranslateDataType = await response.json()

		if (data.error) {
			throw new Error(
				`${data.error.code} [${data.error.status}]: ${data.error.message}`
			)
		}

		if (data.translations) {
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
					data.translations.length > 1
						? data.translations
						: data.translations[0].translatedText,
			}

			console.log('🐃', translateData)
		}
	} catch (err) {
		console.log(err)
	}
}

export { translate }
