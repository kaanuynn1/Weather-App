const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/weather', async (req, res) => {
  try {
    const apiKey = 'API KEY';
    const city = req.query.city;
    const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);
    res.send(response.data);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
