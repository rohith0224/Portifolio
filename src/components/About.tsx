import { aboutData } from "../data/portfolioData";

export default function About() {
  return (
    <section id="about" className="section">
      <h2>{aboutData.title}</h2>

      <div className="about-grid">
        {aboutData.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}

        {aboutData.highlights.length > 0 && (
          <div className="about-highlights">
            {aboutData.highlights.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}