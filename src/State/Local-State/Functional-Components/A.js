import React, { useState } from 'react'

function A() {
  var [x,setX] = useState(10)
  console.log(x)
  return (
    <div>
      A: {x}
      <button onClick={() => setX(x++)}>Update</button>
    </div>
  )
}  

export default A
