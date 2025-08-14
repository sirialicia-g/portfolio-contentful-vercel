export interface PortfolioImage {
  url: string;
  width: number;
  height: number;
}

export interface PortfolioArticle {
  id: string;
  sys: { id: string };
  title: string;
  slug: string;
  summary: string;
  date: string;
  portfolioThumbnail?: PortfolioImage;
  techTag: string[];
}
