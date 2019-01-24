//Learn module to run http server.

const http = require('http');
const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.write("Hello World from Ronny ");
        //res.write('Hello World from NodeJS');
        res.end();
    }
    else{
        res.write("Using some other domain");
        res.end();
    }
});

server.listen('3001');