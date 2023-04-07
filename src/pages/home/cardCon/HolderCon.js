import React from 'react'
import "./style.css"

const HolderCon = (props) => {
  return (
    <div className='File'>
        <div className='img_con'>
            {props.img}
        </div>
        <div className='File1'style={{backgroundColor: props.bg}} >
            <div className='View1'>
                {
                    props.title
                }
            </div>
            <div className='View2'>
                <p>View Courses</p>
            </div>
        </div>
    </div>
  )
}

export default HolderCon