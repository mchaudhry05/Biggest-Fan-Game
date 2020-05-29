import React, {Component} from 'react'; 
import dataset from '../level2questions.json';
import Level3 from './level3'
import NextLevel from './nextLevel';
class Level2 extends Component{
    
    state = {
        leveltwo: dataset.LevelTwo,
        currenttwo: 0, 
        score: this.props.score, 
        lyric: "",
        options: [], 
        answer: "", 
        level2complete: false, 
        showNext: false
    }

    loadData = () => {
        this.setState(() => {
          return {
            lyric: this.state.leveltwo[this.state.currenttwo].lyric,
            answer: this.state.leveltwo[this.state.currenttwo].answer,
            options: this.state.leveltwo[this.state.currenttwo].options
          };
        });
      };
  
      componentDidMount() {
        this.loadData();
      }
  
      nextQuestionHandler = (id, name) => {
        if(name === this.state.leveltwo[this.state.currenttwo].answer){
          this.setState({
          score: this.state.score + 25,
          });
        }
        
        this.setState({
          currenttwo: this.state. currenttwo + 1,
        });
       if(this.state.leveltwo.length-2 == this.state.currenttwo){
          this.setState({
            level2complete: true,
            showNext: true
          });
        }
      };
  
      componentDidUpdate(prevProps, prevState) {
        if (this.state.currenttwo !== prevState.currenttwo) {
            this.setState(() => {
              return {
                lyric: this.state.leveltwo[this.state.currenttwo].lyric,
                answer: this.state.leveltwo[this.state.currenttwo].answer,
                options: this.state.leveltwo[this.state.currenttwo].options
              };
            });
          }
      }

      levelControl = () =>{
        this.setState({
          startLevelTwo: false, 
          startLevelThree:true, 
          showNext: false
        });

      }

  

    render(){
        return(
            <div>
                {!this.state.level2complete &&
                    <div className="container">
                    <div className="buttons2">
                    <h4 className="question2">{this.state.lyric}</h4>
                        <button id="1" onClick ={e => this.nextQuestionHandler(e.target.id,this.state.leveltwo[this.state.currenttwo].options[0])} className="button2">{this.state.leveltwo[this.state.currenttwo].options[0]}</button>
                        <button id="2" onClick ={e => this.nextQuestionHandler(e.target.id,this.state.leveltwo[this.state.currenttwo].options[1])} className="button2">{this.state.leveltwo[this.state.currenttwo].options[1]}</button>
                        <button id="3" onClick ={e => this.nextQuestionHandler(e.target.id,this.state.leveltwo[this.state.currenttwo].options[2])} className="button2">{this.state.leveltwo[this.state.currenttwo].options[2]}</button>
                        <button id="4" onClick ={e => this.nextQuestionHandler(e.target.id,this.state.leveltwo[this.state.currenttwo].options[3])} className="button2">{this.state.leveltwo[this.state.currenttwo].options[3]}</button>
                     </div>
                    </div>
                }
                {this.state.showNext && <NextLevel changeLevel={this.levelControl} score={this.state.score} level="2"/>}
                {this.state.startLevelThree && <Level3 score = {this.state.score}/>}
            </div>
        );
    }
}

export default Level2;