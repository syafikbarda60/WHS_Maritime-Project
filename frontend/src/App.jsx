import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/frontend/Home';
//import About from './components/frontend/About';

import './assets/css/style.scss';
import './assets/css/home.scss';
import './assets/css/gallery.scss';
import './assets/css/news.scss'
import './assets/css/contactUs.scss'
import './assets/css/FloatingTerminal.scss'
import './assets/css/oceanFlow1.scss'
import './assets/css/oceanFlow3.scss'
import './assets/css/padmasari.scss'
import './assets/css/tbSeries.scss'

//import Ourservice_I1 from './components/frontend/Ourservice_I1';
import Login from './components/backend/Login';
import { ToastContainer, toast } from 'react-toastify';
import Dashboard from './components/backend/Dashboard';
import RequireAuth from './components/common/RequireAuth';
import Gallery from './components/frontend/Gallery';
import News from './components/frontend/News';
import ContactUs from './components/frontend/ContactUs';
import FloatingTerminal from './components/frontend/FloatingTerminal';
import OceanFlow3 from './components/frontend/OceanFlow3';
import OceanFlow1 from './components/frontend/OceanFlow1'
import Padmasari from './components/frontend/Padmasari';
import TBSeries from './components/frontend/TBSeries';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/gallery'element={<Gallery/>}/>
        {/*<Route path='/Iskandar 1'element={<Ourservice_I1/>}/> */}
        <Route path='/news/:id' element={<News/>} />
        <Route path='/admin/login'element={<Login/>}/>
        <Route path='/contact_us'element={<ContactUs/>}/>
         <Route path="/floatingterminal" element={<FloatingTerminal />} />
        <Route path="/oceanFlow1" element={<OceanFlow1 />} />
        <Route path="/oceanFlow3" element={<OceanFlow3 />} />
        <Route path="/floatingTerminal" element={<FloatingTerminal />} />
        <Route path="/padmasari" element={<Padmasari />} />
        <Route path="/tbSeries" element={<TBSeries />} />
        <Route path="/admin/dashboard" element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
          } />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App


/*<div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
 */