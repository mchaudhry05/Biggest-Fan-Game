import React, {Component} from 'react'; 
import data from '../level3questions.json';
import NextLevel from './nextLevel';
import LeaderBoard from './leaderBoard';

class Level3 extends Component{
    state ={
        levelthree : data.LevelThree,
        current: 0, 
        score: this.props.score,
        level3Complete: false, 
        showNext: false,
        currentSong: "",
        hide: false,
        play: false, 
        pause: true, 
    }


    onClick = (id, name) =>{
        console.log(id);
        console.log(name);
        
        if(name === this.state.levelthree[this.state.current].answer){
          this.setState({
            score: this.state.score + 25,
            LevelThree: this.state.levelthree[this.state.current].correct = true
          });
        }
        
        this.setState({
          current: this.state.current + 1,
        });

  
        if(this.state.levelthree.length-1 === this.state.current){
          this.setState({
            level3Complete:  true,
          });
        }
      }
    
      levelControl = () =>{
        this.setState({
           hide: true, 
          //startLevelOne: false, 
          //startLevelTwo:true, 
          showNext: true
        });

      }
      



    render(){
      console.log(this.state.levelthree.length)
      console.log(this.state.current)

        return(

            <div className="container">
              {!this.state.level3Complete &&
              <div className="buttons2">
              <h1 className="question">guess this drake song</h1>
                        <audio ref="audio_tag" src={this.state.levelthree[this.state.current].song} autoPlay/>
                        <button id="1" onClick ={e => this.onClick(e.target.id,this.state.levelthree[this.state.current].options[0])} className="button3">{this.state.levelthree[this.state.current].options[0]}</button>
                        <button id="2" onClick ={e => this.onClick(e.target.id,this.state.levelthree[this.state.current].options[1])} className="button3">{this.state.levelthree[this.state.current].options[1]}</button>
                        <button id="3" onClick ={e => this.onClick(e.target.id,this.state.levelthree[this.state.current].options[2])} className="button3">{this.state.levelthree[this.state.current].options[2]}</button>
                        <button id="4" onClick ={e => this.onClick(e.target.id,this.state.levelthree[this.state.current].options[3])} className="button3">{this.state.levelthree[this.state.current].options[3]}</button>
                     </div>
              }

              {this.state.level3Complete && !this.state.hide && <NextLevel changeLevel={this.levelControl} score={this.state.score} level="3"/>}
              {this.state.showNext && <LeaderBoard score={this.state.score}/>}
            </div>
            
        );
    }
}

export default Level3;