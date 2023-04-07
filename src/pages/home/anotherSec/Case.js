import React from 'react'
import "./style.css"

const Case = (props) => {
  return (
    <div className='Case1'>
        <div className='case2'>BOOTCAMP</div>
        <div className='case3'>{props.title}</div>
        <div className='case4'>{props.other}</div>
        <div className='case5'>View Program </div>
    </div>
  )
}

export default Case