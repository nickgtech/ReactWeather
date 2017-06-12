var React = require('react');
var {Link} =require('react-router');

var Examples = (props) => {
  return(
    <div>
    <h1 className="text-center"> Examples </h1>
    <p className="text-center">Here are a few example locations for you to try</p>
    <ol>
      <li>
        <Link to='/?location=Philadelphia'> Philadelphia, PA </Link>
      </li>
      <li>
        <Link to='/?location=Rio'> Rio Brazile</Link>
      </li>
    </ol>
    </div>
  );
};

module.exports = Examples;
