const Sequelize = require('sequelize');

module.exports = {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  artworkUrl: {
    type: Sequelize.STRING,
    defaultValue: 'default-album.jpg' 
  }
}
