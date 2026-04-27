import React from 'react'
import { useContext, createContext } from 'react'
import ConditionalRendering from './components/ConditionalRendering.jsx'
import ListRendering from './components/ListRendering.jsx'
import Combined from './components/Combined.jsx'
import UseState from './components/UseState.jsx'
import UseStateForm from './components/UseStateForm.jsx'
import Clock from './components/Clock.jsx'
import ImageUseRef from './components/ImageUseRef.jsx'
import FirstChild from './context/FirstChild.jsx'
import Home from './Router/Home.jsx'
import About from './Router/About.jsx'
import Contact from './Router/Contact.jsx'
import Profile from './Router/Profile.jsx'
import Services from './Router/Services.jsx'
import AppDevelopment from './Router/AppDevelopment.jsx'
import Webapp from './Router/Webapp.jsx'
import UIandUx from './Router/UIandUx.jsx'
import UserList from './Router/UserList.jsx'
import UserDetails from './Router/UserDetails.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ChatApp from './components/ChatApp.jsx'



export const MyContext = createContext()


function App() {

  const Details = [
        {id:1, name:"John", age:30},
        {id:2, name:"Jane", age:25},
        {id:3, name:"Bob", age:35}, 
  ]




  return (
    <>


          {/* <ChatApp/> */}

         
          <BrowserRouter>
             <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/services/*" element={<Services />}>
                  <Route path="app" element={<AppDevelopment />} />
                  <Route path="webapp" element={<Webapp />} />
                  <Route path="uiux" element={<UIandUx />} />
                </Route>
                <Route path="/users" element={<UserList />} />
                <Route path="/users/:id" element={<UserDetails />} />
             </Routes>
          </BrowserRouter>

          {/* ......................................................................... */}
      
      {/* <div style={{border:"2px solid black", padding:"10px", margin:"10px",width:"800px"}}>
        <h1>App Component</h1>
        <MyContext.Provider value = {Details[0].name}>
          <FirstChild />
        </MyContext.Provider>
      </div>

      <ImageUseRef />
       
      <Clock />
      <hr />
      <UseStateForm/>
      <h1 style={{color:'blue'}}>Task-4</h1>
      <UseState/>
      <hr />

       <h1 style={{color:'blue'}}>Task-3</h1>
      <ConditionalRendering />
      <hr />
      <ListRendering />
      <hr />
      <Combined />
      <hr /> */}
    </>
  )
}

export default App
