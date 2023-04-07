import React, { useState } from 'react'
import Globalbtn from '../Globalbtn'
import "./style.css"
import { BiMenuAltRight } from 'react-icons/bi';
import { MdOutlineClear } from 'react-icons/md';


const Header = (props) => {
    const [toggle,setToggle] = useState(true)

    const toggleMenu = () => {
        setToggle(!toggle)
    }

  return (
    <div>
        <div className='holder_con'>
            <div className='holder1'>
                <div className='holder5'>
                {
                    toggle ? (<div onClick={toggleMenu}><BiMenuAltRight style={{
                        fontSize: "40px",
                        color: "blue",
                        cursor: "pointer"
                    }}/></div>) : (<div onClick={toggleMenu}><MdOutlineClear style={{
                        fontSize: "40px",
                        color: "blue",
                        cursor: "pointer"
                    }}/></div>)
                }
                </div>
                <span>Utiva</span>
            </div>
            <div className='holder2'>
                <span>Schools</span>
                <span>Enterprises</span>
                <span>Company</span>
            </div>
            <div className='holder3'>
                <div className='btn1'>
                    {/* <button>Get Started</button> */}
                    <Globalbtn>Get Start</Globalbtn>
                </div>
                <div className='btn2'>
                    {/* <button>Login</button> */}
                    <Globalbtn varient="primary" outline="true">Login</Globalbtn>
                </div>
            </div>
            <div className='holder4'>
                {
                    toggle ? (<div onClick={toggleMenu}><BiMenuAltRight style={{
                        fontSize: "40px",
                        color: "blue",
                        cursor: "pointer"
                    }}/></div>) : (<div onClick={toggleMenu}><MdOutlineClear style={{
                        fontSize: "40px",
                        color: "blue",
                        cursor: "pointer"
                    }}/></div>)
                }
                
            </div>
        </div>
    </div>
  )
}

export default Header