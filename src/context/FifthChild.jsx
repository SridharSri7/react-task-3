import React from 'react'
import { useContext } from 'react'
import { MyContext } from '../App'

const FifthChild = () => {
    const name = useContext(MyContext)
  return (
    <div  style={{border:"2px solid black", padding:"20px"}}>
      <h1>Fifth child : {name}</h1>
    </div>
  )
}

export default FifthChild
