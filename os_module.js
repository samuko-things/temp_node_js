/////  SOME BUILTIN MODULES //////////////////



const os = require('os') // u can also destructure specific properties

// in fo about current user
const user = os.userInfo()
console.log(user)

// return the system uptime in sec
console.log(`system uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS)