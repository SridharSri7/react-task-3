import React from 'react'
import '../styles/combine.css'

const Combined = () => {

    let students = ["Sridhar","Gokul","Vignesh","Jayanth","Ajith","kevin"]

  return (


    <div>
      {students.length > 0 ? 
        students.map((name,index) => (
          <li key={index} className='success'>{name}</li>
       )) :
        <h1 className='failed'> No students found </h1>
      }
    </div>
  )
}

export default Combined
