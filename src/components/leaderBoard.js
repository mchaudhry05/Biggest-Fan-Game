import React, {Component} from 'react'; 
import * as firebase from 'firebase'

class LeaderBoard extends Component{

    state ={
        userName: "Drake", 
        score: this.props.score,
        users: [], 
        cleaned: [],
        hide: false
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
        firebase.database().ref().child('users').push([name, this.state.score]);
        this.inputEl.value = ''; // <- clear the input
        this.setState({
            hide: true,
            score: 0

        })
      }
      
      
      


    render(){
        return(
            <div>
                <h1 className="question">Leader Board</h1>
                { !this.state.hide &&
                <form onSubmit={this.addScore.bind(this)}>
              <input className ="form"type="text" ref={ el => this.inputEl = el } required/>
              <input className = "formButton"type="submit"/>
          </form>
    }
          {
            this.state.cleaned.map( user =>
              <div className="container">
              <div className="eachUser">
               <h1 className= "container">{user.text[0]} : {user.text[1]} </h1> 
              </div>
              </div>)
          }
        
            </div>
            
        );
    }
}

export default LeaderBoard;