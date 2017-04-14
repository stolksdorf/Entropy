
const React = require('react');
const Comp  = require('create-react-class');
const _     = require('lodash');
const cx    = require('classnames');

const Temp = Comp({
	getDefaultProps: function() {
		return {

		};
	},
	getInitialState: function() {
		return {
			count: 0
		};
	},
	componentDidMount: function() {
		setInterval(()=>{
			this.setState({
				count : this.state.count + 1
			})
			console.log('running');
		}, 1000)

	},
	render: function(){
		return <div className='temp'>
			Temp Component Ready. is cool
			{this.state.count}
		</div>
	}
});

module.exports = Temp;
