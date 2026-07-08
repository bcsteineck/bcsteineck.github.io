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
              I'm a Minnesota-based frontend developer with a design background
              and more than 13 years of experience. Most of those years were spent 
              building digital products at
              Dow Jones, primarily across MarketWatch and Barron's. My work has
              always lived at the intersection of design and engineering, where
              the small details matter: layout, typography, accessibility,
              performance, responsiveness, and the overall feel of the final
              experience.
            </p>

            <p>
              I'm especially drawn to UI-focused frontend work because I enjoy
              taking ideas from concept to polished implementation. I like
              collaborating closely with designers, understanding the intent
              behind a design, and translating it into interfaces that are clean,
              maintainable, and enjoyable to use.
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
            I believe great frontend development is about more than matching a
            design file. It's about understanding the user experience and making
            thoughtful implementation decisions.
          </p>

          <p>
            I enjoy building interfaces that are accessible, responsive, and
            performance-minded from the start. Whether I'm creating reusable
            components, refining layouts, or improving user flows, I try to
            bring both a designer's eye and an engineer's mindset to every
            project.
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