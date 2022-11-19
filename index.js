import * as fs from 'node:fs/promises';
import * as cheerio from 'cheerio';
import fetch from 'node-fetch';

// fetch html from meme-website
const response = await fetch(
  'https://memegen-link-examples-upleveled.netlify.app/',
);
const body = await response.text();

const $ = cheerio.load(body);

//  put the img src in an array
const imageUrl = [];

$('img', body).each(function () {
  const image = $(this).attr('src');
  imageUrl.push(image);
});
// create array and push first 10 items
const first10Img = [];
for (let i = 0; i < 10; i++) {
  first10Img.push(imageUrl[i]);
}

const imageData = [];

for (let i = 0; i < first10Img.length; i++) {
  const imageUrlData = await fetch(first10Img[i]);

  const buffer = await imageUrlData.arrayBuffer();

  const stringifiedBuffer = Buffer.from(buffer);

  imageData.push(stringifiedBuffer);
  try {
    //  write files to memes folder

    fs.writeFile(`./memes/0${i + 1}.jpg`, imageData[i], (err) => {
      if (err) {
        return console.log(err);
      }
    }).catch((err) => console.log(err));
  } catch (err) {
    console.log(err);
  } finally {
    console.log('Image saved');
  }
}
