document.addEventListener("DOMContentLoaded", function () {
    const cityInput = document.getElementById("city");
    const getWeatherButton = document.getElementById("getWeather");
    const cityName = document.getElementById("cityName");
    const temperature = document.getElementById("temperature");
    const weatherDescription = document.getElementById("weatherDescription");

    getWeatherButton.addEventListener("click", function () {
        const city = cityInput.value;
        if (city.trim() !== "") {
            searchWeather(city);
        }
    });

    function searchWeather(city) {
        const apiKey = "42d23ad9977a0afe5a0ca12a3d75980d";  
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                cityName.textContent = data.name;
                temperature.textContent = data.main.temp;
                weatherDescription.textContent = data.weather[0].description;
            })
            .catch(error => {
                console.error("An error occurred: " + error);
            });
    }
});
