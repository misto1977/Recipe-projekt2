import React, { Component } from 'react';
// components

class AddInstructions extends Component {
  constructor(props) {
    super(props);


  }

  render() {
    return (
      <div id="instructions" className="form-group col-md-12">
        <label>Instructions</label>
        <textarea name="instr_1"  className="form-control" placeholder="Step 1:" style={{height:130}}></textarea>
        <button className="smallBtn"><i className="icon-plus"></i>Add step</button>
      </div>
    )
  }
}

export default AddInstructions;
