import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './pages/Home';
import About from './pages/About';
import Posts from './pages/Posts';
import DefaultLayout from './layouts/DefaultLayout';
import BlankLayout from './layouts/BlankLayout';
import NotFound from './layouts/NotFound';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/posts" element={<Posts />} />
        </Route>
        <Route element={<BlankLayout />}>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
