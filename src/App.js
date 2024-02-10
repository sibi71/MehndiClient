import React from 'react'
import "./App.css"
import { BrowserRouter as Router } from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar"
import Footer from './Components/Footer/Footer'
import Faq from './Components/Faq/Faq'
import AnimatedRoute from './Components/AnimatedRoute/AnimatedRoute'
const App = () => {
  
  return (
    <Router>
      <Navbar />
      <AnimatedRoute />
      <Faq />
      <Footer />
    </Router>
  )
}

export default App