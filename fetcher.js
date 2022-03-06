const input = process.argv.slice(2);
// console.log(input);
const url = input.toString();
// console.log(url);
const request = require(`request`);
const fs = require(`fs`);


const fetcher = () => {
  request(url, (error, response, body) => {
    // const data = JSON.parse(body);
    fs.writeFile(`./new1`, url, (error) => {
      if (error) throw error;
      console.log(`Downloaded and saved 3261 bytes to ./index.html`);
    });
  });
};

fetcher();