import React, { useState } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

function Parent() {
  var [x, setX] = useState(10)
  function test(data) {
    setX(data)
  }
  return (
    <div>
      <h3>Parent Component:{x}</h3>
      <Child1 test={test} />
      <Child2 z = {x} />
    </div>
  )
}

export default Parent
