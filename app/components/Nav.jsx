var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () => {
  return(
    <div>
      <h2> nav </h2>
      <IndexLink to ="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}> Get Weather </IndexLink>
      <br/>
      <Link to ="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}> About </Link>
      <br/>
      <Link to ="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}> Examples </Link>
    </div>
  );
};

module.exports = Nav;
