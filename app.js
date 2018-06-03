const yargs = require('yargs');
const weather = require('./weather');

const argv = yargs.options('a', {
  alias: 'address',
  describe: 'Address of the location',
  demand: 'Address is required',
  type: 'string'
}).options('v', {
  alias: 'version',
  desc: 'Show the version of the app',
  version: () => require('./package.json').version
})
.options('h', {
  alias: 'help',
  desc: 'Show help'
})
.argv;

// Get the address from the argument argv
let address = argv.address;

weather.fetchLatLng(address).then(data => {
  console.log('[weather fetchLatLng data]', data);

  weather.fetchWeatherData(data);
}).catch(error => {
  console.log('[weather fetchLatLng error]', error);

});
