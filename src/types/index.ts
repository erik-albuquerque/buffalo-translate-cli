export type ResourceType = {
	sourceLanguageCode: string
	targetLanguageCode: string
	contents: string[]
}

export type BuffaloActionType =
	| 'translate'
	| '-t'
	| 'detect'
	| '-d'
	| 'version'
	| '--version'
	| '-v'
	| 'help'
	| '--help'
	| '-h'

export type BuffaloType = {
	action: BuffaloActionType
	language: string
	context: string
}
