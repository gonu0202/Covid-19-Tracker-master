import React, {Component } from 'react';
import axios from 'axios';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

import Summary2 from './Summary2';
import Navbar from './Navbar';
import States from './States';
import Footer from './Footer';
import whatsapp from './whatsapp.svg';

class Home extends Component{

	state = {
		cases_time_series: [],
		states:[],
		currentDate : null,
		loading : true
	}
	async componentDidMount() {
		const res1 = await axios.get("https://api.covid19india.org/data.json");
		console.log(res1);
		this.setState({cases_time_series : res1.data.cases_time_series});
		this.setState({states : res1.data.statewise});
		this.setState({currentDate : res1.data.statewise[0].lastupdatedtime});
		this.setState({loading : false});
	}

  render(){
  	if(this.state.loading){
  		return(
  			<div style={{textAlign:"center"}}>
	  			<h1 >Loading...</h1>
	  			<h5>If it takes too long for loading, kindly check your internet connection.</h5>
  			</div>
  		)
  	}
	return (
	  	<div>
	  		<Navbar/>
	  		<Summary2 summary = {this.state.states[0]} currentDate = {this.state.currentDate}/>	
	    	<table>
	    		<thead>
	    			<tr>
			    		<th> State(/UT) </th>
			    		<th> Active</th>
			    		<th> Total Confirmed</th>
			    		<th> Total Deaths</th>
			    		<th> Total Recovered</th>
			    	</tr>
				</thead>
				<tbody>
					{this.state.states.map( state => (
						<States states = {state} key = {state.state}/>
					))}
				</tbody>
    		</table>
    		<Footer/>
    		<BrowserView>
	    		<div className="fixed-bottom" style={{textAlign:"right"}}>
	    			<a href="https://web.whatsapp.com/send?phone=918290277481"> <img src={whatsapp} alt="Whatsapp"/>
					</a>
	    		</div>
	    	</BrowserView>
	    	<MobileView>
	    		<div className="fixed-bottom" style={{textAlign:"right"}}>
	    			<a href="https://wa.me/918290277481?text=Hi There"> <img src={whatsapp} alt="Whatsapp"/>
					</a>
	    		</div>
	    	</MobileView>

	    </div>
	);
}
}

export default Home;