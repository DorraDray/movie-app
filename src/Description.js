import React, { Component } from 'react';
import {connect} from 'react-redux'
import MovieList from './MovieList';

class Description extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
    return ( <div>
      
        {this.props.movieList.filter(el=>el.id===Number(this.props.match.params.id)).map(el=><p>{el.description}</p>)}
    </div> );
}}
 
const mapStateToProps=(state)=> {
    return {
        movieList : state.movieList
    }
}


export default connect(mapStateToProps,null)(Description);