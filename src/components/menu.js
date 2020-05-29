import React, {Component} from 'react'; 
import Level2 from './level2'
import NextLevel from './nextLevel';
import Cover from './cover'; 
import Choices from './choices';
import data from '../questions.json';


class Menu extends Component{
    state={
        question: data.Questions,
        current: 0,
        hide: false,
        startLevelOne: false,
        startLevelTwo: false,
        startLevelThree: false,
        levelOneComplete: false,
        levelTwoComplete: false, 
        levelThreeComplete: false, 
        score:0,
        level: 0, 
        showNext: false
    }

    startLevel = (id)=>{
        if(id === "1"){
            this.setState({startLevelOne: true});
        }
        if(id === "2" && this.state.levelOneComplete){
            this.setState({startLevelOne: true});
        }
        if(id === "3" && this.state.levelTwoComplete){
            this.setState({startLevelOne: true});
        }
    }


    onClick = (id, name) =>{
        console.log(id);
        console.log(name);
        if(name == this.state.question[this.state.current].answer){
          this.setState({
            score: this.state.score + 25,
            questions: this.state.question[this.state.current].correct = "true"
          });
  
         
        }
        this.setState({
          current: this.state.current + 1,
        });
  
        if(this.state.question.length-1 == this.state.current){
          this.setState({
            levelOneComplete:  true,
            startLevelOne: false,
            hide: true,
            showNext: true
          });
        }
      }

      levelControl = () =>{
        this.setState({
          hide: true, 
          startLevelOne: false, 
          startLevelTwo:true, 
          showNext: false
        });

      }




    render(){
        
        return(
            <div className="container">
              
            { !this.state.startLevelOne && !this.state.hide &&
               <div className="buttonGroup">
                    <button className ="levelButtons1" id="1" onClick ={e => this.startLevel(e.target.id)}>LEVEL ONE</button>
                    <button className ="levelButtons2" id="2" onClick ={e => this.startLevel(e.target.id)}>LEVEL TWO</button>
                    <button className ="levelButtons3" id="3" onClick ={e => this.startLevel(e.target.id)}>LEVEL THREE</button>
               </div>
            }
            <div>
            {this.state.startLevelOne && <Cover image={this.state.question[this.state.current].coverImage}/>}
            {this.state.startLevelOne && <Choices score ={this.state.score} whichButton={this.onClick} option ={this.state.question[this.state.current].options} />}
            </div>
            {this.state.showNext && <NextLevel changeLevel={this.levelControl} level="1" score={this.state.score}/>}
            {this.state.startLevelTwo && <Level2 score ={this.state.score}/>}
            </div>
            
        );
    }
}

export default Menu;