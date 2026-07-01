import { EnvelopeSimpleIcon, GithubLogoIcon, LinkedinLogoIcon, PhoneIcon } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import CubeIcon from "../assets/cube-icon.png"
import contactContent from "../content/contact.json";

function Contact() {

  return (
    <section className="flex bg-(--surface) gap-4 px-[clamp(1rem,15dvw,15%)] p-32 text-(--text-primary)">
        <div className="flex-1 flex flex-col gap-4 py-8">
          <h2 className="text-3xl">About Me</h2>

          <p className="flex gap-2 items-center"> 
            <EnvelopeSimpleIcon size={20} weight="bold"/> 
            {contactContent?.email || ""}
          </p>
          <p className="flex gap-2 items-center"> 
            <PhoneIcon size={20} weight="bold"/> 
            {contactContent?.phone || ""}
          </p>
          <p className="flex gap-2 items-center"> 
            <LinkedinLogoIcon size={20} weight="bold"/> 
            {contactContent?.linkedin || ""}
          </p>
          <p className="flex gap-2 items-center"> 
            <GithubLogoIcon size={20} weight="bold"/> 
            {contactContent?.github || ""}
          </p>
        </div>

        <div className="flex-1 border border-(--border-color) rounded ">
          
        </div>
    </section>
  )
}

export default Contact;
