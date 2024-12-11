import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/home';
import About from './components/About';
import Navbar from './components/Navbar';
import Page404 from './components/Page404';
import User from './components/User';
import Filter from './components/Filter';
import Admin from './components/Admin';
import Contect from './components/Contect';
import Email from './components/contects/Email';
import Phone from './components/contects/Phone';
import SocialMedia from './components/contects/SocialMedia';
import Login from './components/Login';
import Protected from './components/Protected';

function App() {
  // we can achive protected route using context and redux which is best 
  // learn how to use this
  const isAdmin = true;
  const isAuthenticated = false;

  return (
    <>
      <div className="App">
        <BrowserRouter>

          <Navbar />

          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<Protected isAuthenticated={isAuthenticated} />}>
              <Route path='/' element={<Home isAdmin={isAdmin} />} />

              <Route path='/about' element={<About />} />
              <Route path='/filter' element={<Filter />} />
              {isAdmin ? <Route path='/admin' element={<Admin />} /> : <Route path='/admin' element={<Navigate to="/" />} />}
              <Route path='/contect/' element={<Contect />}>
                <Route index element={<Navigate to="email" replace />} />
                <Route path='email' element={<Email />} />
                <Route path='phone' element={<Phone />} />
                <Route path='socialmedia' element={<SocialMedia />} />
              </Route>
              <Route path='/user/:name' element={<User />} />

            </Route>

            <Route path='/page404' element={<Page404 />} />
            <Route path='/*' element={<Page404 />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
