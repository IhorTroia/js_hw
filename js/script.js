async function getWeather() {
  const weather = await fetch('http://api.openweathermap.org/data/2.5/weather?q=KYIV&units=metric&APPID=5d066958a60d315387d9492393935c19');
  return await weather.json();
}

function renderWeather(data) {
  const container = document.querySelector('.container');
  const weatherTemplate = document.createElement('div');
  weatherTemplate.classList.add('weather');
  weatherTemplate.innerHTML = `
        <p>
          <img 
                src='http://openweathermap.org/img/w/${data.weather[0].icon}.png' 
                alt='Weather icon'
                width="50" 
                height="50"
          >
        </p>
        <p>Temperature: ${data.main.temp}</p>
        <p>Feels like: ${data.main.feels_like}</p>
        <p>Clouds: ${data.weather[0].description}</p>
        <p>Pressure: ${data.main.pressure}</p>`;
  container.append(weatherTemplate);
}

async function loadedHandler() {
  const weather = await getWeather();
  console.log(weather);
  await renderWeather(weather);
}

document.addEventListener('DOMContentLoaded', loadedHandler);
