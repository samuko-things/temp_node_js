/////  SOME BUILTIN MODULES //////////////////

const {readFile, writeFile} = require('fs')

// for this to work we need to provide a call back

readFile('./content/first.txt','utf8', (err, result) => {
    if(err) {
        console.log(err)
        return;
    }
    const first = result;

    readFile('./content/second.txt','utf8', (err, result) => {
        if(err) {
            console.log(err);
            return;
        }
        const second = result;

        writeFile('./content/result_async.txt',
        `Here is the result:\n\n${first}\n\n${second}`, {flag: 'a'},
        (err, result) => {
            if(err) {
                console.log(err);
                return;
            }
            console.log(result);  
        })
    })
})


