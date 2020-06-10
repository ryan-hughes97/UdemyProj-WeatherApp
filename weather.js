class Weather {
  constructor(zip, country_code) {
    this.apiKey = '42fdd513ced417b8903d93c06a1108a4';
    this.zip = zip;
    this.country_code = country_code;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${this.zip},${this.country_code}&appid=${this.apiKey}`);
    console.log(response);
    
    const responseData = await response.json();

    return responseData;
  }

  changeLocation(zip, country_code) {
    this.zip = zip;
    this.country_code = country_code;
  }
}