import { experienceData } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <h2>Experience</h2>

      <div className="timeline">
        {experienceData.map((item) => (
          <div key={item.company} className="timeline-card">
            <h3>{item.role}</h3>
            <h4>{item.company}</h4>
            <p>{item.location}</p>
            <p>{item.duration}</p>
            <ul>
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}