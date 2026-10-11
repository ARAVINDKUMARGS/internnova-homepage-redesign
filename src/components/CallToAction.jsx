import { SITE, APPLY_FORM_URL } from "../data.js";

const ArrowIcon = () => (
  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="4" y1="10" x2="16" y2="10" />
    <polyline points="10 4 16 10 10 16" />
  </svg>
);

const ExternalIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

export default function CallToAction() {
  return (
    <section className="cta-banner" aria-labelledby="cta-heading">
      <div className="wrap cta-content">
        <h2 id="cta-heading" className="cta-title">Ready to launch your technical portfolio?</h2>
        <p className="cta-lead">
          Applications for upcoming cohorts are processed directly through InternNova's official application form.
        </p>

        <div className="cta-buttons">
          <a
            className="btn btn-primary btn-lg"
            href={APPLY_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Apply for Upcoming Cohort <ArrowIcon />
          </a>
          <a
            className="btn btn-ghost btn-lg"
            href={SITE}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Official Website <ExternalIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
