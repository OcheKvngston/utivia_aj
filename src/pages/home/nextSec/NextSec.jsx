import React from 'react'
import classes from "./style.module.css"
import pics from "./Capture.PNG"
import image from "./individual.9cb1e737.webp"
import { BsArrowRight } from 'react-icons/bs';
const NextSec = () => {
  return (
    <div className={classes.holder}>
      <div className={classes.case1}>
        <h1>Digital Transformation for Individuals and Businesses.</h1>
        <p>We are a Technology Workforce Development company that helps people learn premium technology skills virtually and partners with companies to hire the best talents and invest in workforce development. Currently with learners from 19 countries.</p>
      </div>
      <div className={classes.case2}>
        <div className={classes.main1}>
          <div className={classes.phase1}>
            <img src={pics} alt=''/>
          </div>
          <div className={classes.phase2}>
            <h2>For Individuals</h2>
          </div>
          <div className={classes.phase3}>
            <p>On the Utiva platform, access the best tech skills trainings that comes with deep-diving mentoring, coaching and real project.</p>
          </div>
          <div className={classes.phase4}>
            <p>Get Started &nbsp;&nbsp;&nbsp;<BsArrowRight style={{
              color:"blue"
            }}/></p>
          </div>
        </div>
        <div className={classes.main2}>
          <div className={classes.pic1}>
            <img src={image} alt=''/>
          </div>
          <div className={classes.pic2}>
            <div className={classes.text1}>
              <h1>30k+</h1>
              <p>students <br/>trained</p>
            </div>
            <div className={classes.text2}>
              <h1>85%</h1>
              <p>Hiring rate</p>
            </div>
            <div className={classes.text3}>
              <h1>30</h1>
              <p>Countries</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NextSec