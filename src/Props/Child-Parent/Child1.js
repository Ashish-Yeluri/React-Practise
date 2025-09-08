import React from 'react'

function Child1(props) {
  return (
    <div>
      Child1
      <button onClick={() => props.test("Hello Adi Garu")}>Click Child1</button>
    </div>
  )
}

export default Child1
