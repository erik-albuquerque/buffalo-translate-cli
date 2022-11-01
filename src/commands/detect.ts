import { DetectDataType } from '../types'

type DetectProps = {
	content: string
}

const MAIN_URL = process.env.GOOGLE_CLOUD_MAIN_URL as string
const PROJECT_ID = process.env.GOOGLE_CLOUD_PROJECT_ID
const TRANSLATE_API_TOKEN = process.env.GOOGLE_CLOUD_TRANSLATE_API_TOKEN

const detect = async ({ content }: DetectProps) => {
	const resource = {
		content,
	}

	try {
		const response = await fetch(`${MAIN_URL}/${PROJECT_ID}/:detectLanguage`, {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${TRANSLATE_API_TOKEN}`,
			},
			body: JSON.stringify(resource),
		})

		const data: DetectDataType = await response.json()

		if (data.error) {
			throw new Error(
				`${data.error.code} [${data.error.status}]: ${data.error.message}`
			)
		}

		if (data.languages) {
			const language = data.languages[0]

			return language
		}
	} catch (err) {
		console.log(err)
	}
}

export { detect }
