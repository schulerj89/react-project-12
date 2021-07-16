const express = require('express');
const app = express();

app.get('/api/home', (req, res) => {
  const data = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Josh'},
  ];
  res.json(data);
});

module.exports = app;
