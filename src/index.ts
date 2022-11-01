import * as dotenv from 'dotenv'
dotenv.config()

import { ResourceType, TranslateDataType } from './types'

const TRANSLATE_TEXT_URL = process.env.GOOGLE_CLOUD_TRANSLATE_TEXT_URL as string
const TRANSLATE_API_TOKEN = process.env.GOOGLE_CLOUD_TRANSLATE_API_TOKEN

const text = 'The quick brown fox jumps over the lazy dog'

const translateText = async () => {
	const resource: ResourceType = {
		sourceLanguageCode: 'en',
		targetLanguageCode: 'pt',
		contents: [text],
	}

	try {
		const response = await fetch(TRANSLATE_TEXT_URL, {
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
					'context(s)':
						resource.contents.length > 1
							? resource.contents
							: resource.contents[0],
				},
				content:
					data.translations.length > 1
						? data.translations
						: data.translations[0].translatedText,
			}

			console.log('🐃:', translateData)
		}
	} catch (err) {
		console.log(err)
	}
}

translateText()
