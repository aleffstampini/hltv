const Sequelize = require('sequelize');
const database = require('../../db.js');

const Player = database.define('player', {
    id: {
        field: 'id_player',
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
    fkTeam: {
        field: 'fk_team',
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'team',
            key: 'id_team'
        }
    } 
},
{
    tableName: 'player',
    underscored: true,
    timestamps: false
});

module.exports = Player;