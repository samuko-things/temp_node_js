/////  SOME BUILTIN MODULES - HTTP MODULE //////////////////

const http = require('http');

/*
res: represent the incoming request for example if a client is
requesting (from the web browser) your webpage - http address
res: what you ae sending back example the webpage - html,css,js file
*/
const server = http.createServer((req, res) => {
    console.log(req.url)
    if (req.url === '/'){
        res.end('Welcome to our home page');
    }
    else if (req.url === '/about'){
        res.end('This what we are all about.');
    }
    else{
        res.end(`
        <h1>Oops!</h1>
        <p>We cant find the page you are looking for</p>
        <a href="/">back home</a>
        `)
    }
    
    // console.log(req);
    // res.write('welcome to our home page');
    // res.end();
});

const port=5000
server.listen(port); // - http://localhost:5000/