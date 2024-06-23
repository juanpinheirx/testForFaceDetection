const express = require('express');
const authorizedUsers = require('./utils/users');


const app = express();

app.get('/hello-world', (_req, res) => {
  res.send('Hello World!');
});

app.use(express.json());

app.post('/api-face-auth', async (req, res) => {
  try {
    const { image } = req.body;
    const authorized = authorizedUsers.includes(image);
    res.json({ authorized });
  }
  catch (error) {
    res.status(500).json({ message: error.message });
  }
})

module.exports = app;