import cheerio from 'cheerio';
import fetch from 'node-fetch';

// fetch html from meme-website
const response = await fetch(
  'https://memegen-link-examples-upleveled.netlify.app/',
);
const body = await response.text();
//console.log(body);

const $ = cheerio.load(body);
//console.log($.html());
const imageUrl = [];
const imgSrc = $('img', body).each(function () {
  const image = $(this).attr('src');
  imageUrl.push(image);
});

//console.log(imageUrl);
const first10Img = [];

for (let i = 0; i < 10; i++) {
  first10Img.push(imageUrl[i]);
}

console.log(first10Img[1]);
