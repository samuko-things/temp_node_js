/////  SOME BUILTIN MODULES //////////////////

const {readFileSync, writeFileSync} = require('fs')


const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

// console.log(first)
// console.log(second)

// writeFileSync('./content/result_sync.txt',
// `Here is the result:\n\n${first}\n\n${second}`)

writeFileSync('./content/result_sync.txt',
`\nHere is the result:\n\n${first}\n\n${second}`, {flag: 'a'})


