import Link from "next/link";
import { get404Items } from "../../lib/notFound";
import { NotFoundType } from "../../lib/types";

export default async function DeadEnd() {
  const items = await get404Items();
  console.log("items: ", items);

  return (
    <section className="default-section">
      <section className="not-found-container">
        {items?.map((item: NotFoundType) => (
          <article key={item.sys.id} className="not-found-article">
            <h1 className="not-found-title">{item.deadEndTitle}</h1>
            <p className="not-found-text">{item.deadEndText}</p>
          </article>
        ))}
        <Link href="/" className="not-found-button">
          Take me back
        </Link>
      </section>
    </section>
  );
}
