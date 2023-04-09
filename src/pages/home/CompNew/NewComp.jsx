import React from 'react'
import classes from "./style.module.css"
import { BsArrowRight } from 'react-icons/bs';
import pic1 from "./impact1.586cab30.webp"
import pic2 from "./impact2.e990c819.webp"
import pic3 from "./impact3.806984b1.webp"
import pic4 from "./impact4.bbb0b17b.webp"

const NewComp = () => {
  return (
    <div className={classes.caseHolder}>
        <div className={classes.con1}>
            <h1>Impact is the <span>reason we exist!</span></h1>
            <p>Utiva.impact is an impact project of Utiva, a tech company that is powering the tech side of learning for people of colour and minorities across Africa and the world.</p>
            <h3>Learn More &nbsp;&nbsp;&nbsp;<BsArrowRight style={{
                        color:"blue"}}/>
            </h3>
        </div>
        <div className={classes.con2}>
            <div className={classes.card}>
                <div className={classes.box1}>
                    <img src={pic1} alt=''/>
                </div>
                <div className={classes.box1}>
                    <img src={pic2} alt=''/>
                </div>
                <div className={classes.box1}>
                    <img src={pic3} alt=''/>
                </div>
                <div className={classes.box1}>
                    <img src={pic4} alt=''/>
                </div>
            </div>
        </div>
    </div>
  )
}
<div className={classes.card}></div>
export default NewComp