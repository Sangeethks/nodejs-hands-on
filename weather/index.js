const axios = require('axios');

const weather = {
  fetchLatLng: (address) => {
    return new Promise(function(resolve, reject) {
      axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
        params: {
          address,
          key: 'AIzaSyApS5rL6aYuX_Zu32f_iMCLxbTYrMbGo1Q'
        }
      }).then(response => {
        // console.log('[fetchLatLng response]', response);

        let result = response.data.results[0];
        let lat = result.geometry.location.lat;
        let lon = result.geometry.location.lng;

        resolve({ lat, lon });
      }).catch(error => {
        // console.log('[fetchLatLng error]', error);
        reject(error);
      });
    });;
  },
  fetchWeatherData: (data) => {
    return new Promise(function(resolve, reject) {
      axios.get('http://api.openweathermap.org/data/2.5/weather', {
        // params: { ...data, appid: '8c28e0261274205080574bba392cef8b' }
        params: { q: 'London, UK', appid: '6bd19b6b380b7569b4e3ab11b02d54bb' }
      }).then(response => {
        console.log('[fetchLatLng response]', response);

      }).catch(error => {
        console.log('[fetchLatLng error]', error);

      })
    });;
  }
}

module.exports = weather;
