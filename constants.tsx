
import React from 'react';
import { 
  Server, 
  Database, 
  Cloud, 
  Settings, 
  Container, 
  Terminal, 
  ShieldCheck, 
  Activity, 
  Code2, 
  GitBranch, 
  Cpu 
} from 'lucide-react';
import { SkillCategory, Project, Certification } from './types';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Cloud Platforms",
    skills: ["AWS (EC2, S3, IAM, Lambda, RDS)", "Azure Fundamentals", "Cloud Architecture", "IAM & Access Control"]
  },
  {
    category: "DevOps & CI/CD",
    skills: ["GitHub Actions", "Jenkins", "GitLab CI/CD", "Pipeline Design", "Artifact Management"]
  },
  {
    category: "Backend Development",
    skills: ["FastAPI", "RESTful APIs", "Environment Config", "Logging & Error Handling", "Service Design"]
  },
  {
    category: "Databases",
    skills: ["SQL", "PostgreSQL", "Schema Design", "CRUD Operations", "Query Optimization"]
  },
  {
    category: "Programming",
    skills: ["Python", "Bash Scripting", "Problem Solving", "Clean Code Practices"]
  },
  {
    category: "Containers",
    skills: ["Docker", "Dockerfile Creation", "Docker Compose", "Kubernetes Basics", "Lifecycle Management"]
  },
  {
    category: "Infrastructure",
    skills: ["Linux (Ubuntu)", "Nginx Reverse Proxy", "SSH & Firewalls", "Service Management", "Bash Scripting"]
  },
  {
    category: "IaC & Automation",
    skills: ["Terraform Basics", "Provisioning Workflow", "Selenium Automation", "Script-based Workflows"]
  },
  {
    category: "Monitoring & Reliability",
    skills: ["Grafana", "App Health Checks", "Logging Fundamentals", "System Metrics"]
  },
  {
    category: "Foundations",
    skills: ["Data Structures & Algorithms", "Git/GitHub", "Branching Strategies", "Problem Solving"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "AI DOWNTIME GUARD | Self-Healing Infrastructure Monitoring System",
    problem: "Traditional monitoring tools only detect issues but require manual intervention, leading to prolonged downtime and delayed response times during critical infrastructure failures.",
    solution: "Built an intelligent monitoring system with rule-based risk scoring and trend analysis that automatically detects, diagnoses, and heals infrastructure issues. Integrated guarded recovery scripts, Prometheus/Grafana visualization, and multi-cloud deployment support with Kubernetes, Docker, and Infrastructure-as-Code.",
    techStack: ["Python", "FastAPI", "Docker", "Kubernetes", "Prometheus", "Grafana", "GitHub Actions", "Terraform", "PostgreSQL", "Redis", "AWS"],
    deployment: "Production-ready with Kubernetes HPA, cloud deployment options (Render, Railway, Fly.io), and EC2 support with automated CI/CD pipelines.",
    githubUrl: "https://github.com/rohith2511/AI_Downtime_System"
  },
  {
    id: "2",
    title: "Smart API Kill-Switch System (AWS Always Free Tier)",
    problem: "Unexpected API traffic spikes can cause throttling issues and cost overruns if no automatic protection is in place.",
    solution: "Built an AWS-native kill-switch that detects abnormal API usage via CloudWatch and auto-updates API Gateway throttling using Lambda. Integrated SNS alerts and DynamoDB state tracking to safely activate and restore normal traffic limits.",
    techStack: ["AWS Lambda", "API Gateway", "DynamoDB", "CloudWatch", "SNS", "IAM", "Python"],
    deployment: "Always Free Tier architecture with alarm-driven protection, auto throttle control, and recovery workflow.",
    githubUrl: "https://github.com/rohith2511/API-Kill-Switch-System"
  },
  {
    id: "3",
    title: "Containerized Microservices Architecture (Ongoing)",
    problem: "Application components (API, Database, Cache) were difficult to scale and manage as separate entities.",
    solution: "Architected a multi-container environment using Docker Compose. Implemented PostgreSQL for persistence and Redis for caching, ensuring seamless inter-service communication via private Docker networking with health monitoring.",
    techStack: ["Docker Compose", "PostgreSQL", "Redis", "FastAPI", "Linux", "Nginx"],
    deployment: "Ongoing: Building a production-ready container stack with volume persistence, health checks, and automatic restart policies."
  },
  {
    id: "4",
    title: "Infrastructure as Code with Terraform (Ongoing)",
    problem: "Provisioning cloud resources manually lacked versioning and reproducibility, making environment management difficult.",
    solution: "Developed Terraform HCL scripts to provision and manage infrastructure following an infrastructure-as-code approach. Implemented modular configurations enabling rapid environment creation, updates, and teardown with state management.",
    techStack: ["Terraform", "Infrastructure as Code", "Git", "Linux", "Bash"],
    deployment: "Ongoing: Expanding version-controlled infrastructure provisioning with reusable modules and automated workflows."
  }
];

export const CERTIFICATIONS: Certification[] = [
  { name: "AWS Cloud Practitioner", status: "Planned", provider: "Amazon Web Services" },
  { name: "Docker & Kubernetes for Beginners", status: "Completed", provider: "Self-Paced / Hands-on" },
  { name: "AWS Solutions Architect Associate", status: "Planned", provider: "Amazon Web Services" },
  { name: "Continuous Hands-on Learning (Linux/Bash)", status: "Ongoing", provider: "Professional Lab" }
];

export const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  "Cloud Platforms": <Cloud className="w-5 h-5" />,
  "DevOps & CI/CD": <Settings className="w-5 h-5" />,
  "Backend Development": <Server className="w-5 h-5" />,
  "Databases": <Database className="w-5 h-5" />,
  "Programming": <Code2 className="w-5 h-5" />,
  "Containers": <Container className="w-5 h-5" />,
  "Infrastructure": <Terminal className="w-5 h-5" />,
  "IaC & Automation": <Cpu className="w-5 h-5" />,
  "Monitoring & Reliability": <Activity className="w-5 h-5" />,
  "Foundations": <GitBranch className="w-5 h-5" />
};
