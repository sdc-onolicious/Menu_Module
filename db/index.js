// Make connection to db

const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Jackie',
  database: 'complete_menu'
});


// Read all function used for the server GET route (INNER JOIN menu_items ON menu.id)
const getAll = function(res) {
  connection.connect();
  console.log('it reached here');
  connection.query('SELECT * FROM menu INNER JOIN menu_items ON menu.id', (err, data) => {
    if (err) {
      res.status(500);
      res.send('getAll request error: ', err);
    } else {
      res.status(200);
      res.send(data);
    }
  });
  connection.end();
};

module.exports = {
  connection: connection,
  getAll: getAll
};