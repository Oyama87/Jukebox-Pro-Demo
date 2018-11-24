const express = require('express');
const router = express.Router();
const { db, Album, Song, Artist } = require('../../db/');

router.get('/', (req,res,next) => {
  res.json('Hello from the Server, gonna make a DB soon!');
})

module.exports = router;
