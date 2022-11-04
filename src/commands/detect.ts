import { TranslationServiceClient } from '@google-cloud/translate'

type DetectProps = {
	content: string
}

const PROJECT_ID = process.env.GOOGLE_CLOUD_PROJECT_ID

const detect = async ({ content }: DetectProps) => {
	const translationClient = new TranslationServiceClient()

	const request = {
		parent: `projects/${PROJECT_ID}/locations/global`,
		mimeType: 'text/plain',
		content,
	}

	try {
		const [response] = await translationClient.detectLanguage(request)

		const { languages } = response

		if (languages) {
			const language = languages[0]

			return language
		}
	} catch (err) {
		console.log(err)
	}
}

export { detect }
