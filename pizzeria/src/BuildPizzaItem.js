import React, { Component } from 'react';
import logo from "./pizzalogo.jpg";

export default class BuildPizzaItem extends Component {
 
  
  myfunction(e) {   
    this.props.func(this.props.item.price, e.target.checked); 
    
  }
    render() {
        return (
          <div className="builditem">
            <tr className="buildtr">
              <td className="tdimage">
                <img
                  className="buildpizzaimg"
                  src={this.props.item.image}
                ></img>
              </td>
              <td className="tdtitle">
                {this.props.item.tname}
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;₹
                {this.props.item.price}.00
              </td>
              <td className="tdcheckbox">
                <input type="checkbox" className="addcheckbox" id="checkbox" name="addcart" onChange={(event)=> this.myfunction(event)}>
                  
                </input>
                <label className="label" for="addcart">
                  Add
                   
                </label>
              </td>
            </tr>
          </div>
        );
    }
}
