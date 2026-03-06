import { aboutData } from "../data/portfolioData";

export default function About() {
  return (
    <section id="about" className="section">
      <h2>{aboutData.title}</h2>

      <div className="about-grid">
        <div>
          {aboutData.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="about-highlights">
          {aboutData.highlights.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}