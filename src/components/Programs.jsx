import { programs, proTracks, APPLY_FORM_URL } from "../data.js";

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="4" y1="10" x2="16" y2="10" />
    <polyline points="10 4 16 10 10 16" />
  </svg>
);

const ExternalIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

export default function Programs() {
  return (
    <section className="section" id="programs" aria-labelledby="programs-heading">
      <div className="wrap">
        <div className="section-header">
          <span className="eyebrow">The Curriculum</span>
          <h2 id="programs-heading">Internship Programs</h2>
          <p className="intro">
            Hands-on, 6-week project-based tracks designed to take you from foundational syntax to demonstrable portfolio projects.
          </p>
        </div>

        <div className="grid-programs">
          {programs.map((program) => (
            <article className="card program-card" key={program.code}>
              <div className="card-top">
                <span className="program-code">Domain {program.code}</span>
                <span className="tag">{program.tag}</span>
              </div>

              <h3 className="program-title">{program.title}</h3>
              <p className="program-summary"><strong>Topics:</strong> {program.summary}</p>
              <p className="program-desc">{program.overview}</p>

              <div className="program-cert">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 15l-2 5-1-3-3-1 5-2" />
                  <circle cx="12" cy="8" r="6" />
                </svg>
                <span>{program.cert}</span>
              </div>

              <div className="card-actions">
                <a
                  className="btn btn-primary btn-sm"
                  href={program.applyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Apply for ${program.title} on official Google Form`}
                >
                  Apply Now <ArrowIcon />
                </a>
                <a
                  className="btn btn-outline btn-sm"
                  href={program.pageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${program.title} on official website`}
                >
                  View Track <ExternalIcon />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="pro-tracks-box">
          <div className="pro-tracks-header">
            <div>
              <span className="badge-tag gold">Advanced Cohorts</span>
              <h3>Looking for Mentor-Led Pro Internships?</h3>
              <p>InternNova offers specialized Pro tracks with personalized mentor reviews, mock interviews, and career support.</p>
            </div>
            <a
              className="btn btn-amber"
              href="https://internnova.co.in/premium-tracks"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore Pro Internships <ExternalIcon />
            </a>
          </div>

          <div className="pro-tracks-tags">
            {proTracks.map((track) => (
              <a
                key={track.title}
                href={track.url}
                target="_blank"
                rel="noopener noreferrer"
                className="pro-track-pill"
              >
                <span>{track.title}</span>
                <ExternalIcon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
