var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return(
    <div>
      <h1>It's it {temp}°C in {location}.</h1>
    </div>
  );
};

module.exports = WeatherMessage;
