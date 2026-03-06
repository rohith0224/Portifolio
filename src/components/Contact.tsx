import { contactData } from "../data/portfolioData";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contact</h2>

      <div className="contact-grid">
        <div>
          <p>Email: <a href={`mailto:${contactData.email}`}>{contactData.email}</a></p>
          <p><a href={contactData.github} target="_blank" rel="noreferrer">GitHub</a></p>
          <p><a href={contactData.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></p>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Your name" />
          <input type="email" placeholder="Your email" />
          <textarea placeholder="Your message" rows={5} />
          <button type="submit">Send</button>
          <small>{contactData.formNote}</small>
        </form>
      </div>
    </section>
  );
}