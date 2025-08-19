import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { contactItems } from "../../../lib/contact";
import { ContactType } from "./types";
import { BsEnvelope, BsGithub, BsLinkedin } from "react-icons/bs";

export default async function Contact() {
  const items = await contactItems();

  return (
    <section className="default-section">
      <section className="contact-container">
        {items?.map((item: ContactType) => (
          <article key={item.sys?.id} className="contact-article">
            <h1 className="contact-title">{item.title}</h1>
            <p className="contact-text">{item.shortText}</p>
            <div>{documentToReactComponents(item.contactInfo.json)}</div>
          </article>
        ))}
        <div className="button-row">
          <a
            href="mailto:sirialicia.gustafsson@gmail.com"
            className="contact-link"
          >
            <BsEnvelope />
            Mail
          </a>
          <p>/</p>
          <a
            href="https://github.com/aliciaosv"
            target="_blank"
            className="contact-link"
          >
            <BsGithub />
            Github
          </a>
          <p>/</p>
          <a
            href="https://www.linkedin.com/in/sirialicia-gustafsson"
            target="_blank"
            className="contact-link"
          >
            <BsLinkedin />
            LinkedIn
          </a>
        </div>
      </section>
    </section>
  );
}
