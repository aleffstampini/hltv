const Sequelize = require('sequelize');
const database = require('../../db.js');

const Team = database.define('team', {
    id: {
        field: 'id_team',
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        field: 'name',
        type: Sequelize.STRING,
        allowNull: false,
    },
    shieldUrl: {
        field: 'shield_url',
        type: Sequelize.STRING,
        allowNull: true,
    }
});

module.exports = Team;