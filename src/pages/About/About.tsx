import { ArrowRight } from 'lucide-react';
import { Button } from '../../components';
import './About.scss';
import { dogs, f1, golf, brody1, brody2, brody3 } from '../../assets/images'

export default function About() {
  return (
    <section className="about page">
      <div className="container primary">

        <header className="page-header">
          <h1 className="page-title">About</h1>
        </header>

        <section className="about-section">
          <div className="about-copy">
            <p>
              I'm a Minnesota-based Design Engineer and Web Designer with more 
              than 13 years of experience creating digital products. Most of that 
              time was spent at Dow Jones, crafting experiences for MarketWatch and 
              Barron's, where I focused on turning complex ideas into intuitive, 
              polished interfaces. My work is driven by the details that shape great 
              user experiences: thoughtful layouts, strong typography, accessibility, 
              responsive design, and a high standard of visual quality.
            </p>

            <p>
              I enjoy taking projects from concept to production—designing the experience, 
              refining interactions, and bringing everything to life in code. My background 
              in frontend development allows me to create designs that aren't just visually 
              compelling, but practical and accessible through implementation.
            </p>

            <p>
              Whether I'm building a design system, prototyping a new feature, or polishing 
              the final interface, my goal is always the same: create products that feel 
              effortless to use and carefully crafted.
            </p>
          </div>
        </section>

        <section className="about-section">
          <div className="about-image-strip" aria-label="Personal photos">
            <figure className="about-image">
              <img src={brody1} alt="Brody and his wife on a sailboat" />
            </figure>

            <figure className="about-image">
              <img src={brody2} alt="Brody with his dog, Freyja" />
            </figure>

            <figure className="about-image">
              <img src={brody3} alt="Brody at the Cliffs of Moher in Ireland" />
            </figure>
          </div>
        </section>

        <section className="about-section">
          <h2 className="section-title">My Approach</h2>

          <p>
            I believe great digital experiences are about more than creating 
            attractive interfaces. They're the result of thoughtful design 
            decisions that balance usability, accessibility, visual clarity, 
            and technical execution.
          </p>

          <p>
            I enjoy designing experiences that feel intuitive, responsive, 
            and refined from the start. Whether I'm shaping a design system, 
            refining layouts and interactions, or bringing a concept to life in code, 
            I strive to create interfaces that are both beautiful and practical. 
          </p>

          <p>
            My background in frontend development helps ensure that every design is 
            not only visually polished but also accessible, maintainable, and ready 
            for the real world.
          </p>
        </section>

        <section className="about-section">
          <h2 className="section-title">Outside of Work</h2>

          <p>
            Outside of work, you'll usually find me spending time with my dogs, travelling with my wife,
            golfing, watching Formula 1, playing games, reading fantasy books, or working on projects
            around the house. I appreciate thoughtful design in all forms, from
            digital products to furniture, architecture, and everyday objects.
          </p>
        </section>

        <section className="about-section">
          <div className="about-image-strip" aria-label="Personal photos">
            <figure className="about-image">
              <img src={dogs} alt="Two dogs, white husky and black lab" />
            </figure>

            <figure className="about-image">
              <img src={f1} alt="Formula 1 cars on track" />
            </figure>

            <figure className="about-image">
              <img src={golf} alt="Brody Golfing" />
            </figure>
          </div>
        </section>

        <hr />

        <section className="about-next">
          <h2 className="section-title">My Work</h2>

          <p>
            Interested in where I've applied this approach to my work? Check out my Work page.
          </p>

          <Button to="/work">Let's go to Work <ArrowRight /></Button>
        </section>

      </div>
    </section>
  );
}