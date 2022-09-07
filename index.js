import fetch from 'node-fetch';

// fetch html from meme-website
const response = await fetch(
  'https://memegen-link-examples-upleveled.netlify.app/',
);
const body = await response.text();
//console.log(body);
