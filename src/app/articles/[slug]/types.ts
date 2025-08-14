import { Document } from "@contentful/rich-text-types";
export interface PortfolioImage {
  url: string;
  width: number;
  height: number;
}

export interface PortfolioArticle {
  id: string;
  title: string;
  slug: string;
  summary: string;
  details: {
    json: Document;
    links?: {
      assets: {
        block: Array<{
          sys: { id: string };
          url: string;
          description?: string;
        }>;
      };
    };
  };
  date: string;
  authorName: string;
  categoryName: string;
  portfolioImageCollection?: {
    items: PortfolioImage[];
  };
  techTag: string[];
}
