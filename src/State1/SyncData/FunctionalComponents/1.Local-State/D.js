import React, { useState } from 'react'

function D() {
  var [name] = useState("Ashish")
  return (
    <div>
      D: {name}
    </div>
  )
}

export default D
