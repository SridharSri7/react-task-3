import React from 'react'
import ConditionalRendering from './components/ConditionalRendering.jsx'
import ListRendering from './components/ListRendering.jsx'
import Combined from './components/Combined.jsx'

function App() {


  return (
    <>
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
