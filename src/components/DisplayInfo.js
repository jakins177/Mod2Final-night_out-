import React, { Component } from 'react'
import { UserConsumer } from './userContext'
import Roll from 'react-reveal/Roll';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';

export default class DisplayInfo extends Component {
    render() {
        return (
            <div className="App">
            <UserConsumer>
            {
                (nightOutInfo) => {

                     let dinner = "";
                     let recipeLabel = "";
                     let recipeImage = "";
                 
                    if(nightOutInfo.dinner.hits)
                    {
                         dinner = nightOutInfo.dinner.hits[0];
                    }

                   let beer = nightOutInfo.beer;

                   let movie = nightOutInfo.movie;


                    if(dinner.recipe)
                    {
                        recipeLabel = dinner.recipe.label;
                        recipeImage = dinner.recipe.image;
                    }


                    console.log(dinner);

                    return <div>
                        
                       <Roll left> <h2>Dinner</h2> </Roll>
                        <h3>{recipeLabel}</h3> 
                        <Fade><img src ={recipeImage}/></Fade>
                        <Roll right> <h2>Beer</h2> </Roll>
                        <h3>{beer.name}</h3> 
                        <Fade><img src ={beer.image_url} height="400px" width ="200px" /></Fade> 
                        <Roll left><h2>Movie</h2></Roll>
                        <h3>{movie.Title}</h3>
                        <Fade><img src ={movie.Poster}/></Fade> 
                    
                    </div>
                }
            }
         
            </UserConsumer>
                
            </div>
        )
    }
}
