import { heroData } from "../data/portfolioData";

export default function Hero() {
  return (
    <section id="home" className="hero">
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
    </section>
  );
}