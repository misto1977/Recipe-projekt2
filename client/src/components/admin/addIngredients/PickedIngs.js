import React, { Component } from 'react';
// components

class PickedIngs extends Component {

  render() {

    let picked = this.props.picked;

    return (
      <React.Fragment>
        {picked==='undefined' || picked.length===0 ? <div></div> :
        <div id="picked_ings" className="form-group" style={{width:'100%'}}>
          <ul>
            {picked.map((ing, i) => {
              return (
                <li key={i}>
                  <span className="ing">{ing.Namn}</span>
                  <div className="ctrls">
                    <span>amount: </span>
                    <input name="quantity" type="number" placeholder="1" />
                    <span className="measuringUnit">g</span>
                    <i className="icon-cancel"></i>
                  </div>
                </li>
                )
            })}
          </ul>
        </div>}
      </React.Fragment>
    )
  }
}

export default PickedIngs;
