import ImageCarousel from "@/app/components/ImageCarousel";
import DeadEnd from "@/app/not-found";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import {
  allPortfolioArticles,
  specificArticle,
} from "../../../../lib/articles";
import { PortfolioArticle } from "./types";

export async function generateStaticParams() {
  const allArticles = await allPortfolioArticles();
  return allArticles.map((article: PortfolioArticle | null) => ({
    slug: article?.slug || "",
  }));
}

export default async function PortfolioPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article: PortfolioArticle | null = await specificArticle(slug);

  if (!article) {
    return <DeadEnd />;
  }

  return (
    <article className="portfolio-main">
      <section className="article-section">
        <div>
          <h1 className="article-title">{article.title}</h1>
          <p className="article-summary">{article.summary}</p>
        </div>
        <div>
          <div>
            <div className="article-text">
              {documentToReactComponents(article.details.json)}
              <div className="tech-tags">
                {article.techTag.map((tag, i) => (
                  <span key={i} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="carousel-container">
        <ImageCarousel images={article.portfolioImageCollection?.items || []} />
      </section>
    </article>
  );
}
