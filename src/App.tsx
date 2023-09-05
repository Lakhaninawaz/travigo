// import { useState } from 'react'
import Navbar from "./component/navbar/navbar"
import Home from "./component/homePage/home"


import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
    <Navbar/>

    <Routes>
        <Route path={"/"} element={<Home />} />
      </Routes>
    
    </>
  )
}

export default App
