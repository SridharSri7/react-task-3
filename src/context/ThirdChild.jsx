import React from 'react'

import FourthChild from './FourthChild.jsx'

const ThirdChild = () => {
                                                               
  return (
    <div style={{border:"2px solid black", padding:"20px"}}>
      <h1>Third child </h1>
      <FourthChild />
    </div>
  )
}

export default ThirdChild
