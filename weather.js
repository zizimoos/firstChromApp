const weather = document.querySelector(".js-weather");

const API_KEY = "45847c92c4b17407254d3d738d721454";

const getWeather = ({ latitude, longitude }) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&lang=kr`
  )
    .then((res) => res.json())
    .then((jsondata) => {
      console.log(jsondata);
      const temp = Math.floor(jsondata.main.temp);
      const tempDescription = jsondata.weather[0].description;
      weather.innerHTML = `${temp}°C ${tempDescription}`;
    });
};

const handleSuccess = (position) => {
  //   console.log(position);
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude,
  };
  getWeather(coordsObj);
};

const handleError = (error) => {
  if (error) {
    console.log("Can't access geo location");
  }
};

const askForCoords = () => {
  navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
};
const initWeather = () => {
  askForCoords();
};

initWeather();
