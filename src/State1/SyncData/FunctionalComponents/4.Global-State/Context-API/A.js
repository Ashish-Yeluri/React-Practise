// import React, { useState } from 'react'
import React from 'react';
import B from './B'
import C from './C'

var nameContext = React.createContext("Ashish")
console.log(nameContext)

function A() {
  // var [name] = useState("Ashish")
  return (
    <div>
      {/* A: {name} */}
      {/* <B name={name} /> */}
      {/* <C name={name} /> */}
      <B />
      <C />
      
    </div>
  );
}

export default A
