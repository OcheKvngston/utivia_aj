import React from 'react'
import Globalbtn from '../../../component/Globalbtn'
import "./style.css"
import { BsArrowRight } from 'react-icons/bs';

const Hero = () => {
  return (
    <div className='container'>
        <div className='section1'>
            <h1>Building Top<br/>  Tech Talents<br/>  for the World</h1>
            <p>Our Bootcamps are designed to help you learn from the best<br/> industry leaders from more than 19 countries</p>
            <div className='btn_holder'>
             <div className='btn3'>
                 <Globalbtn shadow="box">Individual&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<BsArrowRight/></Globalbtn>
             </div>
             <div className='btn4'>
                 <Globalbtn varient="primary2" shadow="box" outline="false">Business&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<BsArrowRight style={{
                    textAlign:'center',
                    color:'blue'
                 }}/></Globalbtn>
             </div>
            </div>
        </div>
        <div className='section2'>
            <div className='img_hold'>
                <div className='first'><br/> <br/> OCHEDI<br/> JOSHUA</div>
                <div className='second'></div>
            </div>
        </div>
    </div>
  )
}

export default Hero