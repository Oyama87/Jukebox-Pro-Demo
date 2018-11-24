const express = require('express');
const router = express.Router();

router.get('/', (req,res,next) => {
  res.json('Hello from the Server, gonna make a DB soon!');
})
