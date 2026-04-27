import React from 'react'
import SecondChild from './SecondChild'


const FirstChild = ({Name}) => {
   
  return (
    <div style={{border:"2px solid black", padding:"20px"}}>
      <h1>First child</h1>
      <SecondChild />
    </div>
  )
}

export default FirstChild

