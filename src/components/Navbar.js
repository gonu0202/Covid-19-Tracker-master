import React, {Component } from 'react';
import {Link} from 'react-router-dom';
import { ButtonContainer } from "./Button";
class Navbar extends Component{
	
  render(){
	  return (
	     <nav className="navbar navbar-expand-sm bg-dark navbar-dark px-sm-5">
		     <h3 style={{textAlign:"center", color:"#fff"}}>COVID-19 STATUS</h3>
		     <Link to="/Home" className="ml-auto">
		     	<ButtonContainer >
		     		<span className="mar-2">
		     			<i className="fas fa-skull"></i>
		     		</span>
		     		 	COVID-19 in INDIA Status
		     	</ButtonContainer>
		     </Link>
		     <Link to="/Details" className="ml-auto">
		     	<ButtonContainer >
		     		<span className="mar-2">
		     			<i className="fas fa-skull"></i>
		     		</span>
		     		 	COVID-19 in World Status
		     	</ButtonContainer>
		     </Link>
	     </nav>
	  );
	}
}

export default Navbar;