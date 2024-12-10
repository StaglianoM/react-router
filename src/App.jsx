import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './pages/Home'
import About from './pages/About'
import Posts from './pages/Posts'

import './App.css'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/posts" element={<Posts />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
