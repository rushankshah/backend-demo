const express = require('express');

const PORT = process.env.PORT || 3000;

const app = express()

app.get('/', (req, res) => {
    res.send('Hello world!, This is Rushank\'s api')
})

app.listen(PORT, () => {
    console.log('Server is up and running on port: '+PORT)
})