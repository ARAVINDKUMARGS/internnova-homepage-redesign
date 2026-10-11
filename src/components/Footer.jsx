import { brandDetails, footerLinks, SITE } from "../data.js";

const MailIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const ExternalIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="footer" aria-label="Site Footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-col brand-col">
            <a className="footer-brand" href="#top">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
              </svg>
              <span>InternNova</span>
            </a>
            <p className="footer-tagline">{brandDetails.tagline}</p>
            <div className="msme-badge">
              <span>MSME Registered Enterprise</span>
              <strong>{brandDetails.msme}</strong>
            </div>
          </div>

          <div className="footer-col">
            <h3 className="footer-heading">Platform</h3>
            <ul className="footer-links">
              {footerLinks.platform.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    {label} <ExternalIcon />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h3 className="footer-heading">Legal</h3>
            <ul className="footer-links">
              {footerLinks.legal.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    {label} <ExternalIcon />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h3 className="footer-heading">Official Contact</h3>
            <ul className="footer-links contact-links">
              <li>
                <a href={`mailto:${brandDetails.email}`}>
                  <MailIcon />
                  <span>{brandDetails.email}</span>
                </a>
              </li>
              <li>
                <a href={`tel:${brandDetails.phone.replace(/\s+/g, '')}`}>
                  <PhoneIcon />
                  <span>{brandDetails.phone}</span>
                </a>
              </li>
              <li>
                <a href={brandDetails.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <span>Chat on WhatsApp</span> <ExternalIcon />
                </a>
              </li>
            </ul>

            <div className="social-links-row" aria-label="Official Social Profiles">
              {footerLinks.socials.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  aria-label={label}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="disclaimer">
            <strong>Notice</strong>: This is an independent student redesign of{" "}
            <a href={SITE} target="_blank" rel="noopener noreferrer">
              internnova.co.in
            </a>{" "}
            created by <strong>Aravind Kumar GS</strong> for a Web Development internship project. It is not affiliated with, authorized, or approved by InternNova.
          </p>
          <div className="footer-credits">
            <span>© {new Date().getFullYear()} InternNova Redesign Project</span>
            <div className="credit-links">
              <a href="https://github.com/ARAVINDKUMARGS" target="_blank" rel="noopener noreferrer">GitHub</a>
              <span aria-hidden="true">·</span>
              <a href="https://aravindkumar-portfolio.vercel.app" target="_blank" rel="noopener noreferrer">Portfolio</a>
              <span aria-hidden="true">·</span>
              <a href={SITE} target="_blank" rel="noopener noreferrer">Official Site</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
