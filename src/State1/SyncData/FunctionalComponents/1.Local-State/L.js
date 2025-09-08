import React, { useState } from 'react'

function L() {
  var [name] = useState("Ashish")
  return (
    <div>
      L: {name}
    </div>
  )
}

export default L
