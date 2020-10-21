import React, {Component } from 'react';
class Countries extends Component{

  render(){
  	const {countries} = this.props;
  return (
  		<tr>
  			<td className="Country">{countries.Country}</td>
  			<td className="NewConfirmed">{countries.NewConfirmed}</td>
  			<td className="TotalConfirmed">{countries.TotalConfirmed}</td>
  			<td className="TotalDeaths">{countries.TotalDeaths}</td>
  			<td className="TotalRecovered">{countries.TotalRecovered}</td>
  		</tr>
  );
}
}

export default Countries;