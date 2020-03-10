import React, { Component } from 'react'
import DisplayInfo from './DisplayInfo'

function loadAgain(){
    // window.location.reload(false);
    window.location.href = '/';
 }

export default class NightOut extends Component {
    render() {
        return (
            <div>
            <div>
                <DisplayInfo />
            </div>
            <div>    
            <button onClick={loadAgain}>New Suggestion</button>
                
            </div>
            </div>

        )
    }
}
