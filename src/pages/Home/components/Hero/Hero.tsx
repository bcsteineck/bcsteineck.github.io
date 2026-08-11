import { Button } from '../../../../components'
import './Hero.scss'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-dots" aria-hidden="true" />
      <div className="container">
        <div className="hero-content">
            <h1 className="hero-title">
                {/* <span className="hero-sup">Minnesota-based</span> */}
                <span className="hero-highlight">Design<br className="hero-break" /> Engineer</span>
                <span className="hero-sub">Web Design + Frontend</span>
            </h1>
        </div>
        <div className="hero-cta">
            <Button to="/about">Get to know Brody<ArrowRight /></Button>
        </div>
      </div>
      <div className="hero-subtitle">
        <p>
            Thoughtfully crafted interfaces where design, usability, and code work together.
        </p>
      </div>
    </section>
  )
}

export default Hero