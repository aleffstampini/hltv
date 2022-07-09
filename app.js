const express = require('express');
const Sequelize = require('sequelize');

const app = express();

app.listen(3000, () => {
    console.log('\n[SERVER] Server is running...\n');
});

const connection = new Sequelize('hltv', 'root', '1601', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});

connection.authenticate().then(() => {
    console.log('\n[DATABASE] Database connected!');
}).catch((err) => {
    console.error('[DATABASE] Database error: ' + err);
});

const team = require('./src/routes/team.js');
const player = require('./src/routes/player.js');
const championship = require('./src/routes/championship.js');
const news = require('./src/routes/news.js');

app.use('/team', team);
app.use('/player', player);
app.use('/championship', championship);
app.use('/news', news);