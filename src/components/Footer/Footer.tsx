import './Footer.scss'
import { useLocation, NavLink } from 'react-router-dom';

export default function Footer() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <footer className={`site-footer ${isHome ? 'is-home' : 'is-interior'}`}>
      <div className="container">
        <div className="footer-content">

					<div className="footer-logo">
						<NavLink to="/">
							Brody Steineck
						</NavLink>
					</div>

					<nav className="footer-nav" aria-label="Footer">
						<ul className="footer-list">
							<li className="footer-item">
								<NavLink className="footer-link" to="/about">
									About
								</NavLink>
							</li>

							<li className="footer-item">
								<NavLink className="footer-link" to="/work">
									Work
								</NavLink>
							</li>

							<li className="footer-item">
								<NavLink className="footer-link" to="/contact">
									Contact
								</NavLink>
							</li>
						</ul>
					</nav>

					<p className="footer-copyright">
							© {new Date().getFullYear()}
					</p>
        </div>
      </div>
    </footer>
  )
}

