const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Request and Response Handling Example!');
});

app.get('/search', (req, res) => {
    const { keyword, limit } = req.query;
    res.send(`Search results for keyword: "${keyword}", Limit: ${limit || 'none'}`);
});

app.get('/users/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Details of user with ID: ${id}`);
});

app.post('/users', (req, res) => {
    const { name, age } = req.body;
    if (!name || !age) {
        return res.status(400).send('Name and age are required');
    }
    res.send(`User ${name}, aged ${age}, added successfully!`);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
