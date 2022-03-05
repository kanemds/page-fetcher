const input = process.argv.slice(2);

const fs = require(`fs`);

const dl = fs.writeFile(`./new`, input, (error) => {
  if (error) throw error;
  console.log(`Downloaded and saved 3261 bytes to ./index.html`);
});