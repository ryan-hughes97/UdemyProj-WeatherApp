// Init storage
const storage = new Storage();
// Get stored location data
const weatherLocation = storage.getLocationData();

// Init weather object
const weather = new Weather(weatherLocation.zip, weatherLocation.country_code);

// Init ui
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const zipCode = document.getElementById('zip-code').value;
  const countryCode = document.getElementById('country-code').value;

  weather.changeLocation(zipCode, countryCode);

  // set location in ls
  storage.setLocationData(zipCode, countryCode);

  // Get weather and display
  getWeather();

  // close modal
  $('#locModal').modal('hide');
});

function getWeather(){
  weather.getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.log(err));
}

// convert kelvin to celsius
const convertKelvinToFahrenheit = kelvin => {
  if(kelvin < 0) {
    return "below absolute zero (0 K)";
  } else {
    let myCelcius = 0;
    let myCelciusRounded = 0;
    let myFahrenheit = 0;

    myCelcius = kelvin - 273.15;
    myCelciusRounded = Math.round(myCelcius);
    myFahrenheit = myCelciusRounded * (9/5) + 32;
    return myFahrenheit.toFixed(2);
  }
}