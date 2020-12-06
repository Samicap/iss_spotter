
const request = require('request');

const searchURLForIP = 'https://api.ipify.org?format=json';


const fetchMyIP = function(callback) {
  
  request(searchURLForIP, (error, response, body) => {
    if (error) return callback(error, null);

    if (response.statusCode !== 200) {
      callback(Error(`Status code ${response.statusCode} when fetching IP: ${body}`), null);
      return;
    }
    if (body !== "[]") {
      let data = JSON.parse(body);
      description = data.ip;
      console.log(description)
    }

  });
};

module.exports = {fetchMyIP };