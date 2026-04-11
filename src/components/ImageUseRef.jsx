import React, { useRef, useState } from 'react'
import '../styles/imageref.css'
const ImageUseRef = () => {
    const [newPic, setNewPic] = useState(true)
    const [imgUrl, setImgUrl] = useState("")
    const inputRef = useRef()

    const handleImg = (e) => {
        const file = e.target.files[0]
        if(file){
            const createUrl = URL.createObjectURL(file)
            setImgUrl(createUrl)
            setNewPic(false)
        }
    }


  return (
    <>
      <h1>Upload an image</h1>
      <input type="file" ref={inputRef} onChange={handleImg} />
      { newPic?(
         <div className='img-div' onClick={() => inputRef.current.click()}>
         <h3>Upload Image </h3>
         </div>
      ):( <img onClick={() => inputRef.current.click()} src={imgUrl}/>)
      }
    </>
  )
}

export default ImageUseRef
