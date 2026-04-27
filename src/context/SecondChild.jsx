import React from 'react'
import ThirdChild from './ThirdChild'

const SecondChild = () => {
  return (
    <div style={{border:"2px solid black", padding:"20px"}}>
      <h1>Second child</h1>
      <ThirdChild />
    </div>
  )
}

export default SecondChild
