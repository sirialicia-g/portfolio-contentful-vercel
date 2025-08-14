import { Document } from "@contentful/rich-text-types";

export interface HomeImage {
  url: string;
  width: number;
  height: number;
}

export interface HomeType {
  sys: { id: string };
  id: string;
  homeTitle: string;
  homeInfo: {
    json: Document;
  };
  homeThumbnail: HomeImage;
}

export interface NotFoundType {
  sys: { id: string };
  id: string;
  deadEndTitle: string;
  deadEndText: string;
}
