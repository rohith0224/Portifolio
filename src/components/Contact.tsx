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

        <form
          className="contact-form"
          action="https://formspree.io/f/xnjgdzwj"
          method="POST"
        >
          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your email"
            required
          />

          <textarea
            name="message"
            placeholder="Your message"
            rows={5}
            required
          />

          <button type="submit">Send</button>

          <small>{contactData.formNote}</small>
        </form>
      </div>
    </section>
  );
}