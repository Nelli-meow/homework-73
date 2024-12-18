const express = require('express');
const Vigenere = require('caesar-salad').Vigenere;
const app = express();
const port = 8000;

const password = 'hello';

app.get('/', (req, res) => {
    res.send('simple page :)');
})

app.get('/encode/:text', (req, res) => {
    const params = req.params.text;
    const cipher = Vigenere.Cipher(password).crypt(params);

    return res.send(`Your encrypted password: ${cipher} `);
});

app.get('/decode/:text', (req, res) => {
    const params = req.params.text;
    const decipher = Vigenere.Decipher(password).crypt(params);

    return res.send(`Your decrypted password: ${decipher} `);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})