const db = require('./db');
const express = require('express');
const app = express();
const path = require('path');


const landingPage = require('./views/landingPage');
const { urlencoded } = require('express');

const port = process.env.port || 3001;

app.use('/public', express.static(path.join(__dirname, '/public')));
app.use(urlencoded({ extended: false }));
app.listen(port, () => console.log(`listening on ${port}`));