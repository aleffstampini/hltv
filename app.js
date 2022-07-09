const express = require('express');
const mysql = require('mysql');

const app = express();

app.listen(3000, () => {
    console.log('[SERVER] Server is running...');
});

const conn = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '1601',
    database: 'hltv',
    insecureAuth: true
});

conn.connect(function(err) {
    if (err) throw err;
    console.log('[DATABASE] Database connected!');
});

const team = require('./src/routes/team.js');
const player = require('./src/routes/player.js');
const championship = require('./src/routes/championship.js');
const news = require('./src/routes/news.js');

app.use('/team', team);
app.use('/player', player);
app.use('/championship', championship);
app.use('/news', news);