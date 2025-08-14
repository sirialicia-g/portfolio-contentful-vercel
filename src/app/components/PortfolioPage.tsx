"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
// I'm anticipating the masonry code to be quite bulky in the global file, and not meant to be anywhere else, I wanted to try out a modular way of writing css (since I despise messy and huge css files with all of my heart) I've stumbled across here https://nextjs.org/docs/app/building-your-application/styling
import styles from "../styles/masonry.module.css";
import { PortfolioArticle } from "../portfolio/types";
import TagFilter from "../components/TagFilter";

interface Props {
  initialArticles: PortfolioArticle[];
}

export default function Portfolio({ initialArticles }: Props) {
  const [filteredArticles, setFilteredArticles] =
    useState<PortfolioArticle[]>(initialArticles);

  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1>Projekt</h1>
            <p>
              Många av mina github-repositories är privata, vissa får dock
              chansen att se dagens ljus.
            </p>
          </div>
          <TagFilter
            articles={initialArticles}
            changedFilter={setFilteredArticles}
          />
          <div className={styles.masonry}>
            {filteredArticles.map((article: PortfolioArticle) => (
              <article key={article.sys.id} className={styles.card}>
                {article.portfolioThumbnail ? (
                  <Image
                    alt="Portfolio Thumbnail"
                    src={article.portfolioThumbnail.url}
                    width={article.portfolioThumbnail.width}
                    height={article.portfolioThumbnail.height}
                    className={styles.thumbnail}
                    aria-label="Portfolio Thumbnail"
                  />
                ) : (
                  <div>Ingen bild</div>
                )}
                <div className={styles.overlay}>
                  <Link
                    href={`/articles/${article.slug}`}
                    className={styles.readMore}
                  >
                    <h3 className={styles.title}>{article.title}</h3>
                  </Link>
                  <p className={styles.summary}>{article.summary}</p>
                  <div style={{ textAlign: "right", marginTop: "10px" }}>
                    <Link
                      href={`/articles/${article.slug}`}
                      className={styles.readMore}
                    >
                      Titta in →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
