const express = require('express');
const router = express.Router();
const personaController = require('./controller/personaController');

router.get('/person', personaController.obtenerPersonas);
router.post('/person', personaController.registrarPersona);

module.exports = router;