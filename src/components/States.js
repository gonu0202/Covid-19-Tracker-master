import React, {Component } from 'react';
class States extends Component{

  render(){
  	const {states} = this.props;
  return (
  		<tr>
  			<td className="Country">{states.state}</td>
  			<td className="NewConfirmed">{states.active}</td>
  			<td className="TotalConfirmed">{states.confirmed}</td>
  			<td className="TotalDeaths">{states.deaths}</td>
  			<td className="TotalRecovered">{states.recovered}</td>
  		</tr>
  );
}
}

export default States;