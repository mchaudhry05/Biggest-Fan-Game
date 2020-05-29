import React, {Component}from 'react';
import Header from './header';
import Menu from './menu'; 
import LeaderBoard from './leaderBoard';
import * as firebase from 'firebase'
import fire from '../firebase';
import '../App.css';




class App extends Component{
state ={
  userName: "Drake", 
  score: 6,
  users: [], 
  cleaned: []
}



componentDidMount(){
  var stuff = []

  let rootRef = firebase.database().ref().child('users');
  
  
  rootRef.on('child_added', snapshot =>{
    
    let user = { text: snapshot.val(), id: snapshot.key};
     stuff.push (user)
    this.setState({ users: [user],
    cleaned: stuff });


  })
  
  //const userRef = rootRef.child();
  


}


addScore(e){
  e.preventDefault(); // <- prevent form submit from reloading the page
  console.log(this.inputEl.value)
  const name = this.inputEl.value
  firebase.database().ref().child('users').push([name, 20]);
  this.inputEl.value = ''; // <- clear the input
}

  /* <form onSubmit={this.addScore.bind(this)}>
              <input className ="form"type="text" ref={ el => this.inputEl = el } required/>
              <input className = "formButton"type="submit"/>
          </form>
          {
            this.state.cleaned.map( user =>
              <div className="container">
              <div className="eachUser">
               <h1 className= "container">{user.text[0]} : {user.text[1]} </h1> 
              </div>
              </div>)
          }
        */


  render(){
    return(


        <div className="App">
                 
                 
          <Header text="The Biggest Fan Game"  artistName="Drake Edition"/>
       
          
        
        
        {<Menu/>}   

        
    </div>

    );
  }
  
}

export default App;
