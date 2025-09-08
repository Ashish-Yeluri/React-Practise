import React from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

function Parent() {
  var name = "Aditya"
  return (
    <div>
      Parent {name}
      <Child1 name = "Ashish"/>    
      {/* {Child1()} */}
      <Child2 name={name} />
    </div>
  )
}

export default Parent
