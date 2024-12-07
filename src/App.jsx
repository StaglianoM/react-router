import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from './layouts/DefaultLayout'
import Homepage from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

import './App.css'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path='/' element={<Homepage />} ></Route>
            <Route path='/about' element={<About />} ></Route>
            <Route path='/contact' Component={Contact} ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
