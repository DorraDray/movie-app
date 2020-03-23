import React, { Component } from 'react';
// import MovieList from './MovieList'
import HOC from './HOC';




class MovieList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
    
    

        return ( <div className="Movie" >
                    {this.props.MovieList.filter(el=>(el.name.toLowerCase().includes(this.props.searchInput.toLowerCase().trim()))
                    &&(el.rating<=this.props.searchStar)).map(el=> <div  className="Card">
                        <h1> {el.name}</h1>
                        <span>{"".padStart(el.rating,"⭐")}</span>
                        <img className="img" src= {el.image}/>

                    </div>)
                    
                    
                    }


        </div>



         );
    }
}
 
export default HOC(MovieList) ;