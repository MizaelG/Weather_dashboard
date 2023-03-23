var accessCityForm = document.getElementById("search-cities");
var inputCity = document.getElementById("city");
var key = "a1b6dd38047a16d1f27949b0f5b9";
var dateEl =document.querySelector(".card-title");
var tempEl = document.getElementById("temp");
var humidEl = document.getElementById("humid");
var windEl = document.getElementById("uvi");
var  futureEl = document.getElementById("future-cast");
var getDataBack = document.getElementById("weather-card");



function showWeatherData(city) {
    console.log(city);
    fetch("https://api.openweathermap.org/data/2.5/weather") + city +
}
