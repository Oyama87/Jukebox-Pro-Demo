const express = require('express');
const app = express()
const albumRouter = require('./routes/api/albumRouter.js');
const path = require('path');
const volleyball = require('volleyball');


app.use(volleyball);
app.use(express.static(path.join(__dirname, '..', '..', 'dist')));

app.get('/', (req,res,next) => {
  res.sendFile(path.join(__dirname, '..', '..', 'dist', 'index.html'))
})

app.get('/api/albums', albumRouter);

module.exports = app;
