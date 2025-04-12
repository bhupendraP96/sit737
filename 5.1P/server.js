const express = require('express');
const app = express()

app.get('/', (req, res) => {
    res.send('Hello! Bhupendra. Welcome to the web server.');
});

const port = 3000;
app.listen(port, ()=> {
    console.log("Hello i'm listening to port " + port);
})