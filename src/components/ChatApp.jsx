import React, { useState } from 'react'
import '../styles/chatapp.css'

const ChatApp = () => {
    const [inpMsg, setInpMsg] = useState("")
    const [message, setMessage] = useState([])

    const handlebtn = () => {
        if( inpMsg.trim() === "") return;
        setMessage( [...message,inpMsg]);
        setInpMsg("");
    }
  return (
    <div className='chat-container'>

        <h1>Chat App</h1>

      <div>
         <label htmlFor="inpMsg">Message</label>
         <input type="text" id="inpMsg" value={inpMsg} onChange={(e) => setInpMsg(e.target.value)} />

         <button onClick={handlebtn}>Send Message</button>
      </div>

      <div className='message-display'>
        {message.map((msg,index) => (
            <div key={index}>{msg}</div>
        ))}
      </div>

    </div>
  )
}

export default ChatApp
