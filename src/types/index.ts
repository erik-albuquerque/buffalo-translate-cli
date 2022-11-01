export type ResourceType = {
	sourceLanguageCode: string
	targetLanguageCode: string
	contents: string | string[]
}

export type TranslateDataSuccessType = {
	translatedText: string
}[]

export type DetectDataSuccessType = {
	languageCode: string
	confidence: number
}

export type DataErrorType = {
	code: number
	message: string
	status: string
}

export type TranslateDataType = {
	translations?: TranslateDataSuccessType
	error?: DataErrorType
}

export type DetectDataType = {
	languages?: DetectDataSuccessType[]
	error?: DataErrorType
}

export type BuffaloType = {
	action: 'translate' | '-t' | 'detect' | '-d' | 'help' | '-h'
	language: string
	context: string
}
