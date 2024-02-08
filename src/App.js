import React from 'react'
import "./App.css"
import { BrowserRouter as Router , Routes , Route} from "react-router-dom"
import Home from "./Pages/Home/Home"
import Navbar from "./Components/Navbar/Navbar"
import Footer from './Components/Footer/Footer'
import Gallery from './Pages/Gallery/Gallery'
import Faq from './Components/Faq/Faq'
import Service from './Pages/Service/Service'
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<><Home /> </>} />
      </Routes>
      <Routes>
        <Route path='/gallery' element={<><Gallery /> </>} />
      </Routes>
      <Routes>
        <Route path='/service' element={<><Service /> </>} />
      </Routes>
      <Faq />
      <Footer />
    </Router>
  )
}

export default App