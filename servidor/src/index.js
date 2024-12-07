const express = require('express');
const cors = require('cors');
const personaRoutes = require('./personasRoutes');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', personaRoutes);

const port = 3001;

app.listen(port, () => console.log('listening on port ' + port));