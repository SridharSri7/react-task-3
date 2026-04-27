import React from 'react'
import FifthChild from './FifthChild'

const FourthChild = () => {
  return (
    <div  style={{border:"2px solid black", padding:"20px"}}>
      <h1>Fourth child</h1>
      <FifthChild />
    </div>
  )
}

export default FourthChild
