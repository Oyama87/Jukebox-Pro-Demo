const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/juke', {
  logging: false
})
const Artist = db.define('artist', require('./models/Artist.js'));
const Album = db.define('album', require('./models/Album.js'));
const Song = db.define('song', require('./models/Song.js'));

Song.belongsTo(Artist);
Song.belongsTo(Album);

Album.belongsTo(Artist);
Album.hasMany(Song);

Artist.hasMany(Album);
Artist.hasMany(Song);


module.exports = { db , Album, Song, Artist }
