import { HashRouter, Routes, Route } from 'react-router-dom'
import { Home } from './components/Home/Home';
import { Blog } from './components/Blog/Blog';
import { Profile } from './components/Profile/Profile';
import { Menu } from './components/Menu/Menu';
import { BlogPost } from './components/BlogPost/BlogPost';
import { Login } from './components/Login/Login';
import { Logout } from './components/Logout/Logout';
import { AuthProvider, AuthRoute } from './hooks/auth';

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
            <Route
              path='/profile'
              element={
                <AuthRoute>
                  <Profile/>
                </AuthRoute>
              }/>
            <Route path='/login' element={<Login/>} />
            <Route
              path='/logout'
              element={
                <AuthRoute>
                  <Logout/>
                </AuthRoute>
              }/>
            <Route path='*' element={<p>Not Found</p>} />
          </Routes>
        </AuthProvider>
      </HashRouter>
    </>
  );
}

export default App;
