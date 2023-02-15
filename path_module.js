/////  SOME BUILTIN MODULES //////////////////



const path = require('path') // u can also destructure specific properties

console.log(path.sep) // outputs '/'

const filePath = path.join('~/web_dev','freecodecamp_backend_api_course','node_js','os_module.js')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname,'os_module.js')
console.log(absolute)