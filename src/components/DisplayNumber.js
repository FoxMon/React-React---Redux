// import React, {Component} from "react";
import React, {useState} from "react";

// export default class DisplayNumber extends Component {
//     render() {
//         return (
//         <div>
//             <h1>Display Number</h1>
//             <input type="text" value={this.props.number} readOnly></input> {this.props.unit}
//         </div>
//         )
//     }
// }

const DisplayNumber = (props) => {
    return(
        <div>
            <h1>Display Number</h1>
            <input tpye= "text" value = {props.number} readOnly></input> {props.unit}
        </div>
    );
}

export default DisplayNumber;