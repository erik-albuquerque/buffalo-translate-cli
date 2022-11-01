export type ResourceType = {
	sourceLanguageCode: string
	targetLanguageCode: string
	contents: string | string[]
}

export type TranslateDataType = {
	translations: {
		translatedText: string
	}[]
}
