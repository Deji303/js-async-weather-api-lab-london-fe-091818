const API_KEY = "YOUR API KEY"

function handleFormSubmit() {
  //handle submit event
  let x = document.getElementById("cityForm");
  x.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("submitted");
    let city = document.getElementById("city").value;
    console.log(city);
    city.replace(" ","+");
    fetchCurrentWeather(city);
  })
}

function fetchCurrentWeather(city) {
  //fetch current weather based on city
   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=c8231160d596f817e883f76a990ba17c`)
  .then(response => response.json())
  .then(json => displayCurrentWeather(json))
  
}





function displayCurrentWeather(json) {
  //render current weather data to the DOM using provided IDs and json from API
}


function fetchFiveDayForecast(city) {
  //fetch five day forecast data based on city
}

function displayFiveDayForecast(json) {
  //render five day forecast data to the DOM using provided IDs and json from API
}

function createChart(json) {
  //Bonus: render temperature chart using five day forecast data and ChartJS
}

document.addEventListener('DOMContentLoaded', function() {
  //add event listener here for form submission
  handleFormSubmit()
})


