const {Sequelize, sequelize, DataTypes} = require('./db');
// const { Sequelize, DataTypes } = require('sequelize');

// TODO - define the Musician model

let Musician = sequelize.define('musician', {

    name: {
        type: DataTypes.STRING
    },
    instrument: {
        type: DataTypes.STRING
    }
})

module.exports = {
    Musician
};