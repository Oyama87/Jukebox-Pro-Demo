const express = require('express');
const app = express()
const apiRouter = require('./api/apiRouter.js')

app.get('/', (req, res, next) => {
  res.json('Hello World');
})

app.get('/api', apiRouter)
