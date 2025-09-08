import React from 'react'

function Child1(props) {
  
  return (
    <div>
      <h5>Child1</h5>
      <button onClick={() => props.test("Hello Ashish Garu")}>Click Child1</button>
    </div>
  )
}

export default Child1
