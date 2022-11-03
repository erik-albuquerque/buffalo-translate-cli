import { BuffaloActionType, BuffaloType } from '../types'

const getArgs = () => {
	const processArgs = process.argv

	const action = processArgs[2] as BuffaloActionType
	const language = process.argv[3] as string
	const context = (process.argv[4] ?? process.argv[3]) as string

	const args: BuffaloType = {
		action,
		language,
		context,
	}

	return args
}

export { getArgs }
