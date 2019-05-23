let faker = require('faker');

const express = require('express');

let app = express();

let port = 3040;

// get db connection
const db = require('../db/index.js');

// Create GET route
app.get('/menu', function(req, res) {
  // This route should send back all the menu items
  console.log('GET Route Works!');
  res.status(200);
  db.getAll(res);
});

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

module.exports = app;