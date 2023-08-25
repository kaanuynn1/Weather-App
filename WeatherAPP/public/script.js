document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('searchButton');
    const cityInput = document.getElementById('cityInput');
    const weatherInfo = document.getElementById('weatherInfo');
  
    searchButton.addEventListener('click', async () => {
      const city = cityInput.value;
      if (city) {
        const response = await fetch(`/weather?city=${city}`);
        const data = await response.json();
        weatherInfo.innerHTML = `
          <h2>${data.location.name}, ${data.location.country}</h2>
          <p>Temperature: ${data.current.temp_c}°C</p>
          <p>Weather Condition: ${data.current.condition.text}</p>
        `;
      }
    });
  });
  