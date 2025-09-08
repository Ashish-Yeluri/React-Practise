

// //JSX
// function Myjsx() {
//   return (
//     <h2>This is JSX</h2>
//   )
// }
// export default Myjsx






// // Without JSX
// import React from 'react'
// function Myjsx() {
//   return React.createElement("div", null, React.createElement("h2", null, "This is Without JSX"))
// }
// export default Myjsx





// Valid Things
function Myjsx() {
  // var x = 10
  // var x = "Ashish"
  // var x = [1,2,3]
  // var x = null
  // var x = undefined
  var x = true
  return (
    <h2>This is JSX: {x}</h2>
  )
}
export default Myjsx


