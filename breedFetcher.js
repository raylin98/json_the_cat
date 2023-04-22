const request = require('request');

const userInput = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${userInput}`, (error, response, body) => {
  if (error) {
    console.log('Error: connection error!', error);
  }
  if (response) {
    console.log(`Connected... Gathering information for the request!`);
    console.log("");
  }
  if (body) {
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log("Unable to locate this type of breed, please check for any spelling errors!");
    } else {
      let breedDescription = data[0].description;
      console.log(breedDescription);
    }
  }
});
