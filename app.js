const express = require('express')

const app = express();


app.get('/', (req, res) => {
    res.send("We are in home")
});


app.listen(3000);

