import React from 'react'
import Case from './Case'
import "./style.css"

const AnotherSec = () => {
  const Data =
  [
    {
      id:1,
      title:"Intensive BOOTCAMPS Designed To Help You Get Into Tech",
      other:"Learn tech with others in virtual classes, work on projects, and build your portfolio."
    },
    {
      id:2,
      title:"Start a Tech career with an International Work Experience",
      other:" Learn Tech skills in class, get paired with one of our tech companies and work in real work envrionment"
    }
  ]
  return (
    <div className='fold'>
        <div className='file1'>
            <h1>Discover the right Virtual<br/> Experience Program for you</h1>
        </div>
        <div className='card_holder'>
          {
            Data.map((props)=>(
              <Case title={props.title} other={props.other}/>
            ))
          }
        </div>
    </div>
  )
}

export default AnotherSec