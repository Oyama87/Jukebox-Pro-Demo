const express = require('express');
const router = express.Router();
const { Album, Song, Artist } = require('../../db');

router.get('/', async (req,res,next) => {
    try {
      let albums = await Album.findAll({
        include: {
          model: Artist,
          as: 'artist'
        }
      });
      res.json(albums)
    }
    catch(err) {
      console.log(err.message)
    }
});

module.exports = router;
