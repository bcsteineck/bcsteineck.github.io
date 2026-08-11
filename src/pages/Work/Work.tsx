// import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { ArrowRight, ExternalLink, FileDown } from "lucide-react";
import { Button, Modal } from "../../components";
import "./Work.scss";
import { dj384, sb384, se384, wlv384, resume, cc384 } from '../../assets/images'
import { workContent, type WorkId } from './workContent'

export default function Work() {
  const [activeWork, setActiveWork] = useState<WorkId | null>(null)
  const activeContent = activeWork ? workContent[activeWork] : null

  return (
    <section className="page">
      <div className="container">
          <header className="page-header">
            <h1 className="page-title">Work</h1>
          </header>

          <header className="work-section-header">
            <h2 className="lead-title">Professional Experience</h2>

            <p className="lead">
              I've helped build products used by millions,
              collaborated with small businesses, and designed experiences
              across web, branding, and print.
            </p>
          </header>

          {/* <hr /> */}

          <div className="work-grid">
              <div className="work-card">
                <header className="work-header">
                  <h3 className="section-title">Dow Jones</h3>
                  <p className="work-role">
                    Senior Frontend Developer
                  </p>
                </header>
                <figure className="work-img">
                  <img
                    src={dj384}
                    alt="Dow Jones - MarketWatch and Barron's logo"
                  />
                </figure>

                <div className="work-content">
                  <Button id="dowjones" className="work-button" onClick={() => setActiveWork('dowjones')}>Learn More</Button>
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
                </div>
              </div>

              <div className="work-card">
                <header className="work-header">
                  <h3 className="section-title">SportsEngine</h3>
                  <p className="work-role">
                    Senior Frontend Web Designer
                  </p>
                </header>
                <figure className="work-img">
                  <img
                    src={se384}
                    alt="SportsEngine - logo"
                  />
                </figure>

                <div className="work-content">
                  <Button id="sportsengine" className="work-button" onClick={() => setActiveWork('sportsengine')}>Learn More</Button>
                  <ul className="tag-list" aria-label="SportsEngine expertise">
                    <li>HTML</li>
                    <li>Responsive Design</li>
                    <li>Visual Design</li>

                    <li>CSS</li>
                    <li>UI Development</li>
                    <li>JavaScript</li>

                    <li>Adobe Creative Suite</li>
                    <li>Client Collaboration</li>
                    <li>Project Discovery</li>
                  </ul>
                </div>
              </div>
            </div>
          <hr />

          <section className="work-section">
            <header className="work-section-header">
              <h2 >Other Work</h2>

              <p>
                A selection of freelance and personal projects spanning product design,
                branding, and print.
              </p>
            </header>

            <div className="work-grid">
              <div className="work-card">
                <header className="work-header">
                  <h3 className="section-title">ClueCross</h3>
                  <p className="work-role">
                    Creator, Designer, and Developer
                  </p>
                </header>
                <figure className="work-img">
                  <img
                    src={cc384}
                    alt="ClueCross"
                  />
                </figure>

                <div className="work-content">
                  <Button id="cluecross" className="work-button" onClick={() => setActiveWork('cluecross')}>Learn More</Button>
                  <ul className="tag-list" aria-label="ClueCross expertise">
                    <li>Product Design</li>
                    <li>UI Design</li>
                    <li>Web Development</li>
                  </ul>
                </div>
              </div>
              <div className="work-card">
                <header className="work-header">
                  <h3 className="section-title">Sparkbird</h3>
                  <p className="work-role">
                    App Designer
                  </p>
                </header>
                <figure className="work-img">
                  <img
                    src={sb384}
                    alt="SparkBird app design"
                  />
                </figure>

                <div className="work-content">
                  <Button id="sparkbird" className="work-button" onClick={() => setActiveWork('sparkbird')}>Learn More</Button>
                  <ul className="tag-list" aria-label="SparkBird expertise">
                    <li>Product Design</li>
                    <li>UI Design</li>
                    <li>App Design</li>
                  </ul>
                </div>
              </div>

              <div className="work-card">
                 <header className="work-header">
                    <h3 className="section-title">Wooden Link Vineyard</h3>
                    <p className="work-role">
                      Graphic Designer
                    </p>
                </header>
                <figure className="work-img">
                  <img
                    src={wlv384}
                    alt="Wooden Link Vineyard wine label design"
                  />
                </figure>

                <div className="work-content">
                  <Button id="wlv" className="work-button" onClick={() => setActiveWork('wlv')}>Learn More</Button>
                  <ul className="tag-list" aria-label="Wooden Link Vineyard expertise">
                    <li>Label Design</li>
                    <li>Branding</li>
                    <li>Print Design</li>
                  </ul>
                </div>
              </div>
            </div>

          </section>

          <hr />

          <section className="work-next">
            <div className="work-next-content">
              <header className="work-header">
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
              <header className="work-header">
                <h2 className="section-title">Contact</h2>
              </header>

              <p>
                Interested in working together?
              </p>

              <Button to="/contact">Let's Connect <ArrowRight /></Button>
            </div>

          </section>
        
      </div>

      <Modal
        isOpen={activeWork !== null}
        onClose={() => setActiveWork(null)}
        title={activeContent?.title ?? ''}
      >
        {activeContent?.media && activeContent.media.length > 0 && (
          <div className="modal-media">
            {activeContent.media.map((item, index) =>
              item.type === 'video' ? (
                <video
                  key={`${item.src}-${index}`}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label={item.alt}
                >
                  <source src={item.src} type="video/mp4" />
                </video>
              ) : (
                <img key={`${item.src}-${index}`} src={item.src} alt={item.alt} />
              )
            )}
          </div>
        )}

        {activeContent?.description?.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}

        {activeContent?.buttons && activeContent.buttons.length > 0 && (
          <div className="modal-buttons">
            {activeContent.buttons.map((button) => (
              <Button
                key={button.label}
                href={button.href}
                to={button.to}
                target={button.target}
                rel={button.rel}
              >
                {button.label}
                <ExternalLink size={16} />
              </Button>
            ))}
          </div>
        )}
      </Modal>
    </section>
  )
}