const apiKey = "YOUR_API_KEY"; // paste your OpenWeather key
const defaultCity = "Delhi"; // change if you want another city

function updateWeather(city = defaultCity) {
  const weatherEl = document.querySelector(".Weather");
  const cityEl = document.querySelector(".city");

  if (!weatherEl || !cityEl) {
    console.error("Weather elements not found in the DOM.");
    return;
  }

  weatherEl.textContent = "--";
  cityEl.textContent = city;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
    city
  )}&units=metric&appid=${apiKey}`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Weather data not found");
      }
      return response.json();
    })
    .then((data) => {
      const temperature = Math.round(data.main.temp);

      weatherEl.textContent = `${temperature}°C`;
      cityEl.textContent = data.name || city;
    })
    .catch((error) => {
      console.error(error);
      weatherEl.textContent = "--";
    });
}

window.addEventListener("DOMContentLoaded", () => {
  updateWeather();
});
