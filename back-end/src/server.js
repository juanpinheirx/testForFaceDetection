const app = require('./app');

const port = process.env.API_PORT || 3000;

app.listen(port, () => console.log(`App ouvindo na porta ${port}`));