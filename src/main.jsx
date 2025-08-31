import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/navbar.jsx'
import Background from './components/background.jsx'
import Preloader from './components/preloader.jsx'

import 'remixicon/fonts/remixicon.css'
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Preloader />
    <div className="container mx-auto px-4">
      <Navbar />
      <App />
    </div>
    
  </StrictMode>,
)
