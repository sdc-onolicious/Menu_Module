const { Client } = require('pg');
const connectionString = 'postgresql://EliMoreh@localhost:5432/testPostgresMenu';

const client = new Client({
  connectionString: connectionString,
});

client.connect(function(err) {
  if (err) throw err;
});

module.exports = client;