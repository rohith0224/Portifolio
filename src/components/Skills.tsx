import { skillData } from "../data/portfolioData";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2>Skills</h2>

      <div className="skills-groups">
        {skillData.map((group) => (
          <div key={group.title} className="skill-group">
            <h3>{group.title}</h3>
            <div className="skill-tags">
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}