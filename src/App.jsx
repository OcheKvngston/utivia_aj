import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/home/Home'
import School from './pages/school/School'

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/sch' element={<School/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App