const express = require('express');

const PORT = process.env.PORT || 3000;

const app = express()

app.get('/', (req, res) => {
    res.send('Hello world!, This is Rushank\'s api')
})

app.get('/secret', (req, res) => {
    res.send('Congratulations, you have discovered a secret api')
})

app.listen(PORT, () => {
    console.log('Server is up and running on port: '+PORT)
})