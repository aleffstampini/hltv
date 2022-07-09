const Sequelize = require('sequelize');

const sequelize = new Sequelize('hltv', 'root', '1601', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});

module.exports = sequelize;