import React from 'react'
import "./style.css"
import Pic from "./Capture.PNG"

const NewSection = () => {
  return (
    <div className='case'>
        <div className='text1'>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Our Talents Work With Many of these Leading Tech Companies
        </div>
        <div className='img'>
            <img src={Pic} alt=''/>
        </div>
    </div>
  )
}

export default NewSection