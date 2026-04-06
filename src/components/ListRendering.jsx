import React from 'react'

const ListRendering = () => {

    let brands = [
        {id: 1, name: 'Apple'},
        {id: 2, name: 'Samsung'},
        {id: 3, name: 'OnePlus'},
        {id: 4, name: 'Xiaomi'},
        {id: 5, name: 'Oppo'},
    ]



  return (
    <div style={{backgroundColor:'skyblue',color:'whitesmoke'}}>
      {brands.map((brand,index) => (
        <li key={index} >{brand.name}</li>
      ))}
    </div>
  )
}

export default ListRendering

