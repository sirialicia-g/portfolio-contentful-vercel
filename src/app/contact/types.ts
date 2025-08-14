import { Document } from "@contentful/rich-text-types";

export interface ContactType {
  sys: { id: string };
  id: string;
  title: string;
  shortText: string;
  contactInfo: {
    json: Document;
  };
}
