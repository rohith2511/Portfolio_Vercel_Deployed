
export interface Skill {
  name: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  problem: string;
  solution: string;
  techStack: string[];
  deployment: string;
  githubUrl?: string;
}

export interface Certification {
  name: string;
  status: 'Completed' | 'Planned' | 'Ongoing';
  provider: string;
}
