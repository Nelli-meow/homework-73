const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    return res.send(`Empty page....`);
});

app.get('/:text', (req, res) => {
    return res.send(`Hello ${req.params.text} :3`);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});