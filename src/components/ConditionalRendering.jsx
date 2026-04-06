import React from 'react'
import '../styles/conditional.css'

const ConditionalRendering = () => {

    let user = true

  return (
    <div className='login'>
      {user ? <h1> login successfully </h1> : <h1> login failed </h1>}
    </div>
  )
}

export default ConditionalRendering
