const fs = require('fs');
const db = require('./db.js');
const utils = require('./utils.js');

const gender = db.gender;
const maleNames = db.maleNames;
const femaleNames = db.femaleNames;
const lastNames = db.lastNames;

const people = [];

for (let i=0; i<20; i++) {

  const person = {};

  person.gender = utils.randChoice(gender);

  if (person.gender === 'M') {
    person.firstName = utils.randChoice(maleNames);
  } else {
    person.firstName = utils.randChoice(femaleNames);
  }

  person.lastName = utils.randChoice(lastNames);
  person.age = Math.floor(Math.random() * (78 - 18 + 1)) + 18;
  person.email = `${person.firstName}.${person.lastName}@gmail.com`;
  person.phone = utils.generatePhoneNumber();

  people.push(person);

}

const json = JSON.stringify(people);
const filePath = 'people.json';

fs.writeFile(filePath, json, 'utf8', (err) => {
  if (err) {
    console.error('Error writing JSON file:', err);
    return;
  }
  console.log('people.json file has been successfully generated.');
});