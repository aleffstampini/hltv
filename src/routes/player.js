const express = require('express');
const Player = require('../models/Player');

const router = express.Router();

const colorize = (text, start, end) => {
    return `\u001B[${start}m${text}\u001B[${end}m`;
};

router.get('/', async (req, res) => {
    const players = await Player.findAll();

    console.log(colorize('[DATABASE] Buscando todos Players cadastrados...', 33, 39));
    console.log(colorize('[DATABASE] Players cadastrados: ', 33, 39) + JSON.stringify(players));
    
    res.send(players);
});

router.post('/', async (req, res) => {
    const player = await Player.create({
        name: req.body.name,
        fkTeam: req.body.fkTeam
    });

    console.log(colorize('[DATABASE] Inserindo novo player: ', 33, 39) + player);
    res.send(player);
});

module.exports = router;