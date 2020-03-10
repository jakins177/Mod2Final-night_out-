import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import NightOut from './components/NightOut';
import Chat from './components/Chat'
import { Provider } from 'react-redux'
import store from './redux/store'

import {UserProvider} from './components/userContext';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';


const EDAMAM_KEY = "689a69b0661b1b6f7707487ab5ec41e2"
const EDAMAM_APP_ID =  "55bf90f7"



export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: {},
      beerData: {},
      dinnerData: {},
      movieData: {}
    };
   
  }

  componentDidMount() {
    this.fetchMoviesAPI();
    this.fetchBeersAPI();
    this.fetchDinnerRecipes();

  }


  fetchBeersAPI(){
    fetch('https://api.punkapi.com/v2/beers')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
         console.log(data);

         let beerArray = data;

         let randomRange = Math.floor(Math.random() * beerArray.length);

        let beer = beerArray[randomRange];
        

         this.setState({
          beerData: beer
        })
        
      })
  }

  fetchMoviesAPI(){

    let popularMovies = [];

    popularMovies.push("The Invisible Man");
    popularMovies.push("Knives Out");
    popularMovies.push("Parasite");
    popularMovies.push("Spenser Confidential");
    popularMovies.push("Candyman");
    popularMovies.push("Onward");
    popularMovies.push("Sonic the Hedgehog");
    popularMovies.push("Guns Akimbo");
    popularMovies.push("Birds of Prey: And the Fantabulous Emancipation of One");
    popularMovies.push("Jojo Rabbit");

    let randomRange = Math.floor(Math.random() * popularMovies.length);

    let movie = popularMovies[randomRange];

    fetch(`http://www.omdbapi.com/?apikey=53aa2cd6&t=${movie}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
         console.log(data);
         this.setState({
          movieData: data
        })
        
      })

  }

  fetchDinnerRecipes(){
    let popularDinners = [];
    //pizza, steak, pasta, chicken, tacos
    //Pizza Frizza
    //Pizza Margherita (Tomato, Basil, And Mozzarella Pizza)
    //Chicken Paprikash
    //Chicken cacciatore
    //Perfect Grilled Steak
    //Vietnamese Sugar Steak
    //Pasta with Pancetta and Miso
    //Fish Tacos
    //Beef Tacos

    popularDinners.push("Pizza Frizza");
    popularDinners.push("Pizza Margherita (Tomato, Basil, And Mozzarella Pizza)");
    popularDinners.push("Chicken Paprikash");
    popularDinners.push("Chicken cacciatore");
    popularDinners.push("Perfect Grilled Steak");
    popularDinners.push("Vietnamese Sugar Steak");
    popularDinners.push("Pasta with Pancetta and Miso");
    popularDinners.push("Pasta Alla Genovese");
    popularDinners.push("Fish Tacos");
    popularDinners.push("Beef Tacos");

    let randomRange = Math.floor(Math.random() * popularDinners.length);

    let meal = popularDinners[randomRange];
    
  
    fetch(`https://api.edamam.com/search?q=${meal}&app_id=${EDAMAM_APP_ID}&app_key=${EDAMAM_KEY}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({
          dinnerData: data
        })
      
      })

  }


  render() {

    console.log(this.state.beerData);
    console.log("***");
    console.log(this.state.dinnerData);
    console.log("***");
    console.log(this.state.movieData);

   let dataObject = {
     "beer": this.state.beerData,
     "dinner": this.state.dinnerData,
     "movie": this.state.movieData

    }
    return (
  


      <div className = "App">
        <UserProvider value = {dataObject}>
          <Router>

            <nav>
            
              <Link to="/">Home</Link> | 
              <Link to="/nightout">Night Out</Link> | 
              <Link to="/about">About</Link> |
              <Link to="/chat">Chat</Link>  | 

     
            </nav>
 
          <Switch>  
          <Route exact path="/">
             <Home />
            </Route>
            <Route path="/nightout">
              <NightOut />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/chat">
              
            <Provider store={store}>
            {/* <div > */}
            <Chat />
             {/* </div> */}
           </Provider>
           </Route>
            
          </Switch>

        </Router>
        </UserProvider>
      </div>
    )
  }
}


function Home() {
  return (<div>
   <h2>Night Out</h2>
   <h3>Click the dashboard to view your stats.</h3>
    </div>);
}

function About() {
  return (<div>
    <h2>About</h2>
    <h3>Ever wonder where to eat and what movie to watch? Look no further than Night Out app.</h3>
     </div>);
}




