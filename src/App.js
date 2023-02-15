import { HashRouter, Routes, Route } from 'react-router-dom'
import { Home } from './components/Home';
import { Blog } from './components/Blog';
import { Profile } from './components/Profile';
import { Menu } from './components/Menu';
import { BlogPost } from './components/BlogPost';
import { Login } from './components/Login';
import { Logout } from './components/Logout';
import { AuthProvider, Auth } from './components/auth';

function App() {
  return (
    <>
      <HashRouter>
        <AuthProvider>
          <Menu/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/blog' element={<Blog/>} >
              <Route path=':slug' element={<BlogPost/>} />
            </Route>
            <Route path='/profile' element={<Profile/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/logout' element={<Logout/>} />
            <Route path='*' element={<p>Not Found</p>} />
          </Routes>
        </AuthProvider>
      </HashRouter>
    </>
  );
}

export default App;
