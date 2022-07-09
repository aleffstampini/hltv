const express = require('express');
const database = require('./db.js');

const app = express();

app.listen(3000, () => {
    console.log('[SERVER] Server is running...');
});

database.authenticate().then(() => {
    console.log('[DATABASE] Database connected!');
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

app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('../src/views/index'));