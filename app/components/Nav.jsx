var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
	render: function(){

	}
});
var Nav = () => {
	return (
		<div>
			<h2>Nav Component</h2>
			<IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
			<IndexLink activeClassName="active" activeStyle={{fontWeight: 'bold'}} to="/about">About</IndexLink>
			<IndexLink activeClassName="active" activeStyle={{fontWeight: 'bold'}} to="/examples">Examples</IndexLink>
		</div>
	);
}
module.exports = Nav;
