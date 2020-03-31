import React, { Component } from 'react';

import {connect} from 'react-redux';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div className="BigMovie">
    <div className="SerchStar">
    <input type="text" placeholder="Search" onChange={(e)=>this.props.change(e.target.value)}/>
         <span onClick={this.props.changeStar1}>⭐</span>
         <span onClick={this.props.changeStar2}>⭐</span>
         <span onClick={this.props.changeStar3}>⭐</span>
         <span onClick={this.props.changeStar4}>⭐</span>
         <span onClick={this.props.changeStar5}>⭐</span>
         
         </div>
      <h3 onClick={this.props.changeDisplay}> + </h3>
    </div>
    )
}
}

    
    
    const mapDispatchToProps = (dispatch) => {
      return {
        addMovie :(newMovie)=>dispatch({type:"ADD_MOVIE",payload:newMovie }), 
        change : (e)=> dispatch({type : 'CHANGE', e:e}),
        changeStar1 : ()=> dispatch({type : 'CHANGE_STAR1'}),
        changeStar2 : ()=> dispatch({type : 'CHANGE_STAR2'}),
        changeStar3 : ()=> dispatch({type : 'CHANGE_STAR3'}),
        changeStar4 : ()=> dispatch({type : 'CHANGE_STAR4'}),
        changeStar5 : ()=> dispatch({type : 'CHANGE_STAR5'}),
        changeDisplay : ()=> dispatch({type : 'CHANGE_DISPLAY'}),
    
      }
    }
    
    
    export default connect(null,mapDispatchToProps)(Header);
   