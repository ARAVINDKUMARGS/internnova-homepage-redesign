import { stats, brandDetails } from "../data.js";

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="4 10.5 8 14.5 16 5.5" />
  </svg>
);

const pathItems = [
  "Formal offer letter included",
  "Real-world hands-on project work",
  "Mentorship and guidance from industry experts",
  "Final evaluation and code review",
  "Verified certificate with unique ID & recommendation letter",
];

export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="wrap">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="badge-pill">
              <span className="badge-dot" aria-hidden="true" />
              <span>{brandDetails.cohortNotice}</span>
            </div>

            <h1 id="hero-title" className="hero-title">
              {brandDetails.tagline}
            </h1>

            <p className="lead">
              InternNova runs structured 6-week virtual internships across Web Development, AI, Data Analytics, and Core Engineering. Learn by building real projects, gain mentorship, and earn verified credentials.
            </p>

            <div className="actions">
              <a className="btn btn-primary" href="#programs">
                Explore Programs
              </a>
              <a className="btn btn-ghost" href="#how">
                See How It Works
              </a>
            </div>

            <p className="hero-disclaimer">
              Independent student redesign. Program terms, intake dates, and evaluation policies reflect the verified public offerings of InternNova.
            </p>
          </div>

          <aside className="path-card" aria-label="Internship roadmap and deliverables">
            <div className="path-card-header">
              <span className="eyebrow-tag">Standard Curriculum</span>
              <h2>Your Internship Path</h2>
            </div>
            <ul className="path-list">
              {pathItems.map((item) => (
                <li key={item}>
                  <span className="icon-check"><CheckIcon /></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="path-card-footer">
              <span>Verification portal available on the official InternNova website.</span>
            </div>
          </aside>
        </div>

        <div className="stats-strip" aria-label="InternNova key metrics">
          {stats.map(({ value, label }) => (
            <div className="stat-item" key={label}>
              <span className="stat-number">{value}</span>
              <span className="stat-label">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
