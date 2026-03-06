import { researchData } from "../data/portfolioData";

export default function Research() {
  return (
    <section id="research" className="section">
      <h2>Research</h2>

      <div className="research-card">
        <h3>{researchData.title}</h3>
        <p>
          {researchData.publisher}
          {researchData.conference ? ` • ${researchData.conference}` : ""}
        </p>
        <p>{researchData.description}</p>

        <ul>
          {researchData.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>

        <a href={researchData.link} target="_blank" rel="noreferrer">
          View Publication
        </a>
      </div>
    </section>
  );
}