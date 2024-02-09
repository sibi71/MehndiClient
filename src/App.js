import React from 'react'
import "./App.css"
import { BrowserRouter as Router , Routes , Route} from "react-router-dom"
import Home from "./Pages/Home/Home"
import Navbar from "./Components/Navbar/Navbar"
import Footer from './Components/Footer/Footer'
import Gallery from './Pages/Gallery/Gallery'
import Faq from './Components/Faq/Faq'
import Service from './Pages/Service/Service'
import Booknow from "./Pages/Booknow/Booknow"
import Learn from './Pages/Learn/Learn'
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
      <Routes>
        <Route path='/service/:title' element={<><Booknow /> </>} />
      </Routes>
      <Routes>
        <Route path='/e-learning' element={<><Learn /> </>} />
      </Routes>
      <Faq />
      <Footer />
    </Router>
  )
}

export default App