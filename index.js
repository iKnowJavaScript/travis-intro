const express = require('express');

const app = express();

app.get('/', (req,res) => {
    res.send('Continuous Integration with Travis.');
});

const server = app.listen(3000, () => {
    console.log('Tune in to Port 3000 on localHost.')
});

module.exports = server;
