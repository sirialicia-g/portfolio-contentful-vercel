import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import { homeItems } from "../../lib/home";
import { HomeType } from "../../lib/types";
import DeadEnd from "./not-found";
import { MdOutlineFileDownload } from "react-icons/md";
import { BsGithub } from "react-icons/bs";

export default async function Home() {
  const items = await homeItems();

  if (!items) {
    return <DeadEnd />;
  }
  return (
    <section>
      {items?.map((item: HomeType) => (
        <article key={item.sys.id} className="default-section">
          <div className="home-text">
            <h1 className="contact-title">{item.homeTitle}</h1>
            <div>{documentToReactComponents(item.homeInfo.json)}</div>
            <div className="home-button-row">
              <a href="/Alicia_CV.pdf" download className="contact-link">
                <MdOutlineFileDownload />
                Mitt CV
              </a>
              <p>/</p>
              <a
                href="https://github.com/sirialicia-g"
                target="_blank"
                className="contact-link"
              >
                <BsGithub />
                Min Github
              </a>
            </div>
          </div>
          {item.homeThumbnail ? (
            <Image
              alt="Home Image"
              className="home-image"
              src={item.homeThumbnail?.url}
              width={item.homeThumbnail?.width}
              height={item.homeThumbnail?.height}
            />
          ) : (
            <div>Placeholder här</div>
          )}
        </article>
      ))}
    </section>
  );
}
