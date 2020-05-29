import React, { Component} from 'react'; 


class Cover extends Component {
    render(){
        return(
           
        <img width="200" height ="200" src={this.props.image} alt=""/>
      
        );
    }
}

export default Cover;