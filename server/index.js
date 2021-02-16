const express = require('express');
const app = express();
const port = 3000;

express.json();

app.use(express.json());

app.get('/api/movies', (req, res) => {
  console.log('GET');
  res.send(200);
});

app.post('/api/movies', (req, res) => {
  const { title } = req.body;
  console.log('POST');
  res.send(201);
});

app.get('/api/movies/search', (req, res) => {
  const { search } = req.body;
  console.log('GET SEARCH');
  res.send(200);
});

app.listen(port, () => {
  console.log('Server Running');
});