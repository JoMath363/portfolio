import { EnvelopeSimpleIcon, GithubLogoIcon, LinkedinLogoIcon, PhoneIcon } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import CubeIcon from "../assets/cube-icon.png"
import contactContent from "../content/contact.json";
import { useState } from "react";

function Contact() {
  const [formValues, setFormValues] = useState({
    email: '',
    subject: '',
    message: '',
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    window.location.href = `mailto:${formValues.email}?subject=${formValues.subject}&body=${formValues.message}`;
  }

  return (
    <section className="flex bg-(--surface) gap-10 px-[clamp(1rem,15dvw,15%)] p-32 text-(--text-primary) flex-col">
      <div className="flex-1 flex flex-col gap-4">
        <h2 className="text-3xl">Contact</h2>

        <p className="flex gap-2 items-center">
          <EnvelopeSimpleIcon size={20} weight="bold" />
          {contactContent?.email || ""}
        </p>
        <p className="flex gap-2 items-center">
          <PhoneIcon size={20} weight="bold" />
          {contactContent?.phone || ""}
        </p>
        <p className="flex gap-2 items-center">
          <LinkedinLogoIcon size={20} weight="bold" />
          {contactContent?.linkedin || ""}
        </p>
        <p className="flex gap-2 items-center">
          <GithubLogoIcon size={20} weight="bold" />
          {contactContent?.github || ""}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-3 bg-(--bg) border border-(--border-color) rounded p-4">
        <h2 className="text-xl">Get in Touch</h2>

        <div className="flex flex-col gap-1">
          <label>Email</label>
          <input
            className="border border-(--border-color) px-2 py-1 rounded hover:border-(--text-primary) focus:outline-0 focus:border-(--text-primary)"
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            placeholder="youremail@domain.com"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label>Subject</label>
          <input
            className="border border-(--border-color) px-2 py-1 rounded hover:border-(--text-primary) focus:outline-0 focus:border-(--text-primary)"
            type="text"
            name="subject"
            value={formValues.subject}
            onChange={handleChange}
            placeholder="Your subject"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label>Message</label>
          <textarea
            className="border border-(--border-color) px-2 py-1 rounded hover:border-(--text-primary) focus:outline-0 focus:border-(--text-primary)"
            type="text"
            name="message"
            value={formValues.message}
            onChange={handleChange}
            placeholder="Your Message"
          />
        </div>

        <button
          className="p-2 bg-(--primary) rounded mt-4 hover:bg-(--primary-shade) cursor-pointer active:bg-(--surface)"
          type="submit"
        >
          Enviar
        </button>
      </form>
    </section>
  )
}

export default Contact;
