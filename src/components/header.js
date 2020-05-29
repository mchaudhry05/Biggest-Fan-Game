import React, { Component } from 'react'; 

class Header extends Component {

render()
{
    return(
        <div>
            <h2 className="header">{this.props.text}</h2>
            <h1 className="artistName">{this.props.artistName}</h1>
        </div>
    );
}

}



  

export default Header;