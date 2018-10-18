
//  Import the express library
const express = require('express')

//  Create an instance of express
const app = express()

//  Declare a port to run on
const port = 3000


//  Declare a route
// app.get('/', function (req, res) {
//     res.send(req.params)
//  })

//  app.get(<path>, handler_function)
//  handler function takes req (the request obj) and res (the response obj) as
//  parameters, the function uses res to generate a response
 app.get('/', (req, res) => res.send('page 1'))
 app.get('/next', (req, res) => res.send('page 2'))
 app.get('/next/last', (req, res) => res.send('page 3'))

//  Start Express Web Server i.e. start listing on the port you defined
app.listen(port, () => console.log(`Example app listening on port ${port}!`))