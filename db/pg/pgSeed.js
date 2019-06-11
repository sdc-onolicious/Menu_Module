const db = require('./Index');
const path = require('path');
const firstline = require('firstline');

db.query(`COPY restruants(restruant_name, cusine, location, Avg_review, image_path) FROM '${path.join(__dirname, 'pg_restruants.csv')}' DELIMITER ','`, (err) => {
  if (err) { throw err; }
});

db.query(`COPY menu_items(restruant_name, dish, dish_description, price, menu_category, restruant_id) FROM '${path.join(__dirname, 'pg_menus.csv')}' DELIMITER ','`, (err) => {
  if (err) { throw err; }
});


db.query(`COPY related_restruants(source_rest_id, related_rest_id) FROM '${path.join(__dirname, 'pg_related_restruants.csv')}' DELIMITER ','`, (err) => {
  if (err) { throw err; }
});