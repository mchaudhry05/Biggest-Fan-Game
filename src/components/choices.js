import React, { Component} from 'react'; 

class Choices extends Component {
  
    render(){
      
        return(
            <div className="container">
                
                <div className="buttons">
                    <h4 className="question">which song appears on this album</h4>
                    <button id="1" onClick ={e => this.props.whichButton(e.target.id,this.props.option[0])} className="button">{this.props.option[0]}</button>
                    <button id="2" onClick ={e => this.props.whichButton(e.target.id,this.props.option[1])} className="button">{this.props.option[1]}</button>
                    <button id="3" onClick ={e => this.props.whichButton(e.target.id,this.props.option[2])} className="button">{this.props.option[2]}</button>
                    <button id="4" onClick ={e => this.props.whichButton(e.target.id,this.props.option[3])} className="button">{this.props.option[3]}</button>
                </div>
            </div>
        );
    }
}

export default Choices;