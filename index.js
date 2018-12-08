const API_KEY = "&APPID=c8231160d596f817e883f76a990ba17c"

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
    fetchFiveDayForecast(city);
  })
}

function fetchCurrentWeather(city) {
  //fetch current weather based on city
   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}${API_KEY}`)
  .then(response => response.json())
  .then(json => displayCurrentWeather(json))
  
}






function displayCurrentWeather(json) {
  //render current weather data to the DOM using provided IDs and json from API
  currentTemp = json["main"]["temp"];
  lowTemp = json["main"]["temp_min"];
  highTemp = json["main"]["temp_max"];
  humidity = json["main"]["humidity"];
  cloudCover = json["clouds"]["all"];
  let a = document.getElementById("temp");
  let b = document.getElementById("low");
  let c = document.getElementById("high");
  let d = document.getElementById("humidity");
  let e = document.getElementById("cloudCover");
  a.innerHTML = currentTemp; 
  b.innerHTML = lowTemp; 
  c.innerHTML = highTemp; 
  d.innerHTML = humidity; 
  e.innerHTML = cloudCover; 
}


function fetchFiveDayForecast(city) {
  //fetch five day forecast data based on city
  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}${API_KEY}`)
  .then(response => response.json())
  .then(json => displayFiveDayForecast(json) )
  
}

// list: Array(40)
// 0:
// clouds: {all: 88}
// dt: 1544292000
// dt_txt: "2018-12-08 18:00:00"
// main: {temp: 272.54, temp_min: 272.537, temp_max: 272.54, pressure: 1029.49, sea_level: 1049.85, …}
// rain: {}
// snow: {}
// sys: {pod: "n"}
// weather: [{…}]
// wind: {speed: 3.91, deg: 10.0021}
// __proto__: Object
// 1: {dt: 1544302800, main: {…}, weather: Array(1), clouds: {…}, wind: {…}, …}
// 2: {dt: 1544313600, main: {…}, weather: Array(1), clouds: {…}, wind: {…}, …}

function displayFiveDayForecast(json) {
  //render five day forecast data to the DOM using provided IDs and json from API
  let i = 0; 
  let fiveDay = document.getElementById("five_day")
  let listObject = json["list"]; 
  console.log(listObject)
  for (let item in listObject) {
    let node = document.createElement("LI");
    node.innerHTML += listObject[i]["dt_txt"];
    node.innerHTML += listObject[i]["main"]["temp"];
    node.innerHTML += listObject[i]["main"]["humidity"];
    fiveDay.appendChild(node)
    i++
  }
}











function createChart(json) {
  //Bonus: render temperature chart using five day forecast data and ChartJS
}

document.addEventListener('DOMContentLoaded', function() {
  //add event listener here for form submission
  handleFormSubmit()
})


