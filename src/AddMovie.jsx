import React, { Component } from 'react';
import {connect} from 'react-redux';
class AddMovie extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
         }
    }
    render() { 
        let movie= { 
            rating:this.props.newRating,
            image:this.props.newImage,
            name:this.props.newName,
            id: Math.random() ,
            description:this.props.newDescription

        }
        return ( 
            <div className= { this.props.display? "display":"hide"}>
                <div>
                <input type="text" placeholder="name" onChange= {(event) => this.props.changeName(event.target.value)}/>
                <input type="text" placeholder="image" onChange= {(event) => this.props.changeImage(event.target.value)}/>
                <input type="text" placeholder="rating" onChange= {(event) => this.props.changeRating(event.target.value)}/>
                <input type="text" placeholder="description" onChange= {(event) => this.props.changeDescription(event.target.value)}/>
                </div>
                <button onClick={()=>this.props.newMovie(movie)}>Add</button>
            </div>

         );
    }
}
 
const mapStateToPropos=(state)=> {
    return {
        display:state.display,
        newName:state.newName,
        newImage:state.newImage,
        newRating:state.newRating,
        newDescription:state.newDescription,
        
    }
     }
    
    
    const mapDispatchToProps = (dispatch) => {
      return {
       
        changeName : (e)=> dispatch({type : 'CHANGE_NAME', e:e}),
        changeImage : (e)=> dispatch({type : 'CHANGE_IMAGE', e:e}),
        changeRating : (e)=> dispatch({type : 'CHANGE_RATING', e:e}),
        changeDescription : (e)=> dispatch({type : 'CHANGE_DESCRIPTION', e:e}),
        newMovie : (e)=> dispatch({type : 'ADD_MOVIE', e:e}),
      }
    }
    

    
    
    export default connect(mapStateToPropos,mapDispatchToProps)(AddMovie);
 


