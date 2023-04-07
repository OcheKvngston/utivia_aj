import React from 'react'
import "./style.css"


const Header = () => {
  return (
    <div>
        <div className='holder_con'>
            <div className='holder1'>Utiva</div>
            <div className='holder2'>
                <span>Schools</span>
                <span>Enterprises</span>
                <span>Company</span>
            </div>
            <div className='holder3'>
                <div className='btn1'>
                    <button>Get Started</button>
                </div>
                <div className='btn2'>
                    <button>Login</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header