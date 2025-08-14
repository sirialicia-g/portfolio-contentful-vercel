"use client";
import { useState, useEffect } from "react";
import { PortfolioArticle } from "../portfolio/types";

interface Props {
  articles: PortfolioArticle[];
  changedFilter: (filteredArticles: PortfolioArticle[]) => void;
}

export default function TagFilter({ articles, changedFilter }: Props) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Flatmap maps out all element in an array, and then flattens it into a single array, and through Set we can remove duplicates. Followed the documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap
  const allTags = [...new Set(articles.flatMap((article) => article.techTag))];

  // passes tag as argument and updates the state with previous cosen tags, if the tag is already chosen it will be removed.
  const tagClick = (tag: string) => {
    setSelectedTags((oldTag) =>
      oldTag.includes(tag) ? oldTag.filter((t) => t !== tag) : [...oldTag, tag],
    );
  };

  useEffect(() => {
    if (selectedTags.length === 0) {
      changedFilter(articles);
    } else {
      changedFilter(
        articles.filter((article) =>
          article.techTag.some((tag) => selectedTags.includes(tag)),
        ),
      );
    }
  }, [selectedTags, articles, changedFilter]);

  return (
    <div className="tech-tags">
      {allTags.map((tag, i) => (
        <span
          key={i}
          className={`tag ${selectedTags.includes(tag) ? "selected" : ""}`}
          onClick={() => tagClick(tag)}
        >
          {tag}
        </span>
      ))}
      <button className="filter-button" onClick={() => setSelectedTags([])}>
        Rensa filter
      </button>
    </div>
  );
}
