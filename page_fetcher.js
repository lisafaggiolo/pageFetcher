const request = require('request');
const http_adress = process.argv.slice(2)[0];
const saving_file = process.argv.slice(2)[1];



console.log('SAVING FILE =>', saving_file);
console.log('HTTP ADRESS =>', http_adress)

request(http_adress, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred

//   const data = JSON.parse(body);
  console.log("data => ", body);
//   console.log(typeof data);
});