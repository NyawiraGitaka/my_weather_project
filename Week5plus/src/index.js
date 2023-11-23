function displayTemp(response) {
  let temp = document.querySelector(".current-temp-value");
  console.log(response.data);
  let cityName = document.querySelector(".present-city");
  let currentTemp = Math.round(response.data.temperature.current);
  cityName.innerHTML = response.data.city;
  temp.innerHTML = currentTemp;
}

function getWeather(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  let apiKey = "314o3fa79375c2341f0ct1d3593ab8a2";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemp);

  let time = document.querySelector(".time");
  let day = document.querySelector(".day");
  let daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let today = new Date();
  day.innerHTML = daysOfWeek[today.getDay()];
  let hours = today.getHours();
  let minutes = today.getMinutes();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  currentTime = `${hours}:${minutes}`;
  time.innerHTML = currentTime;
}

let searchCity = document.querySelector(".search-form");
searchCity.addEventListener("submit", getWeather);
