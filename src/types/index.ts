export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  company: string;
  location: string;
  role: string;
  period: string;
  type: string;
  description: string[];
  technologies: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: string; // 'Expert' | 'Senior' | 'Intermediate'
    icon?: string;
  }[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  highlight?: string;
  certificateImage?: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  location: string;
}
