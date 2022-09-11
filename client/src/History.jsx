import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './pages/Home'
import MyWorks from './pages/MyWorks'

function History() {
  return (
    <>
    <Router>
      <Routes>
        <Route  path="/" element={ <Home />}/>
        <Route  path="/meus-trabalhos" element={ <MyWorks />}/>
      </Routes>
    </Router>
    </>
  )
}

export default History