var React = require('react');

var WeatherMessage = ({temp, location}) => {

    return(
        <p className="text-center"> The temp in {location} is {temp} </p>
    );
};

module.exports = WeatherMessage;
