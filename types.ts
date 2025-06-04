
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  imageUrl: string;
  technologies: string[];
  projectUrl?: string;
  repoUrl?: string;
  date: string;
}

export interface IconProps {
  className?: string;
}
