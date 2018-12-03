const express = require('express');
const app = express()
const path = require('path');
const volleyball = require('volleyball');
const albumRouter = require('./routes/api/albumRouter.js');
const { db } = require('./db');
const PORT = 3000;

app.use(volleyball);
app.use(express.static(path.join(__dirname, '..', '..', 'dist')));
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.get('/', (req,res,next) => {
  res.sendFile(path.join(__dirname, '..', '..', 'dist', 'index.html'))
})

app.use('/api/albums', albumRouter);

app.use((req,res,next) => {
  res.status(404).send("That's a 404.");
})

db.sync()
  .then(app.listen(PORT, ()=> console.log(`\n***********\n\nDatabase synced, JukeboxPro listening on port ${PORT}\n\n***********\n`)));

// module.exports = app;
