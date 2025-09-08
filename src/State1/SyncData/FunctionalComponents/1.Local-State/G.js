import React, { useState } from 'react'

function G() {
  var [name] = useState("Ashish")
  return (
    <div>
      G: {name}
    </div>
  )
}

export default G
