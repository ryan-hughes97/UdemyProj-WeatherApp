class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.temp = document.getElementById('w-temp');
    this.minTemp = document.getElementById('w-min-temp');
    this.maxTemp = document.getElementById('w-max-temp');
    this.wind = document.getElementById('w-wind');
  }

  paint(res) {
    this.location.textContent = `${res.name}, ${res.sys.country}`;
    // this.desc.textContent = `${res.weather[0].description}`;
    this.string.textContent = `Weather: ${res.weather[0].main}`;
    this.temp.textContent = `Temperature: ${convertKelvinToFahrenheit(res.main.temp)}\u00B0F`;
    this.minTemp.textContent = `Minimum Temperature: ${convertKelvinToFahrenheit(res.main.temp_min)}\u00B0F`;
    this.maxTemp.textContent = `Maximum Temperature: ${convertKelvinToFahrenheit(res.main.temp_max)}\u00B0F`;
    this.feelsLike.textContent = `Feels Like: ${convertKelvinToFahrenheit(res.main.feels_like)}\u00B0F`;
    this.humidity.textContent = `Relative Humidity: ${res.main.humidity}%`;
    this.icon.setAttribute(res.weather[0].icon);
  }
}