// import { ArrowRight } from "lucide-react";
import { ArrowRight, ExternalLink, FileDown } from "lucide-react";
import { Button } from "../../components";
import "./Work.scss";
import { dj384, dj768, sb384, se384, se768, wlv384, resume } from '../../assets/images'

export default function Work() {
  return (
    <section className="page">
      <div className="container">
          <header className="page-header">
            <h1 className="page-title">Work</h1>
          </header>

          <header className="section-header">
            <h2 className="lead-title">Professional Experience</h2>

            <p className="lead">
              Over the past 13+ years I've helped build products used by millions,
              collaborated with small businesses, and designed experiences
              across web, branding, and print.
            </p>
          </header>

          <hr />
          
          <section className="work-section">
            {/* Dow Jones */}
            <article className="experience">
              <header className="experience-header">
                <h3 className="section-title">Dow Jones</h3>

                <div className="experience-details">
                  <p className="experience-role">
                    Senior Frontend Developer
                  </p>

                  <p className="experience-dates">
                    <time dateTime="2017-12">December 2017</time>
                    {' — '}
                    <time dateTime="2026-07">July 2026</time>
                  </p>

                </div>
              </header>
              <div className="experience-module">
                <div className="experience-module-img">
                  <figure>
                    <img
                      src={dj384}
                      srcSet={`${dj384} 384w, ${dj768} 768w`}
                      sizes="(max-width: 768px) 100vw, 768px"
                      alt="Dow Jones - MarketWatch and Barron's logo"
                    />
                  </figure>
                </div>
                <div className="experience-module-text">
                  <p>
                    For more than eight years, I helped build and maintain digital experiences across Dow Jones, 
                    with the majority of my work focused on MarketWatch and additional contributions to Barron's. 
                    Working on products used by millions of readers meant every detail mattered from performance 
                    and accessibility to responsive layouts and polished user interactions.
                  </p>
                  <p>
                    My role centered on bringing designs to life through clean, maintainable frontend code. 
                    I collaborated closely with designers, product managers, and engineers to translate concepts 
                    from Figma into production-ready interfaces while maintaining a high standard of quality and 
                    consistency. Along the way, I contributed to shared React component libraries, improved 
                    accessibility across the platform, and helped evolve the frontend experience through thoughtful 
                    implementation and continual refinement.
                  </p>

                  <ul className="tag-list" aria-label="Dow Jones expertise">
                    <li>React</li>
                    <li>TypeScript</li>
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Storybook</li>
                    <li>Accessibility</li>
                    <li>Performance</li>
                    <li>Figma</li>
                    <li>SEO</li>
                    <li>Responsive Design</li>
                    <li>Design Systems</li>
                  </ul>

                  <div className="experience-module-buttons">
                    <Button href="https://www.dowjones.com" target="_blank" rel="noopener noreferrer">
                      Visit Dow Jones <ExternalLink size={20} />
                    </Button>
                    <Button href="https://www.marketwatch.com" target="_blank" rel="noopener noreferrer">
                      Visit MarketWatch <ExternalLink size={20} />
                    </Button>
                    <Button href="https://www.barrons.com" target="_blank" rel="noopener noreferrer">
                      Visit Barron's <ExternalLink size={20} />
                    </Button>
                  </div>
                  
                </div>
              </div>
            </article>

            <hr />

            {/* SportsEngine */}
            <article className="experience">
              <header className="experience-header">
                <h3 className="section-title">SportsEngine</h3>

                <div className="experience-details">
                  <p className="experience-role">
                    Senior Frontend Web Designer
                  </p>

                  <p className="experience-dates">
                    <time dateTime="2017-12">December 2013</time>
                    {' — '}
                    <time dateTime="2026-07">December 2017</time>
                  </p>
                </div>
              </header>
              <div className="experience-module">
                <div className="experience-module-img">
                  <figure>
                    <img
                      src={se384}
                      srcSet={`${se384} 384w, ${se768} 768w`}
                      sizes="(max-width: 768px) 100vw, 768px"
                      alt="SportsEngine"
                    />
                  </figure>
                </div>
                <div className="experience-module-text">
                  <p>
                    SportsEngine is where I developed the foundation of my career as a frontend
                    developer. Working across a wide variety of client projects, I designed and
                    built responsive websites that balanced visual design, usability, and
                    performance while translating wireframes and mockups into polished,
                    production-ready experiences.
                  </p>

                  <p>
                    Beyond implementation, I collaborated with clients throughout the project
                    lifecycle, contributing to discovery, project scoping, and design
                    discussions. The variety of projects challenged me to adapt quickly,
                    maintain strong attention to detail, and build interfaces that met both
                    business goals and user needs.
                  </p>

                  <ul className="tag-list" aria-label="SportsEngine expertise">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Responsive Design</li>
                    <li>UI Development</li>
                    <li>Visual Design</li>
                    <li>Adobe Creative Suite</li>
                    <li>Client Collaboration</li>
                    <li>Project Discovery</li>
                  </ul>
                  <Button href="https://www.sportsengine.com" target="_blank" rel="noopener noreferrer">
                    Visit SportsEngine <ExternalLink size={20} />
                  </Button>
                </div>
              </div>
            </article>
          </section>

          <hr />

          <section className="work-section">
            <header className="section-header">
              <h2 >Client Work</h2>

              <p>
                A selection of freelance projects spanning product design,
                branding, print, and visual identity.
              </p>
            </header>

            <div className="client-work-grid">
              <article className="client-work-card">
                <figure className="client-work-img">
                  <img
                    src={sb384}
                    alt="SparkBird app design"
                  />
                </figure>

                <div className="client-work-content">
                  <h3>SparkBird</h3>

                  <p>
                    Designed a birdwatching app focused on discovery,
                    identification, and a cleaner experience for bird enthusiasts.
                  </p>

                  <ul className="tag-list" aria-label="SparkBird expertise">
                    <li>Product Design</li>
                    <li>UI Design</li>
                    <li>App Design</li>
                  </ul>
                </div>
              </article>

              <article className="client-work-card">
                <figure className="client-work-img">
                  <img
                    src={wlv384}
                    alt="Wooden Link Vineyard wine label design"
                  />
                </figure>

                <div className="client-work-content">
                  <h3>Wooden Link Vineyard</h3>

                  <p>
                    Designed wine labels that balanced brand character, shelf presence,
                    and a polished visual system across the product line.
                  </p>

                  <ul className="tag-list" aria-label="Wooden Link Vineyard expertise">
                    <li>Label Design</li>
                    <li>Branding</li>
                    <li>Print Design</li>
                  </ul>
                </div>
              </article>
            </div>

          </section>

          <hr />

          <section className="work-next">
            <div className="work-next-content">
              <header className="section-header">
                <h2 className="section-title">Résumé</h2>
              </header>

              <p>
                Looking for the traditional version?
              </p>

              <Button href={resume} download>
                Download Résumé
                <FileDown />
              </Button>
            </div>

            <div className="work-next-content">
              <h2 className="section-title">Contact</h2>

              <p>
                Interested in working together?
              </p>

              <Button to="/contact">Let's Connect <ArrowRight /></Button>
            </div>

          </section>
        
      </div>
    </section>
  )
}