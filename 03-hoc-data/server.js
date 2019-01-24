const express = require('express');
const PORT = 3001;
const mockUsers = require('./mock-users.json');

const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res) => {
    setTimeout(() => {
        res.send({
            users: mockUsers
        });
    }, 1000);
});

app.listen(PORT, () => {
    console.log(`Proxy server started at http://localhost:${PORT}/`);
});
