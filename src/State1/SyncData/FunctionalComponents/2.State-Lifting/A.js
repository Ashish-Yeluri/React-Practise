import React, { useState } from 'react'
import B from './B'
import C from './C'

function A() {
  var [name] = useState("Ashish")
  return (
    <div>
      A: {name}
      <B />
      <C />
      
    </div>
  )
}

export default A
