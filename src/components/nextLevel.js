import React, {Component} from 'react'; 

class NextLevel extends Component{
    render(){

        return(
            <div className="container">
                <div>
                <h1 className="nextLevelTitle">You just Finished Level {this.props.level}!</h1>
                <h2 className="nextLevelTitle">You score is {this.props.score}.</h2>
                <button id="2" className="nextLevelButton" onClick={this.props.changeLevel}>NEXT LEVEL</button>
                </div>
            </div>
            
        );
    }
}

export default NextLevel;