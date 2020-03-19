import React, { Component } from 'react';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import './App.css';

class  App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      input : "" , 
      rating :"", 
      img:"" , 
      name:"" , 
      searchStar : 5 ,
      movieList:[{image:"https://img.20mn.fr/eZjihkQ5Ttmvg8iblkWeuA/830x532_betty-gilpin-film-the-hunt.jpg",name:"The Hunt",rating:"3"},
      {image:"https://cdn-s-www.estrepublicain.fr/images/ec8d4371-4cf7-446e-b80b-c6ecc9342c53/BES_06/illustration-jumanji-next-level_1-1577698367.jpg",name:"Jumanji",rating:"4"},
      {image:"https://miro.medium.com/max/3554/1*UvA_rRD1yGnuOn7WOZpo3w.jpeg",name:"Joker",rating:"5"},
      ],
      display:false

     }
  }
      addMovie=(newMovie)=>  { 
        this.setState( { movieList: [...this.state.movieList, newMovie],display:!this.state.display})


      }



  render() { 
    return ( <div className="BigMovie">
       <div div className="SerchStar">
        <input type="text" placeholder="Search" onChange={(e)=>this.setState({input:e.target.value})}/>
         <span onClick={()=>this.setState({searchStar:1})}>⭐</span>
         <span onClick={()=>this.setState({searchStar:2})}>⭐</span>
         <span onClick={()=>this.setState({searchStar:3})}>⭐</span>
         <span onClick={()=>this.setState({searchStar:4})}>⭐</span>
         <span onClick={()=>this.setState({searchStar:5})}>⭐</span>
         {console.log(this.state.searchStar)}
         </div>
      <h3 onClick={()=>this.setState({display:!this.state.display})}> + </h3>
      <MovieList searchInput={this.state.input} searchStar={this.state.searchStar} MovieList={this.state.movieList} />
     <AddMovie newMovie= { this.addMovie} display= { this.state.display}/>
      </div>
       );
  }
}
 




export default App;

