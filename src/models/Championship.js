const Sequelize = require('sequelize');
const database = require('../../db.js');

const Championship = database.define('championship', {
    id: {
        field: 'id_championship',
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        field: 'name',
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    shieldUrl: {
        field: 'shield_url',
        type: Sequelize.STRING,
        allowNull: true
    }, 
});

module.exports = Championship;