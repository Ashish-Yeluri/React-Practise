

// function Mychild(props) {
//   console.log(props)
//   var x = 100
//   return (
//     <h3>This is Child, {props.data}, {x}</h3>
//   )
// }
// export default Mychild

import React  from "react";

class Mychild extends React.Component{
  render() {
   return <h4>This is Class Component</h4>
  }
}
export default Mychild