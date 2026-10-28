export interface ProjectMedia {
  src: string;
  alt: string;
  type: "image" | "video";
}
export interface Project {
  title: string;
  slug: string;
  category: string;
  summary: string;
  description: string;
  technologies: string[];
  status: "Personal project" | "In development";
  theme: "horror" | "aim" | "farm";
  featuredImage?: ProjectMedia;
  gallery?: ProjectMedia[];
  systems: string[];
  goal: string;
  loop: string[];
  implementation: string;
  developmentNotes: { title: string; body: string }[];
  statusDetail: string;
  sourceUrl?: string;
  playUrl?: string;
  lastUpdated?: string;
}
