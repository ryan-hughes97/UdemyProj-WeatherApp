class Storage {
  constructor() {
    this.zip;
    this.country_code;
    this.defaultZip = '92555';
    this.defaultCountryCode = 'us';
  }

  getLocationData() {
    if(localStorage.getItem('zip') === null) {
      this.zip = this.defaultZip;
    } else {
      this.zip = localStorage.getItem('zip');
    }

    if(localStorage.getItem('country_code') === null) {
      this.country_code = this.defaultCountryCode;
    } else {
      this.country_code = localStorage.getItem('country_code');
    }

    return {
      zip: this.zip,
      country_code: this.country_code
    };
  }

  setLocationData(zip, country_code) {
    localStorage.setItem('zip', zip);
    localStorage.setItem('country_code', country_code);
  } 
}