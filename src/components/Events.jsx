import { upcomingEvent } from "../data.js";

const CalendarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const PinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const ExternalIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

export default function Events() {
  return (
    <section className="section section-alt" id="events" aria-labelledby="events-heading">
      <div className="wrap">
        <div className="section-header">
          <span className="eyebrow">Community & Learning</span>
          <h2 id="events-heading">Workshops & Events</h2>
          <p className="intro">
            Live interactive sessions designed to accelerate problem-solving and industry interview readiness.
          </p>
        </div>

        <div className="event-card-wrapper">
          <article className="card event-featured-card">
            <div className="event-header-row">
              <span className="badge-tag green">Live Masterclass</span>
              <span className="event-fee">{upcomingEvent.fee}</span>
            </div>

            <h3 className="event-title">{upcomingEvent.title}</h3>
            <p className="event-description">{upcomingEvent.description}</p>

            <div className="event-meta-grid">
              <div className="event-meta-item">
                <CalendarIcon />
                <span>{upcomingEvent.dateText}</span>
              </div>
              <div className="event-meta-item">
                <PinIcon />
                <span>{upcomingEvent.location}</span>
              </div>
            </div>

            <div className="event-actions">
              <a
                className="btn btn-primary"
                href={upcomingEvent.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Register on Razorpay <ExternalIcon />
              </a>
              <a
                className="btn btn-outline"
                href={upcomingEvent.allEventsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Browse All Events <ExternalIcon />
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
