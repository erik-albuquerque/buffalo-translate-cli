export type ResourceType = {
	sourceLanguageCode: string
	targetLanguageCode: string
	contents: string | string[]
}

export type TranslateDataSuccessType = {
	translatedText: string
}[]

export type TranslateDataErrorType = {
	code: number
	message: string
	status: string
}

export type TranslateDataType = {
	translations?: TranslateDataSuccessType
	error?: TranslateDataErrorType
}

export type BuffaloType = {
	action: 'translate' | '-t' | 'detect' | '-d' | 'help' | '-h'
	language: string
	context: string
}
