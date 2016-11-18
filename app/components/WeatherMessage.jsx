var React = require('react');

var WeatherMessage = React.createClass({
	render: function(){
		return (
			<h3>It's it 40 in Piladelphia.</h3>
		)
	}
});
var WeatherMessage = (props) => {
	return (
		<h3>It's it 40 in Piladelphia.</h3>
	)
};
module.exports = WeatherMessage;
