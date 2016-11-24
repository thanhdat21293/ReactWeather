var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
	render: function(){

	}
});
var Nav = React.createClass({
	onSearch: function(e){
		e.preventDefault();
		alert('Da click!');
	},
	render: function(){
		return (
			<div className="top-bar">
				<div className="top-bar-left">
					<ul className="menu">
						<li className="menu-text">
							React Weather App
						</li>
						<li>
							<IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
						</li>
						<li>
							<IndexLink activeClassName="active" activeStyle={{fontWeight: 'bold'}} to="/about">About</IndexLink>
						</li>
						<li>
							<IndexLink activeClassName="active" activeStyle={{fontWeight: 'bold'}} to="/examples">Examples</IndexLink>
						</li>
					</ul>
				</div>
				<div className="top-bar-right">
					<form onSubmit={this.onSearch} >
						<ul className="menu">
							<li>
								<input type="search" placeholder="Search weather" />
							</li>
							<li>
								<input type="submit" className="button" value="Get Weather"/>
							</li>
						</ul>
					</form>
				</div>
			</div>
		);
	}
});

module.exports = Nav;

var old = (
	<div>
		<h2>Nav Component</h2>
		<IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
		<IndexLink activeClassName="active" activeStyle={{fontWeight: 'bold'}} to="/about">About</IndexLink>
		<IndexLink activeClassName="active" activeStyle={{fontWeight: 'bold'}} to="/examples">Examples</IndexLink>
	</div>
);
