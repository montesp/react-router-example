import { HashRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <HashRouter>
        {/* <Menu/> */}

        <Routes>
          {/* <Route path='/' element={<Home/>} />
          <Route path='/blog' element={<Blog/>} />
          <Route path='/profile' element={<Profile/>} /> */}
          <Route path='*' element={<p>Not Found</p>} />

        </Routes>

      </HashRouter>
    </>
  );
}

export default App;
