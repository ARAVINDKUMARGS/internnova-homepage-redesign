import { benefits, testimonials } from "../data.js";

const StarRating = () => (
  <div className="stars" aria-label="5 out of 5 stars">
    {[...Array(5)].map((_, i) => (
      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#ce9c4c" stroke="#ce9c4c" strokeWidth="1" aria-hidden="true">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ))}
  </div>
);

export default function WhyInternNova() {
  return (
    <section className="section section-alt" id="why" aria-labelledby="why-heading">
      <div className="wrap">
        <div className="section-header">
          <span className="eyebrow">Why InternNova</span>
          <h2 id="why-heading">More than just an internship</h2>
          <p className="intro">
            A structured framework designed to prioritize demonstrable proof of work, practical implementation, and verifiable credentials.
          </p>
        </div>

        <div className="grid-four">
          {benefits.map(({ title, text }) => (
            <article className="card card-feature" key={title}>
              <div className="feature-marker" aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>

        <div className="testimonials-block" id="reviews">
          <div className="section-header text-center">
            <span className="eyebrow">Student Voices</span>
            <h3>Verified Feedback from Past Interns</h3>
            <p className="intro">
              Unedited reviews from students who completed their internship tasks and final evaluations with InternNova.
            </p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map(({ name, role, college, quote }) => (
              <blockquote className="testimonial-card" key={name}>
                <StarRating />
                <p className="quote">"{quote}"</p>
                <footer>
                  <cite className="student-name">{name}</cite>
                  <span className="student-role">{role}</span>
                  <span className="student-college">{college}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
