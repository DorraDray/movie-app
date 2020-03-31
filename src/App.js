import React, { Component } from 'react';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import Header from './Header';
import './App.css';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Descritpion from './Description';
class  App extends Component {
  
  render() { 
    return ( <Router>
      <Route path="/" render={()=><Header/>}/>
      <Route path ="/" component ={AddMovie}/>
      <Route  exact path ='/' component ={MovieList}/>
      <Route path ="/Description/:id" component ={Descritpion}/>
      


    </Router>
      
      
       );
  }
}
 export default (App);

