import { steps } from "../data.js";

export default function HowItWorks() {
  return (
    <section className="section" id="how" aria-labelledby="how-heading">
      <div className="wrap">
        <div className="section-header">
          <span className="eyebrow">The Process</span>
          <h2 id="how-heading">How It Works</h2>
          <p className="intro">
            A 4-stage journey structured to ensure transparent milestone delivery and portfolio building.
          </p>
        </div>

        <ol className="process-timeline">
          {steps.map(({ step, title, text }) => (
            <li className="process-step" key={step}>
              <div className="step-badge" aria-hidden="true">
                {step}
              </div>
              <div className="step-content">
                <h3 className="step-title">{title}</h3>
                <p className="step-desc">{text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
