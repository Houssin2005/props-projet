import React, { Component } from 'react';

class Presentation extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h2>Salut {this.props.nom} {this.props.prenom} {this.props.age}</h2>
        
        {this.props.children}

        <hr/>
      </div>
    );
  }
}

export default Presentation;