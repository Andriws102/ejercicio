const express = require('express');
const router = express.Router();

router.get('/person', (req, res) => {
    res.json({ message: 'Entro al cliente' });
});

module.exports = router;