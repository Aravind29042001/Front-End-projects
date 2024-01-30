import React from 'react'
import Mainpage from './Compounds/Mainpage'
import Navbar from './Compounds/Navbar'
import Shimmer from './Compounds/Shimmer'
import Footer from './Compounds/Footer'
import { createBrowserRouter } from 'react-router-dom'


function App() {
  return (
    <div>
      <Navbar/>
      <Mainpage/>
      {/* <Shimmer/> */}
      <Footer/>
      
    </div>
  )
}
const appProvider=createBrowserRouter


export default App