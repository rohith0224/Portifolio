import { educationData } from "../data/portfolioData";

export default function Education() {
  return (
    <section id="education" className="section">
      <h2>Education</h2>

      {educationData.map((item) => (
        <div key={item.institution} className="edu-card">
          <h3>{item.institution}</h3>
          <p>{item.degree}</p>
          <p>{item.duration}</p>
          {item.location && <p>{item.location}</p>}

          {item.coursework && (
            <ul>
              {item.coursework.map((course) => (
                <li key={course}>{course}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </section>
  );
}