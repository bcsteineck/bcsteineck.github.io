import './App.scss'
import { Header, Footer, Skip } from './components'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'

import Home from './pages/Home/Home'
import About from './pages/About/About'
import Work from './pages/Work/Work'
import Contact from './pages/Contact/Contact'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

function AppContent() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <>
      <Skip />
      <ScrollToTop />
      <Header />

      <main
        id="main"
        className={isHome ? 'main-home' : 'main-interior'}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App