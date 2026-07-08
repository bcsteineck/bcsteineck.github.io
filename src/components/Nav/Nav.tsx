import './Nav.scss'
import { Menu, X } from 'lucide-react'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

type NavProps = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Nav = ({ isOpen, setIsOpen }: NavProps) => {
  useEffect(() => {
    document.body.classList.toggle('nav-open', isOpen)

    return () => {
      document.body.classList.remove('nav-open')
    }
  }, [isOpen])

  return (
    <nav className="site-nav" aria-label="Main navigation">
      <NavLink
        to="/"
        className="nav-logo"
        onClick={() => setIsOpen(false)}
      >
        Brody Steineck
      </NavLink>

      <button
        className="nav-toggle"
        type="button"
        aria-expanded={isOpen}
        aria-controls="primary-nav"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <ul
        id="primary-nav"
        className={`nav-list ${isOpen ? 'is-open' : ''}`}
      >
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/about"
            onClick={() => setIsOpen(false)}
          >
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/work"
            onClick={() => setIsOpen(false)}
          >
            Work
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/contact"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

  export default Nav

