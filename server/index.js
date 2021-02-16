const express = require('express');
const db = require('../database');
const app = express();
const PORT = 3000 || process.env.PORT;

app.use(express.static('public'));
app.use(express.json());

app.get('/api/movies', (req, res) => {
  const sql = 'SELECT * FROM movielist';
  db.query(sql, (err, data) => {
    if (err) {
      console.log(err);
      res.send(500);
    } else {
      res.send(data);
    }
  })
});

app.get('/api/movies/search', (req, res) => {
  const { search } = req.query;
  const sql = 'SELECT * FROM movielist WHERE title LIKE ?';
  db.query(sql, ['%' + search + '%'], (err, data) => {
    if (err) {
      console.log(err);
      res.send(500);
    } else {
      res.send(data);
    }
  })
});

app.post('/api/movies', (req, res) => {
  const { title, watched } = req.body;
  const sql = 'INSERT INTO movielist (title, watched) VALUES (?, ?)';
  db.query(sql, [title, watched], (err) => {
    if (err) {
      console.log(err);
      res.send(500);
    } else {
      res.send(201);
    }
  })
});

app.patch('/api/movies', (req, res) => {
  const { Title, Watched } = req.body;
  const sql = 'UPDATE movielist SET watched = ? WHERE title = ?';
  let toggle = false;
  if (Watched === 0) {
    toggle = 1;
  } else {
    toggle = 0;
  }
  db.query(sql, [toggle, Title], (err) => {
    if (err) {
      console.log(err);
      res.send(500)
    } else {
      res.send(204);
    }
  })
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})