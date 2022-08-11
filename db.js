const path = require('path');
const { Sequelize, Model, DataTypes } = require('sequelize');

// TODO - create the new sequelize connection

const sequelize = new Sequelize ({
    dialect: 'sqlite',
    storage: './data.sqlite'
})

module.exports = {
    sequelize,
    Sequelize, DataTypes
};
