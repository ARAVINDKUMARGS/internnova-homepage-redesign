import { faqs } from "../data.js";

export default function FAQ() {
  return (
    <section className="section" id="faq" aria-labelledby="faq-heading">
      <div className="wrap">
        <div className="section-header">
          <span className="eyebrow">Got Questions?</span>
          <h2 id="faq-heading">Frequently Asked Questions</h2>
          <p className="intro">
            Official answers regarding prerequisite expectations, certification verification, and program structure.
          </p>
        </div>

        <div className="faq-container">
          {faqs.map(({ q, a }) => (
            <details className="faq-item" key={q}>
              <summary className="faq-question">
                <span>{q}</span>
              </summary>
              <div className="faq-answer">
                <p>{a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
