const express = require('express');
const app = express();

const database = require('./db.js');

app.set('view engine', 'ejs');
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.render('../src/views/index');
});

const colorize = (text, start, end) => {
    return `\u001B[${start}m${text}\u001B[${end}m`;
};

app.listen(3000, () => {
    console.log(colorize('[SERVER] Server is running...', 32, 39));
});

database.authenticate().then(() => {
    console.log(colorize('[DATABASE] Database connected!', 32, 39));
}).catch((err) => {
    console.error(colorize('[DATABASE] Database error: ', 31, 39) + err);
});

const team = require('./src/routes/team.js');
const player = require('./src/routes/player.js');
const championship = require('./src/routes/championship.js');
const news = require('./src/routes/news.js');

app.use('/team', team);
app.use('/player', player);
app.use('/championship', championship);
app.use('/news', news);