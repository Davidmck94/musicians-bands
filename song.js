const {Sequelize, sequelize, DataTypes} = require('./db');

let Song = sequelize.define('song', {

    title: {
        type: DataTypes.STRING
    },
    year: {
        type: DataTypes.INTEGER
    }
})

module.exports = {Song}

