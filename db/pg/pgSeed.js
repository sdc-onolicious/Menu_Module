const accountSid = 'AC65394b057ebc5d15bb56bd1b5fb0a273';
const authToken = '6c22e658ebd478f15f168ecba1ac5b58';
const db = require('./Index');
const path = require('path');
const firstline = require('firstline');
const client = require('twilio')(accountSid, authToken);

firstline(path.join(__dirname, 'pg_restruants.csv')).then((result) => console.log(result));

db.query(`COPY restruants(restruant_name, cusine, location, Avg_review, image_path) FROM '${path.join(__dirname, 'pg_restruants.csv')}' DELIMITER ','`, (err) => {
  if (err) {
    client.messages.create({
      body: `Dude it failed sorry! heres the error ${err}`,
      from: '+18189184520',
      to: '+18182649092'
    })
      .then(message => { throw err; });
  } else {
    client.messages.create({
      body: 'Bro! Your restruant Database has been seeded, Nice!',
      from: '+18189184520',
      to: '+18182649092'
    }).then(message => console.log(message.sid));
    console.log('added');
  }
});

db.query(`COPY menu_items(restruant_name, dish, dish_description, price, menu_category, restruant_id) FROM '${path.join(__dirname, 'pg_menus.csv')}' DELIMITER ','`, (err) => {
  if (err) {
    client.messages.create({
      body: `Dude it failed sorry! heres the error ${err}`,
      from: '+18189184520',
      to: '+18182649092'
    })
      .then(message => { throw err; });
  } else {
    client.messages.create({
      body: 'Bro! Your restruant Database has been seeded, Nice!',
      from: '+18189184520',
      to: '+18182649092'
    })
      .then(message => console.log(message.sid));
  }
});


db.query(`COPY related_restruants(source_rest_id, related_rest_id) FROM '${path.join(__dirname, 'pg_related_restruants.csv')}' DELIMITER ','`, (err) => {
  if (err) {
    client.messages.create({
      body: `Dude it failed sorry! heres the error ${err}`,
      from: '+18189184520',
      to: '+18182649092'
    })
      .then(message => { throw err; });
  }
  client.messages
    .create({
      body: 'Bro! Your restruant Database has been seeded, Nice!',
      from: '+18189184520',
      to: '+18182649092'
    }).then(message => console.log(message.sid));
});