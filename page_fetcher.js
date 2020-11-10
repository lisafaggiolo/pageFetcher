const request = require('request');
const fs = require('fs');
const http_adress = process.argv.slice(2)[0];
const saving_file = process.argv.slice(2)[1];

request(http_adress, (error, response, body) => {
    console.log('ERROR =>', error);
    const content = body;
    try {
      const data = fs.writeFileSync('./index.html', content)
      console.log(`Downloaded and saved ${response.headers["content-length"]} bytes to ${saving_file}`)
    } catch (err) {
      console.error('ERROR =>',err)
    }
});