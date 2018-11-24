const Sequelize = require('sequelize');

module.exports = {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  audioUrl: {
    type: Sequelize.STRING
  },
  genre: {
    type: Sequelize.STRING
  }
}
