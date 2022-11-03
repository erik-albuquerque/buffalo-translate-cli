import emoji from 'node-emoji'

const help = () => {
	console.log(' ')
	console.log(`  ${emoji.get('water_buffalo')}`)
	console.log(' ')
	console.log('  Usage: buffalo [command] <language>/<context>')
	console.log(' ')
	console.log('  Displays help information.')
	console.log(' ')
	console.log('  Options:')
	console.log(' ')
	console.log(
		'    translate, -t <language>["EN", -en] <context>',
		'translate word.'
	)
	console.log('    detect, -d <context>', 'detect language.')
	console.log('    -v, --version', 'output the version number')
	console.log('    -h, --help', 'show all commands.')
	console.log(' ')
	console.log('  Example: ')
	console.log(' ')
	console.log('    buffalo translate "pt" "example"')
	console.log('    // output ')
	console.log(`    ${emoji.get('water_buffalo')} {
	  resource: { source: 'EN', target: 'PT', contexts: 'example' },
          content: 'exemplo'
       }`)
	console.log(' ')
	console.log('    buffalo detect "example"')
	console.log('    // output ')
	console.log(`    ${emoji.get('water_buffalo')} en`)
}

export { help }
