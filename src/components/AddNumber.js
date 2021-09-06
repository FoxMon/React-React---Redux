// import React, {Component} from 'react';
import React, {useState} from 'react';

// export default class AddNumber extends Component {
//     state = {size:1}
//     render() {
//       return (
//         <div>
//           <h1>Add Number</h1>
//           <input type="button" value="+" onClick={function(){
//             this.props.onClick(this.state.size);
//           }.bind(this)}></input>
//           <input type="text" value={this.state.size} onChange={function(e){
//             this.setState({size:Number(e.target.value)});
//           }.bind(this)}></input>
//         </div>
//       )
//     }
// }

const AddNumber = (props) => {
  const [size, setSize] = useState(1);

  const buttonOnClickHandler = () => {
    props.onClick(size);
  }

  const inputOnChangeHandler = (e) => {
    setSize(Number(e.target.value));
  }

  return (
    <div>
      <h1>Add Number</h1>
      <input tpye = "button" value = "+" onClick = {buttonOnClickHandler}></input>
      <input type = "text" value = {size} onChange = {inputOnChangeHandler}></input>
    </div>
  )
}

export default AddNumber;