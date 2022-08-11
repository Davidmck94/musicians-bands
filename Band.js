const {Sequelize, sequelize, DataTypes} = require('./db');
// const { Sequelize, DataTypes } = require('sequelize');

// TODO - define the Band model

let Band = sequelize.define('band', {

    name: {
        type: DataTypes.STRING
    },
    genre: {
        type: DataTypes.STRING
    }
})

module.exports = {
    Band
};