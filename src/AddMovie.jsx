import React, { Component } from 'react';
class AddMovie extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            rating:'',
            image:'',
            name:''
         }
    }
    render() { 
        let movie= { 
            rating:this.state.rating,
            image:this.state.image,
            name:this.state.name

        }
        return ( 
            <div className= { this.props.display? "display":"hide"}>
                <div>
                <input type="text" placeholder="name" onChange= { (e)=>this.setState( { name:e.target.value})}/>
                <input type="text" placeholder="image" onChange= { (e)=>this.setState( { image:e.target.value})}/>
                <input type="text" placeholder="rating" onChange= { (e)=>this.setState( { rating:e.target.value})}/>
                </div>
                <button onClick={()=>this.props.newMovie(movie)}>Add</button>
            </div>

         );
    }
}
 
export default AddMovie ;