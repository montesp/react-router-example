import { HashRouter, Routes, Route } from 'react-router-dom'
import { Home } from './components/Home';
import { Blog } from './components/Blog';
import { Profile } from './components/Profile';
import { Menu } from './components/Menu';
import { BlogPost } from './components/BlogPost';

function App() {
  return (
    <>
      <HashRouter>
        <Menu/>

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/blog' element={<Blog/>} />
          <Route path='/blog/:slug' element={<BlogPost/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='*' element={<p>Not Found</p>} />

        </Routes>

      </HashRouter>
    </>
  );
}

export default App;
