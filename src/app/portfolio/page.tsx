import { allPortfolioArticles } from "../../../lib/articles";
import PortfolioPage from "../components/PortfolioPage";

export default async function GetArticles() {
  const initialArticles = await allPortfolioArticles(7);

  if (!initialArticles || initialArticles.length === 0) {
    return <p>No articles found (yet)!</p>;
  }

  return <PortfolioPage initialArticles={initialArticles} />;
}
