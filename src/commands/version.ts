import emoji from 'node-emoji'
import { version as packageVersion } from '../../package.json'

const version = () => {
	console.log(`${emoji.get('water_buffalo')} v${packageVersion}`)
}

export { version }
