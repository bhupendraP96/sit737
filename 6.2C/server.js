const express = require('express');
const app = express()

app.get('/', (req, res) => {
    res.send('Hello! Bhupendra. Welcome to the Third version of the application!!!!!!!!!!!!!!');
});

const port = 3000;
app.listen(port, ()=> {
    console.log("Hello i'm listening to port " + port);
})