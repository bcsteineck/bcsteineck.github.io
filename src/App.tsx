import './App.scss'
import { Header, Footer, Skip } from './components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import About from './pages/About/About'
import Work from './pages/Work/Work'
import Contact from './pages/Contact/Contact'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

function App() {
  return (
    <BrowserRouter>
      <Skip />
      <ScrollToTop />
      <Header />
      <main id="main">
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
