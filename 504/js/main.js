import { getWeather } from './services/weatherServices.js'
    
    async function showWeather() {
       return getWeather(56.05, 12.70);
    }

    const data = await showWeather();

    let pTag = document.createElement('p');
    pTag.innerHTML = `Temperatur för Helsingborg: ${data.current_weather.temperature}`;


    document.body.appendChild(pTag);

    console.log();

