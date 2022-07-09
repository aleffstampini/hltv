const express = require('express');
const Player = require('../models/Player');

const router = express.Router();

router.get('/', async (req, res) => {
    const players = await Player.findAll();

    console.log('[FIND] Buscando todos Players cadastrados...');
    console.log('[FIND] Players cadastrados: ' + JSON.stringify(players, null, '\t'));
    
    res.send(players);
});

router.post('/', async (req, res) => {
    const player = await Player.create({
        name: req.body.name,
        fkTeam: req.body.fkTeam
    });

    console.log('[CREATE] inserindo novo player: ' + player);
    res.send(player);
});

module.exports = router;