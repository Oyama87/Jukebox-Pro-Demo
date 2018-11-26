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

router.get('/:albumId', async (req,res,next) => {
  try {
    let album = await Album.findById(req.params.albumId);
    if(album) res.json(album);
    else res.status(404).send('Not here either. 404 it is.');
  }
  catch(err) {
    console.log(err);
  }
});

router.get('/:albumId/songs', async (req,res,next) => {
  try {
    let songs = await Song.findAll({
      where: {
        albumId: req.params.albumId
      }
    })
    if(songs) {
      res.json(songs);
    }
    else res.status(404).send('Nope, 404.');
  }
  catch(err) {
    console.log(err)
  }
});

module.exports = router;
