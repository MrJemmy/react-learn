import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/home';
import About from './components/About';
import Navbar from './components/Navbar';
import Page404 from './components/Page404';
import User from './components/User';

function App() {

  return (
    <>
      <div className="App">
        <BrowserRouter>

        <Navbar/>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/admin' element={<Navigate to="/" />} />
            <Route path='/user/:name' element={<User/>} />
            <Route path='/*' element={<Page404 />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
