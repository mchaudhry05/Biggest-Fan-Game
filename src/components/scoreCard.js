import React, { Component } from 'react';

class scoreCard extends Component{
    state ={
        correctOne : this.props.question[0].correct,
        correctTwo : this.props.question[1].correct, 
        correctThree : this.props.question[2].correct,
        correctFour : this.props.question[3].correct, 
        correctFive : this.props.question[4].correct,
    }

    render(){
    
        return(
            <div>
                <h1>Score: {this.props.score}</h1>
                <div className="container">
                <div className="eachCover">
                    {
                        this.props.question.map((quest)=>(
                            <div className="eachItem">
                                {
                                   (quest.correct === "true") ? <div className="correct"></div> : <div className="wrong"></div> 
                                }
                                <img width="100" height ="100" src={quest.coverImage} alt=""/>
                                <h4 className="song-title">{quest.answer}</h4>
                            </div>

                        ))
                    }
                    <button onClick ={e=> this.props.nextLevel(e.target)}className="button">Next Level</button>
                
                </div>

            </div>
        
            </div>
        
        );
    }

}



export default scoreCard;