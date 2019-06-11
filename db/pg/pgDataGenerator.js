const faker = require('faker');
const restruantStream = require('fs').createWriteStream('pg_restruants.csv');
const menuStream = require('fs').createWriteStream('pg_menus.csv');
const relatedStrem = require('fs').createWriteStream('pg_related_restruants.csv');

const dataGenerator = () => {
  const fakerArray = (category, type) => Array.from({length: 50}, () => faker[category][type]()).map((el) => el.split(',').join(''));
  const names = fakerArray('address', 'streetName');
  const words = fakerArray('lorem', 'word');
  const sentences = fakerArray('lorem', 'sentence');
  const countries = fakerArray('address', 'country');
  const cities = fakerArray('address', 'city');
  const menuCategories = ['A', 'L', 'D'];
  const randomChoice = (array) => array[Math.floor(Math.random() * 50)];
  
  //Resturant data
  (async() => {
      for (let i = 0; i < 10000000; i += 1) {
        if (i % 100000 === 0) { console.log(`Generating restruants data ~ ${i / 100000} %`); }
        let string = names[i % 50] + ('-' + (i + 1)) + ',' + randomChoice(countries) + ',' + randomChoice(cities) + ',' + (Math.floor(Math.random() * 3) + 2) + ',' + (Math.floor(Math.random() * 20) + 1) + '\n';
          if(!restruantStream.write(string)) { await new Promise(resolve => restruantStream.once('drain', resolve)) };
      }
    })();
  // menu data
  (async() => {
      for (let i = 0; i < 10000000; i += 1) {
        if (i % 100000 === 0) { console.log(`Generating menus data~ ${i / 100000} %`); }
        for (let j = 0; j < 12; j += 1) {
          let string = randomChoice(words) + ',' + randomChoice(sentences) + ',' + (Math.floor(Math.random() * 20) + 10) + ',' + menuCategories[Math.floor(j / 4)] + ',' + (i + 1) + '\n';
          if(!menuStream.write(string)) { await new Promise(resolve => menuStream.once('drain', resolve)) };
        }
      }
    })();
  // Related restruants data
    (async() => {
    for (let i = 0; i < 10000000; i += 1) {
      if (i % 100000 === 0) { console.log(`Generating related restruants data ~ ${i / 100000} %`); }
      for (let j = 0; j < 3; j += 1) {
        if(!relatedStrem.write((i + 1) + ',' + (Math.floor(Math.random() * 100000) + 1) + '\n')) { await new Promise(resolve => relatedStrem.once('drain', resolve)) };
      }
    }
    })();
  };

dataGenerator();