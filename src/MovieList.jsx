import React, { Component } from 'react';
// import MovieList from './MovieList'
import HOC from './HOC';
import {connect} from 'react-redux';
import { Link} from "react-router-dom";


class MovieList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
    
    
        console.log(this.props.input)
        return ( <div className="Movie" >
                    {this.props.movieList.filter(el=>(el.name.toLowerCase().includes(this.props.input.toLowerCase().trim()))
                    &&(el.rating<=this.props.searchStar)).map(el=> <div  className="Card">
                        <h1> {el.name}</h1>
                        <span>{"".padStart(el.rating,"⭐")}</span>
                        <img className="img" src= {el.image}/>
                        <Link to = {`/Description/${el.id}`}>
                            See Description
                        </Link>
                        <div>
                            <button type='button' onClick={()=>this.props.edit(el.id)}>Edit</button> 
                            <button type='button' onClick={()=>this.props.remove(el.id)}>Remove</button>
                        </div>

                    </div>)
                    
                    
                    }


        </div>



         );
    }
}


const mapStateToPropos=(state)=> {
    return {
        input :state.input , 
        rating :state.rating, 
        img:state.img , 
        name:state.name , 
        searchStar : state.searchStar ,
        movieList:state.movieList,
        display:state.display,
        Change : state.Change,
        description:state.description,
        
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
        remove:(id)=> dispatch({type:'REMOVE',key:id}),
        edit :(id)=> dispatch({
            type: "EDIT", 
            payload : {
                name:prompt("name")  , 
                rating :prompt("rating"), 
                img :prompt("img") ,
                description :prompt("description") ,
                id : id
            }
        })
    
      }
    }
    
    
    
    export default connect(mapStateToPropos,mapDispatchToProps)(HOC(MovieList));
 
