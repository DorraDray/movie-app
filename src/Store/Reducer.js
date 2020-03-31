const initialState = {

    input : "" , 
    rating :"", 
    img:"" , 
    name:"" , 
    searchStar : 5 ,
    description:"",
    movieList:[{id:1,image:"https://img.20mn.fr/eZjihkQ5Ttmvg8iblkWeuA/830x532_betty-gilpin-film-the-hunt.jpg",name:"The Hunt",rating:"3",description:"dfgfhghgdhndg"},
    {id:2,image:"https://cdn-s-www.estrepublicain.fr/images/ec8d4371-4cf7-446e-b80b-c6ecc9342c53/BES_06/illustration-jumanji-next-level_1-1577698367.jpg",name:"Jumanji",rating:"4",description:"dfgfhghgdhndg"},
    {id:3,image:"https://miro.medium.com/max/3554/1*UvA_rRD1yGnuOn7WOZpo3w.jpeg",name:"Joker",rating:"5",description:"dfgfhghgdhndg"},
    ],
    display:false,
    newName:"",
    newImage:"",
    newRating:"",
    newDescription:""
}
const Reducer = (state = initialState, action)=>{

    const newState = {...state};


    if (action.type==='ADD_MOVIE'){
        return {
            ...state,
            movieList: [...newState.movieList, action.e],
            display:!newState.display
             }
            }

            
    if(action.type === 'CHANGE'){
        return {
            ...state,
        input: action.e
        }
    }
    if(action.type === 'CHANGE_STAR1'){
        return {
            ...state,
            searchStar: 1
        }
    }
    if(action.type === 'CHANGE_STAR2'){
        return {
            ...state,
            searchStar: 2
        }
    }

    if(action.type === 'CHANGE_STAR3'){
        return {
            ...state,
            searchStar: 3
        }
    }

    if(action.type === 'CHANGE_STAR4'){
        return {
            ...state,
            searchStar: 4
        }
    }
    if(action.type === 'CHANGE_STAR5'){
        return {
            ...state,
            searchStar: 5
        }
    }

    if(action.type === 'CHANGE_DISPLAY'){
        return {
            ...state,
            display: !newState.display
        }
    }

    if(action.type === 'REMOVE'){
        return {
            ...state,
            movieList:state.movieList.filter(el=>el.id!==action.key)

        }
    }
    if(action.type === 'CHANGE_NAME'){
        return {
            ...state,
        newName: action.e
        }
    }
    if(action.type === 'CHANGE_IMAGE'){
        return {
            ...state,
        newImage: action.e
        }
    }
    if(action.type === 'CHANGE_RATING'){
        return {
            ...state,
        newRating: action.e
        }
    }

    if(action.type === 'CHANGE_DESCRIPTION'){
        return {
            ...state,
        newDescription: action.e
        }
    
    }
    if(action.type ==="EDIT") {
        return {
            ...state,
            movieList:state.movieList.map(el=>el.id===action.payload.id ? {...action.payload}:el)
         }
    }
    return newState;

}

export default Reducer;