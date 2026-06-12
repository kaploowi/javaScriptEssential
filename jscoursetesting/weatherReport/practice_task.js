function showweatherDetails(event) {
    event.preventDefault();

    const lat = document.getElementById('latitude').value;
    const lon = document.getElementById('longitude').value;
    const apiKey = 'c4f86ece00bc8aa272652ac9065af12d'; // Replace 'YOUR_API_KEY' with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<h2>Weather in ${data.coord.lat}°, ${data.coord.lon}°</h2>
                                    <p>Temperature: ${data.main.temp} &#8451;</p>
                                    <p>Weather: ${data.weather[0].description}</p>`;
    })
}

document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );