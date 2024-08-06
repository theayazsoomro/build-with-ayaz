document.getElementById('getWeatherBtn').addEventListener('click', getWeather);

async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = '503f3c646449343740a33bf588210159'; // OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        displayWeather(data);
        console.log(data);
    } catch (error) {
        alert(error.message);
    }
}

function displayWeather(data) {
    document.getElementById('cityName').textContent = data.name;
    document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
    document.getElementById('weatherDescription').textContent = `Description: ${data.weather[0].description}`;
}
