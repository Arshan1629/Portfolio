import "../styles/contact.css";
import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_k7lm0po", // your service ID
        "template_nl6qyvj", // your template ID
        formData,
        "QN72-MGaI9Si6M6Pj" // your public key
      )
      .then(() => {
        alert("Message sent successfully!");

        // reset form after submit
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error(error);
        alert("Something went wrong. Please try again.");
      });
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-info">

          <h2 className="contact-title">
            Contact <span>Me!</span>
          </h2>

          <p>
            Feel free to reach out for job opportunities, freelance work,
            collaborations, or any web development related queries.
          </p>

          <div className="contact-item">
            <span>
              <i className="fas fa-phone"></i>
            </span>
            <a href="tel:+917020626233">
              +91 7020626233
            </a>
          </div>

          <div className="contact-item">
            <span>
              <i className="fas fa-envelope"></i>
            </span>
            <a href="mailto:arshanshaikh1629@gmail.com">
              arshanshaikh1629@gmail.com
            </a>
          </div>

          <div className="Follow">
            Follow <span>Me</span>
          </div>

          <div className="social-links">

            <a
              href="https://www.linkedin.com/in/shaikh-arshan-as1629"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>

            <a
              href="https://github.com/Arshan1629"
              target="_blank"
              rel="noreferrer"
              title="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>

            <a
              href="https://www.instagram.com/_arshan_2x"
              target="_blank"
              rel="noreferrer"
              title="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>

            <a
              href="https://wa.me/917020626233"
              target="_blank"
              rel="noreferrer"
              title="Whatsapp"
            >
              <i className="fab fa-whatsapp"></i>
            </a>

          </div>

        </div>


        {/* RIGHT SIDE FORM */}
        <form className="contact-form" onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="text"
            name="phone"
            placeholder="Your Mobile"
            required
            value={formData.phone}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
}

export default Contact;