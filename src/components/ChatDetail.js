import React, { Component } from 'react'

export default class ChatDetail extends Component {

 
    constructor() {
        super();
        
    
        }

        printMessage()
        {
           // alert("triggered");
            let chatArea = document.getElementById("chatarea");
            console.log(chatArea);

            let chatBox = document.getElementById("chatbox");

           
                chatBox.innerHTML += chatArea.value + "<br><br>";
            
            chatArea.value = ""

        }

    render() {
        return (
            <div>
                <h2> Chatting </h2>

                <label for="chatarea">Type you message:</label>
                <br/>
                <textarea id="chatarea" rows="4" cols="50">

                </textarea>
                <br/>
                <button onClick={this.printMessage}>Send</button>
                <br/>
                <h1 id = "chatbox"></h1>
                
            </div>
        )
    }
}
