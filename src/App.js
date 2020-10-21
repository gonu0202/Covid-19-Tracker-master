import React , { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import Details from './components/Details';
import Home from './components/Home';
import Default from './components/Default';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component{
  render(){
  return (
  	<Router>
  		<Switch>
  			<Route exact path="/" component={Home}/>
  			<Route exact path="/home" component={Home}/>
  			<Route path="/details" component={Details} />
   			<Route component={Default} />
      	</Switch>
    </Router>
  );
 }
}
export default App;
