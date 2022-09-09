import * as fs from 'node:fs/promises';
import * as cheerio from 'cheerio';
import fetch from 'node-fetch';

// fetch html from meme-website
const response = await fetch(
  'https://memegen-link-examples-upleveled.netlify.app/',
);
const body = await response.text();

const $ = cheerio.load(body);
//  console.log($.html());

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

//  write files to memes folder

async function urlToFile() {
  try {
    const jpg1 = imageUrl[0];
    await fs.writeFile(
      '/Users/pschl/projects/node-meme-scraper/memes/01.jpg',
      jpg1,
    );
    const jpg2 = imageUrl[1];
    await fs.writeFile(
      '/Users/pschl/projects/node-meme-scraper/memes/02.jpg',
      jpg2,
    );
    const jpg3 = imageUrl[2];
    await fs.writeFile(
      '/Users/pschl/projects/node-meme-scraper/memes/03.jpg',
      jpg3,
    );
    const jpg4 = imageUrl[3];
    await fs.writeFile(
      '/Users/pschl/projects/node-meme-scraper/memes/04.jpg',
      jpg4,
    );
    const jpg5 = imageUrl[4];
    await fs.writeFile(
      '/Users/pschl/projects/node-meme-scraper/memes/05.jpg',
      jpg5,
    );
    const jpg6 = imageUrl[5];
    await fs.writeFile(
      '/Users/pschl/projects/node-meme-scraper/memes/06.jpg',
      jpg6,
    );
    const jpg7 = imageUrl[6];
    await fs.writeFile(
      '/Users/pschl/projects/node-meme-scraper/memes/07.jpg',
      jpg7,
    );
    const jpg8 = imageUrl[7];
    await fs.writeFile(
      '/Users/pschl/projects/node-meme-scraper/memes/08.jpg',
      jpg8,
    );
    const jpg9 = imageUrl[8];
    await fs.writeFile(
      '/Users/pschl/projects/node-meme-scraper/memes/09.jpg',
      jpg9,
    );
    const jpg10 = imageUrl[9];
    await fs.writeFile(
      '/Users/pschl/projects/node-meme-scraper/memes/10.jpg',
      jpg10,
    );
  } catch (err) {
    console.log(err);
  }
}
console.log(urlToFile());
