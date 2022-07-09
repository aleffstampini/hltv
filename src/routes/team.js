const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('team route');
});

module.exports = router;