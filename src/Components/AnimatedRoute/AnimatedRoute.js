import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from "react-router-dom"
import Home from '../../Pages/Home/Home'
import Gallery from '../../Pages/Gallery/Gallery'
import Service from '../../Pages/Service/Service'
import Booknow from '../../Pages/Booknow/Booknow'
import Learn from '../../Pages/Learn/Learn'
import Contact from '../../Pages/Contact/Contact'
import { AnimatePresence } from 'framer-motion'
const AnimatedRoute = () => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })

  }, [location])
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<><Home /> </>} />
        <Route path='/gallery' element={<><Gallery /> </>} />
        <Route path='/service' element={<><Service /> </>} />
        <Route path='/service/:title' element={<><Booknow /> </>} />
        <Route path='/e-learning' element={<><Learn /> </>} />
        <Route path='/contact Us' element={<><Contact /> </>} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoute