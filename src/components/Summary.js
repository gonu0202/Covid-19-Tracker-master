import React, {Component } from 'react';

class Summary extends Component{
	
	render(){
		const {summary, currentDate} = this.props;
		return (
			<div>
				<h3 style={{color:"#00cc00", textAlign:"center"}}>World Status</h3>
				<h1 style={{textAlign:"center"}}>Last updated on : <strong >{new Date(currentDate).toDateString()}</strong></h1>
		  		<div className="row1">
		  			<div className="NewConfirmed">
		  				<h3>New Confirmed</h3>
		  				<h1>{summary.NewConfirmed}</h1>
		  			</div>

		  			<div className="TotalConfirmed">
		  				<h3>TotalConfirmed</h3>
		  				<h1>{summary.TotalConfirmed}</h1>
		  			</div>

		  			<div className="NewDeaths">
		  				<h3>NewDeaths</h3>
		  				<h1>{summary.NewDeaths}</h1>
		  			</div>

		  			<div className="TotalDeaths">
		  				<h3>TotalDeaths</h3>
		  				<h1>{summary.TotalDeaths}</h1>
		  			</div>

		  			<div className="TotalRecovered">
		  				<h3>TotalRecovered</h3>
		  				<h1>{summary.TotalRecovered}</h1>
		  			</div>
		    	</div>
	    	</div>
		);
	}
}

export default Summary;