const express = require('express');
const path = require('path');

const config = require('./config');

const app = express();

app.use(express.static(path.join(__dirname, './public')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
})

app.listen(config.PORT, () => {
    console.log(`The server is running on http:localhost:${config.PORT}`);
});
