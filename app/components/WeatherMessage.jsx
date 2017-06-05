var React = require('react');

var WeatherMessage = ({temp, location}) => {

    return(
        <p> The temp in {location} is {temp} </p>
    );
};

module.exports = WeatherMessage;
