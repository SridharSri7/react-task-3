import React from 'react'
import ConditionalRendering from './components/ConditionalRendering.jsx'
import ListRendering from './components/ListRendering.jsx'
import Combined from './components/Combined.jsx'
import UseState from './components/UseState.jsx'

function App() {


  return (
    <>
       <h1 style={{color:'blue'}}>Task-4</h1>
      <UseState/>
      <hr />

       <h1 style={{color:'blue'}}>Task-3</h1>
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
