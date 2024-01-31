#!/usr/bin/node
const request = require('request');
const url = process.argv[2];

request(url, (error, response, body) => {
  if (error) return console.error('error:', error);

  const films = JSON.parse(body).results;
  const count = films.filter(film =>
    film.characters.some(character => character.includes('18'))
  ).length;

  console.log(count);
});
