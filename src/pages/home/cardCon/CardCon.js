import React from 'react'
import HolderCon from './HolderCon'
import "./style.css"
import Pic1 from "./Home-header.jpg"
import Pic2 from "./Home-header.jpg"
import Pic3 from "./Home-header.jpg"
import Pic4 from "./Home-header.jpg"
import Pic5 from "./Home-header.jpg"
import Pic6 from "./Home-header.jpg"
import Pic7 from "./Home-header.jpg"
import Pic8 from "./Home-header.jpg"
import NextSec from '../nextSec/NextSec'

const CardCon = () => {
    const Data = [
        {
            id:1,
            img:<img src={Pic1} alt='imag'/>,
            title:"i'm interested in Data and Numbers",
            bg:"blue"
        },
        {
            id:2,
            img:<img src={Pic2} alt='imae'/>,
            title:"i'm interested in Design and Creatives",
            bg:"green"
        },
        {
            id:3,
            img:<img src={Pic3} alt='imge'/>,
            title:"i'm interested in Products",
            bg:"purple"
        },
        {
            id:4,
            img:<img src={Pic4} alt='iage'/>,
            title:"i'm interested in Business Analysis",
             bg:"yellow"
        },
        {
            id:5,
            img:<img src={Pic5} alt='mage'/>,
            title:"i'm interested in Programming",
            bg:"brown"
        },
        {
            id:6,
            img:<img src={Pic6} alt='iage'/>,
            title:"i'm interested in Cloud Development",
             bg:"aqua"
        },
        {
            id:7,
            img:<img src={Pic7} alt='mage'/>,
            title:"i'm interested in Product Marketing",
             bg:"green"
        },
        {
            id:8,
            img:<img src={Pic8}alt='mage'/>,
            title:"i'm interested in BlockChain",
            bg:"blue"
        },
    ]
  return (
    <div className='Container'>
        <div className='text'>
            <h1>Experience Lifelong Learning<br/> with Utiva Bootcamps</h1>
        </div>
        <div className='text2'>
            BOOTCAMP &nbsp;&nbsp;&nbsp;&nbsp; BOOTCAMP + INTERNSHIP
        </div>
        <div className='Card'>
            {
                Data.map((props)=>(
                    <HolderCon img={props.img} title={props.title} bg={props.bg}/>
                ))
            }
        </div>
        <br/><br/><br/>
        <NextSec/>
    </div>
  )
}

export default CardCon