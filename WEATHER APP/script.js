// Predefined cities with latitude and longitude
const cityCoords = {
  Rawalpindi: { lat: 33.68, lon: 73.05 },
  Lahore: { lat: 31.52, lon: 74.35 },
  Karachi: { lat: 24.86, lon: 67.01 },
  Islamabad: { lat: 33.68, lon: 73.05 },
  London: { lat: 51.51, lon: -0.13 },
  NewYork: { lat: 40.71, lon: -74.00 },
  Tokyo: { lat: 35.68, lon: 139.76 }
};

// Grab DOM elements
const btn = document.getElementById("getWeatherBtn");
const cityInput = document.getElementById("cityInput");
const weatherResult = document.getElementById("weatherResult");

// Button click event
btn.addEventListener("click", getWeather);

// Main function
async function getWeather() {
  const city = cityInput.value.trim();

  if (!city) {
    weatherResult.innerHTML = '<p class="text-red-500">Please enter a city name</p>';
    return;
  }

  const coords = cityCoords[city] || cityCoords[capitalize(city)];

  if (!coords) {
    weatherResult.innerHTML = `<p class="text-red-500">City not found in database</p>`;
    return;
  }

  const url = `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current_weather=true`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.current_weather) {
      const weather = data.current_weather;
      weatherResult.innerHTML = `
        <h2 class="text-2xl font-semibold">${capitalize(city)}</h2>
        <p class="text-4xl font-bold mt-2">${weather.temperature}°C</p>
        <p class="text-gray-600 mt-1">Wind Speed: ${weather.windspeed} m/s</p>
        <p class="text-gray-600 mt-1">Weather Code: ${weather.weathercode}</p>
      `;
    } else {
      weatherResult.innerHTML = '<p class="text-red-500">Weather data not found.</p>';
    }
  } catch (err) {
    weatherResult.innerHTML = '<p class="text-red-500">Error fetching weather data</p>';
    console.error(err);
  }
}

// Helper function to capitalize city name
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}