/* creating the server without using the any like express.js */
// const http = require('http');
// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res)=>{
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World\n');
// })

// server.listen(port, hostname, ()=>{
//     console.log(`Server running at http://${hostname}:${port}/`);
// })


/*creating the server using the frame work like express */
const express = require('express');
const route = require('./src/routes/index');
const ConnectDB = require('./src/dbConnect');
const app = express();
const port = 3000;

ConnectDB();

app.use(express.json())

app.use('/', route);


app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})
