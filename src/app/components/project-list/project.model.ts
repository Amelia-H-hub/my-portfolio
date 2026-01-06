export interface Project {
  id: number;
  title: string;
  type: 'Work' | 'Personal' | 'Open Source';
  description: string;
  image: string;
  tags: string[];     // used skills or technologies
  githubUrl?: string;
  liveUrl?: string;
}