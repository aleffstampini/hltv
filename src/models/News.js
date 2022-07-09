const Sequelize = require('sequelize');
const database = require('../../db.js');

const News = database.define('news', {
    id: {
        field: 'id_news',
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        field: 'title',
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        field: 'description',
        type: Sequelize.STRING,
        allowNull: false
    },
    text: {
        field: 'text',
        type: Sequelize.STRING,
        allowNull: false
    },
    imageUrl: {
        field: 'image_url',
        type: Sequelize.STRING,
        allowNull: true
    },
    createdAt: {
        field: 'created_at',
        type: Sequelize.DATE,
        allowNull: false
    }
});

module.exports = News;