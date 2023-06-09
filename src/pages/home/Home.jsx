import React from 'react'
import AnotherSec from './anotherSec/AnotherSec'
import CardCon from './cardCon/CardCon'
import Hero from './heroCon/Hero'
import NewSection from './newSection/NewSection'
import classes from "../home/style.module.css"

const Home = () => {
  return (
    <div className={classes.holder}>
      <Hero/>
      <NewSection/>
      <AnotherSec/>
      <CardCon/>
    </div>
  )
}

export default Home