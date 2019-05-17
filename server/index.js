const express = require('express');

let app = express();

let port = 3040;

// get db connection
const db = require('../db/index.js');

// Create GET route
app.get('/menu', function(req, res) {
  // This route should send back all the menu items
  console.log('Get Route Works!');
  db.getAll(res);
});

// Create POST route
// Include Faker data for the posts
app.post('/menu',function(req, res) {
  
});



app.listen(port, function() {
  console.log(`listening on port ${port}`);
});