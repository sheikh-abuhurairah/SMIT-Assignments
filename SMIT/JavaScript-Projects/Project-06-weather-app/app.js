const apiKey = "7718b13138d8dacf2b146913f1cb7e52";

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const errorMsg = document.getElementById("errorMsg");
const weatherCard = document.getElementById("weatherCard");

const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const condition = document.getElementById("condition");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const weatherIcon = document.getElementById("weatherIcon");

searchBtn.addEventListener("click", getWeather);

// ENTER KEY SUPPORT
cityInput.addEventListener("keypress",(e)=>{
  if(e.key==="Enter"){
    getWeather();
  }
});

async function getWeather(){

  const city = cityInput.value.trim();

  if(!city){
    showError("Please enter city name");
    return;
  }

  try{

    errorMsg.textContent="Loading...";

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    const data = await response.json();

    if(data.cod !== 200){
      throw new Error(data.message);
    }

    console.log(data);
    

    errorMsg.textContent="";
    weatherCard.style.display="block";

    cityName.textContent=`${data.name}, ${data.sys.country}`;
    temperature.textContent=`Temperature: ${data.main.temp}°C`;
    condition.textContent=`Condition: ${data.weather[0].description}`;
    humidity.textContent=`Humidity: ${data.main.humidity}%`;
    windSpeed.textContent=`Wind Speed: ${data.wind.speed} m/s`;

    weatherIcon.src=
      `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  }
  catch(err){
    showError("City not found");
  }
}

function showError(msg){
  errorMsg.textContent=msg;
  weatherCard.style.display="none";
}