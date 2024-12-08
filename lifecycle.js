const express = require('express');
const app = express();
const port = 3000;

app.use((req, res, next) => {
    console.log(`${req.method} request for ${req.url}`);
    next();
});

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Express App!');
});

app.get('/users', (req, res) => {
    const users = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' }
    ];
    res.json(users);
});

app.post('/users', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).send('Name is required');
    }
    res.status(201).send(`User ${name} added successfully!`);
});

app.get('/users/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Details of user with ID: ${id}`);
});

app.use((req, res) => {
    res.status(404).send('Route not found');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
