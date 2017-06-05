var axios = require('axios');

const OPEN_WEATHER_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=f0d208f62aedc2de5e68c314ad8056a8&units=imperial';

module.exports = {
  getTemp: function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(res){
        if (res.data.cod && res.data.message){
        throw new Error('Can\'t get shit cap');
      } else {
        return(res.data.main.temp);
      }
    }, function(res){
        throw new Error('Can\'t get shit cap');
    });
  }
}
