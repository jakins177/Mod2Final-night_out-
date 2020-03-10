import React, { Component } from 'react'
import { UserConsumer } from './userContext'

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
                        
                        <h2>Dinner</h2>
                        <h3>{recipeLabel}</h3> 
                        <img src ={recipeImage}/>
                        <h2>Beer</h2>
                        <h3>{beer.name}</h3> 
                        <img src ={beer.image_url} height="400px" width ="200px" /> 
                        <h2>Movie</h2>
                        <h3>{movie.Title}</h3>
                        <img src ={movie.Poster}/> 
                    
                    </div>
                }
            }
         
            </UserConsumer>
                
            </div>
        )
    }
}
