import React, { Component } from 'react';
// components

class SugestedIngredient extends Component {

  addIngredient = () => {
    this.props.onAddIngredient(this.props.ing);
  }

  render() {
    return (
      <li onClick={this.addIngredient} >{this.props.ing.Namn}</li>
    )
  }
}

export default SugestedIngredient;
