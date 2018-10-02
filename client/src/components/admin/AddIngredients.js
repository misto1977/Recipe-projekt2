import React, { Component } from 'react';
// components
import Autosuggest from "./addIngredients/Autosuggest";
import PickedIngs from "./addIngredients/PickedIngs";

class AddIngredients extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fetchedIngs: [],
      pickedIngs: []
    }
  }

  handleFetchRequest = (str) => {
    console.log(str);
    // fetch ingredients
    fetch(`ingredients/${str}`)
    .then( res => res.json() )
    .then( filteredIngs => this.setState({fetchedIngs: filteredIngs}) );
  }

  handleAddIngredient = (ing) => {
    console.log(ing.Namn);
    // do not mutate state directly. could lead to serious bugs
    this.setState(prevState => ({
      pickedIngs: [...prevState.pickedIngs, ing],
      fetchedIngs: []
    }));
  }

  render() {
    console.log(this.state.pickedIngs);
    return (
      <div className="form-group col-md-12">

        <Autosuggest
          minChars={2}
          onFetchRequest={this.handleFetchRequest}
          fetchedIngs={this.state.fetchedIngs}
          onAddIngredient={this.handleAddIngredient}
        />

        <PickedIngs picked={this.state.pickedIngs} />


      </div>
    )
  }
}

export default AddIngredients;
