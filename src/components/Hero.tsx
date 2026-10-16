import { heroData } from "../data/portfolioData";
import InteractiveBackground from "./InteractiveBackground";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-layout">
        <InteractiveBackground variant="hero" />
        <div className="hero-content">
          <p className="hero-role">{heroData.role}</p>
          <h1>
            {heroData.firstName} <span>{heroData.lastName}</span>
          </h1>
          <p className="hero-headline">{heroData.headline}</p>

          <div className="hero-buttons">
            <a href={`#${heroData.primaryCta.target}`}>{heroData.primaryCta.label}</a>
            <a href={heroData.secondaryCta.href} target="_blank" rel="noreferrer">
              {heroData.secondaryCta.label}
            </a>
            <a href={heroData.tertiaryCta.href} target="_blank" rel="noreferrer">
              {heroData.tertiaryCta.label}
            </a>
          </div>

          <div className="hero-stats">
            {heroData.stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <span>{stat.label}</span>
                <strong>{stat.value}</strong>
              </div>
            ))}
          </div>
        </div>

        <aside className="hero-impact" aria-label="Selected career impact">
          <div className="impact-topline">
            <span className="impact-indicator" />
            <span>Selected impact</span>
            <span className="impact-period">DATA → DECISIONS</span>
          </div>
          <div className="impact-chart" aria-hidden="true">
            <span className="chart-grid chart-grid-one" />
            <span className="chart-grid chart-grid-two" />
            <svg viewBox="0 0 420 112" preserveAspectRatio="none">
              <defs>
                <linearGradient id="impactFill" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#a3f3c4" stopOpacity="0.28" />
                  <stop offset="100%" stopColor="#a3f3c4" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path className="chart-area" d="M0 91 C36 87 39 73 74 77 S119 87 148 62 S192 72 224 48 S274 63 305 34 S364 43 420 10 V112 H0 Z" />
              <path className="chart-line" d="M0 91 C36 87 39 73 74 77 S119 87 148 62 S192 72 224 48 S274 63 305 34 S364 43 420 10" />
              <circle cx="305" cy="34" r="4" />
              <circle cx="420" cy="10" r="5" />
            </svg>
          </div>
          <div className="impact-metrics">
            <div>
              <strong>$3.2M</strong>
              <span>quarterly inventory savings</span>
            </div>
            <div>
              <strong>14M+</strong>
              <span>transactions modeled</span>
            </div>
            <div>
              <strong>4.7M</strong>
              <span>healthcare member records analyzed</span>
            </div>
          </div>
          <p className="impact-footnote">Outcomes from analytics, machine learning &amp; production delivery</p>
        </aside>
      </div>
    </section>
  );
}