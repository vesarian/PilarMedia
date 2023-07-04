require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express()
const port = 3000
const routes = require('./routers/');

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(routes)

app.listen(port, () => {
    console.log(`Pilar on port ${port}`);
})

module.exports = app