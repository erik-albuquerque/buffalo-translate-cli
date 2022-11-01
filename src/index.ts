import * as dotenv from 'dotenv'
dotenv.config()

import { ResourceType, TranslateDataType } from './types'

const TRANSLATE_TEXT_URL = process.env.GOOGLE_CLOUD_TRANSLATE_TEXT_URL as string
const TRANSLATE_API_TOKEN = process.env.GOOGLE_CLOUD_TRANSLATE_API_TOKEN

const text = 'The quick brown fox jumps over the lazy dog'

const translateText = () => {
	const resource: ResourceType = {
		sourceLanguageCode: 'en',
		targetLanguageCode: 'pt',
		contents: text,
	}

	fetch(TRANSLATE_TEXT_URL, {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${TRANSLATE_API_TOKEN}`,
		},
		body: JSON.stringify(resource),
	})
		.then((response) => response.json())
		.then((data: TranslateDataType) => {
			console.log('🐃:', data.translations[0].translatedText)
		})
}

translateText()
