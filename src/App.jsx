import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './pages/Home';
import About from './pages/About';
import Posts from '../src/components/posts/PostList/Posts';
import PostDetails from "../src/components/posts/PostList/PostsDetails";


import DefaultLayout from './layouts/DefaultLayout';
import BlankLayout from './layouts/BlankLayout';
import NotFound from './layouts/NotFound';
import './App.css';

import PostsIndex from './pages/posts/Show'
import PostsShow from './pages/posts/Index'
import PostsCreate from './pages/posts/Create'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout principale */}
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<PostDetails />} /> {/* Dettaglio post */}

        </Route>

        {/* Rotte Post */}
        <Route element={<DefaultLayout />}>
          <Route path="/posts" element={<PostsIndex />} />
          <Route path="/posts/create" element={<PostsCreate />} />
          <Route path="/posts/:id" element={<PostsShow />} />
        </Route>

        {/* Layout per 404 */}
        <Route element={<BlankLayout />}>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
