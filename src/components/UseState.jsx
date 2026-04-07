
// Task-4

import React, { useState } from 'react'

const UseState = () => {
    
    const [user, setuser] = useState(false)
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    const handleButton = () => {
        if (!user){
            if(email&&password){
                setuser(true)
            }else{
                alert("enter details")
            }
        }else{
            setemail("")
            setpassword("")
            setuser(false)
        }
    }
  return (
    <div>
        
       <h1> {user ? "Welcome to our app" : "Sign in page"}</h1>

       { !user && (
        <>
           <label htmlFor="email">Email:</label>
           <input type="email" id="email" value={email} onChange={(e) => setemail(e.target.value)}  />
           <label htmlFor="password">Password:</label>
           <input type="password" id="password" value={password} onChange={(e) => setpassword(e.target.value)}  />

        </>
       )}

      <button onClick={handleButton}>Sign {user? "Out" : "In"}</button>
      
    </div>
  )
}

export default UseState



