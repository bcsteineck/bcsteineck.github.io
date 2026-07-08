import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MOBILE_BREAKPOINT } from '../../constants/breakpoints'

import Nav from '../Nav/Nav';
import './Header.scss';

export default function Header() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const lastScrollY = useRef(0)

  useEffect(() => {
    function handleScroll() {
      if (isMenuOpen) {
        setIsHidden(false)
        lastScrollY.current = window.scrollY
        return
      }

      const current = window.scrollY

      setIsScrolled(current > 40)

      if (current > lastScrollY.current + 10 && current > 100) {
        setIsHidden(true)
      } else if (current < lastScrollY.current - 10) {
        setIsHidden(false)
      }

      lastScrollY.current = current
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isMenuOpen])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= MOBILE_BREAKPOINT) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <header
      className={`site-header ${isHome ? 'is-home' : 'is-interior'} ${isScrolled ? 'is-scrolled' : ''} ${isHidden ? 'is-hidden' : ''}`}
    >
      <div className="container">
        <Nav
          isOpen={isMenuOpen}
          setIsOpen={setIsMenuOpen}
        />
      </div>
    </header>
  )
}

