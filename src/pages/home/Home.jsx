import React from 'react'
import Header from "../home/headerCon/Header"
import AnotherSec from './anotherSec/AnotherSec'
import CardCon from './cardCon/CardCon'
import Hero from './heroCon/Hero'
import NewSection from './newSection/NewSection'

const Home = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <NewSection/>
      <AnotherSec/>
      <CardCon/>
    </>
  )
}

export default Home