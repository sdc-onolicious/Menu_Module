const cors = require('cors');
const bodyParser = require('body-parser');

const express = require('express');

let app = express();

let port = 3040;

// serves up static files to localhost
app.use(express.static('client/dist'));

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

// get db connection
const db = require('../db/index.js');

// Create GET route for menu
app.get('/menu', function(req, res) {
  // This route should send back all the menu items
  console.log('GET Route Works!');
  res.status(200);
  db.getAll(res);
});

// Create GET route for related restaurants
app.get('/relatedR', function(req, res) {
  console.log('GET related RESTAURANTS');
  res.status(200);
  db.getRelated(res);
});

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

module.exports = app;