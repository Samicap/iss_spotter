
// const { fetchMyIP } = require('./iss');
// const { fetchCoordsByIP } = require('./iss');
// const { fetchISSFlyOverTimes} = require('./iss');
const {nextISSTimesForMyLocation} = require('./iss');


// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log("It worked!  Returned IP: ", ip);
// });


// fetchCoordsByIP(234223.4534, (error, coords) => {
//   if (error) {
//     callback(error, null);
//     return;
//   }
//   if (response.statusCode !== 200) {
//     const mesg = `Status Code ${response.statusCode} when fetching coordinates for IP.  Response ${body}`;
//     callback(Error(msg), null);
//     return;
//   }
// });

// const exampleCoords = {latitude: '49.27670', longitude: '-123.13000'};

// fetchISSFlyOverTimes(exampleCoords, (error, passTimes) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log(('It worked! Returned flyover times: ', passTimes));
// });

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("it didn't work!", error);
  }
  printPassTimes(passTimes);
});

