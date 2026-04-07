import React from 'react'
import ConditionalRendering from './components/ConditionalRendering.jsx'
import ListRendering from './components/ListRendering.jsx'
import Combined from './components/Combined.jsx'
import UseState from './components/UseState.jsx'

function App() {


  return (
    <>

      <UseState/>
      <hr />
      <ConditionalRendering />
      <hr />
      <ListRendering />
      <hr />
      <Combined />
      <hr />
    </>
  )
}

export default App
