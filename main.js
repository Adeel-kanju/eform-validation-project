// main.js
const axios = require('axios');

const apiUrl = 'https://validator.staging-ozg-vermittlungsdienst.de/q/v1/validation';
const eformsVersion = '1.1.0';
const sdkType = '1.9.0';

// Replace 'YOUR_BEARER_TOKEN' with the actual Bearer token provided by your project
const bearerToken = 'YOUR_BEARER_TOKEN';

// Replace 'YOUR_XML_DATA' with the actual XML data provided by your project
const xmlData = 'YOUR_XML_DATA';

async function makeApiCall() {
  try {
    const response = await axios.post(apiUrl, {
      eformsVersion,
      sdkType,
      eforms: xmlData,
    }, {
      headers: {
        'Authorization': `Bearer ${bearerToken}`,
        'Content-Type': 'application/json',
      },
    });

    console.log('Response Data:', response.data);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

makeApiCall();
