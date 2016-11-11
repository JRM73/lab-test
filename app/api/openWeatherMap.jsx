/*
API KEY: 270484332074c5f42127e4d2b9dcd5e2
http://api.openweathermap.org/data/2.5/find?q=London&units=metric&appid=270484332074c5f42127e4d2b9dcd5e2
*/

var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=270484332074c5f42127e4d2b9dcd5e2&units=metric';

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res){
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function(res){
        throw new Error(res.data.message);
    });
  }
}
