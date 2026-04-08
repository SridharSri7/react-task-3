import React, { useState } from 'react'
import '../styles/form.css'

const UseStateForm = () => {

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",    
        address: "",
        city: "",
        state: "",
        country: "",
        zipCode: "",
        check:false
    })

    const [error, setError] = useState("")

    const handlechange = (e) => {
        const {name,value} = e.target
        setForm({
            ...form,
            [name]:value,
        })
    }

    const handlechange2 = (e) =>{
        const {name, checked} = e.target
        setForm({
            ...form,
            [name]:checked,
        })
    }

    const handlesubmit = (e) => {
        e.preventDefault()
        if(!form.name || !form.email || !form.phone || !form.password || !form.confirmPassword || !form.address || !form.city || !form.state || !form.country || !form.zipCode){
            setError("All details are required")
            return
        }
            setError("")
            alert("Form successfully submited")
            return
        
    }

  return (
    <div className='container'>

        {error && <h2>{error}</h2>}

        <form onSubmit={handlesubmit}>
            <input type="text" placeholder="Enter your name"  value={form.name} name='name' onChange={handlechange}/> 
            <br />
            <input type="email" placeholder="Enter your email" value={form.email} name='email' onChange={handlechange}/>
            <br />
            <input type="number" placeholder="Phone Number" value={form.phone} name='phone' onChange={handlechange}/>
            <br />  
            <input type="password" placeholder="Password" value={form.password} name='password' onChange={handlechange}/>
            <br />
            <input type="password" placeholder="Confirm Password" value={form.confirmPassword} name='confirmPassword' onChange={handlechange}/>
            <br />
            <input type="text" placeholder="Address" value={form.address} name='address' onChange={handlechange}/>
            <br />
            <input type="text" placeholder="City" value={form.city} name='city' onChange={handlechange}/>
            <br />
            <input type="text" placeholder="State" value={form.state} name='state' onChange={handlechange}/>
            <br />
            <input type="text" placeholder="Country" value={form.country} name='country' onChange={handlechange}/>
            <br />
            <input type="number" placeholder="Zip Code" value={form.zipCode} name='zipCode' onChange={handlechange}/>
            <br />
            <input type="checkbox" checked={form.check} name='check' onChange={handlechange2} />

            <button type="submit">Submit</button>
        </form>



    </div>
  )
}

export default UseStateForm
