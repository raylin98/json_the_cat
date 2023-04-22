const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=` + breedName, function(error, response, body) {
    if (body) {
      const data = JSON.parse(body);
      if (data.length === 0) {
        console.log(`Breed not defined`);
        callback(error, 'Breed not defined');
      } else {
        let breedDescription = data[0].description;
        callback(error, breedDescription);
      }
    }
  });
};

module.exports = { fetchBreedDescription };