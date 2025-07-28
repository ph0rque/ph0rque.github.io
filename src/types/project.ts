export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  videoUrl: string;
  videoThumbnail?: string;
  links: {
    live?: string;
    github?: string;
    other?: { label: string; url: string }[];
  };
  featured?: boolean;
  order?: number;
  publishedAt: Date;
}