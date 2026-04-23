import type { ElementType } from "react";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiShadcnui,
  SiPhp,
  SiLaravel,
  SiMysql,
  SiGit,
  SiPostman,
  SiFigma,
  SiJira,
} from "react-icons/si";
import pic from "../assets/pic.jpg";

export const profile = {
  name: "Zyrel James S. Frias",
  title: "Full-Stack Developer",
  location: "Magallanes Cavite",
  email: "zyrelfrias00@gmail.com",
  github: "github.com/zyyyyd",
  linkedin: "www.linkedin.com/in/zyrel-james-frias-aa889a269",
  avatar: pic,
  summary:
    "Passionate full-stack developer with experience building scalable web applications. I love turning complex problems into clean, user-friendly solutions.",
};

export type Skill = { name: string; icon: ElementType; color: string };

export const skills: Skill[] = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Shadcn", icon: SiShadcnui, color: "#f3f3f7" },
  { name: "PHP", icon: SiPhp, color: "#777BB4" },
  { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "Jira", icon: SiJira, color: "#0052CC" },
];

export const education = [
  {
    degree: "B.S. Information Technology",
    school: "Rogationist College",
    year: "2020 – 2024",
  },
];

export type Experience = {
  id: number;
  title: string;
  subtitle: string;
  period: string;
  tags: string[];
  bullets: string[];
  links: { label: string; url: string }[];
};

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Junior Web Developer",
    subtitle: "Asiapossible",
    period: "June 2025 – Dec 2025",
    tags: ["PHP", "JS", "Wordpress", "AJAX", "JQuery"],
    bullets: [
      "Built a shortcode + AJAX-driven search system that filters BuddyPress users, groups, forums, jobs, and language with instant results.",
      "Created dynamic user directory filters and custom subnav items using WordPress hooks and URL parameters.",
      "Created dynamic member filtering via location and different attributes of the user.",
    ],
    links: [],
  },
  {
    id: 2,
    title: "Software QA Intern",
    subtitle: "Infor",
    period: "March 2024 – June 2024",
    tags: ["Postman", "Jira", "Manual Testing", "Automation Testing"],
    bullets: [
      "Participated in software testing of web and mobile projects using Manual, Automation and Functional testing in an Agile environment.",
      "Created test cases and reports after QA team reassignment, completing 60% of tasks with minimal supervision.",
      "Wrote 30+ test cases and bug reports using the company's in-house application.",
    ],
    links: [],
  },
];

export type Project = {
  id: number;
  title: string;
  subtitle: string;
  period: string;
  tags: string[];
  brief: string;
  bullets: string[];
  links: { label: string; url: string }[];
  emoji: string;
  gradient: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "MangTask",
    subtitle: "Personal Project",
    period: "2024",
    tags: ["React", "TypeScript", "Tailwind", "Shadcn", "Laravel", "mySQL"],
    brief: "A developer productivity dashboard with task tracking.",
    bullets: [
      "Calendar scheduling with drag-and-drop Kanban board.",
      "Dark/light mode toggle with persistent user preference.",
    ],
    links: [
      { label: "Live Demo", url: "#" },
      { label: "GitHub", url: "#" },
    ],
    emoji: "📊",
    gradient:
      "linear-gradient(135deg, rgba(245,158,11,0.2), rgba(167,139,250,0.2))",
  },
  {
    id: 2,
    title: "FileSend",
    subtitle: "Open Source",
    period: "2023",
    tags: ["React", "Node.js", "S3", "Docker"],
    brief: "Secure peer-to-peer file sharing with end-to-end encryption.",
    bullets: [
      "Client-side AES-256 encryption before upload — server never sees plaintext.",
      "Files auto-delete from S3 after link expiry (configurable 1h–7d).",
      "Dockerized deployment, one-command self-host.",
    ],
    links: [{ label: "GitHub", url: "#" }],
    emoji: "🔒",
    gradient:
      "linear-gradient(135deg, rgba(167,139,250,0.2), rgba(124,58,237,0.2))",
  },
  {
    id: 3,
    title: "UIKit",
    subtitle: "Open Source Library",
    period: "2023",
    tags: ["React", "TypeScript", "Storybook"],
    brief: "A minimal accessible React component library with 20+ components.",
    bullets: [
      "20+ components documented with live Storybook examples.",
      "WCAG 2.1 AA compliant — tested with screen readers.",
      "Tree-shakeable package under 15 kB gzipped.",
    ],
    links: [
      { label: "Docs", url: "#" },
      { label: "npm", url: "#" },
    ],
    emoji: "🎨",
    gradient:
      "linear-gradient(135deg, rgba(124,58,237,0.2), rgba(245,158,11,0.2))",
  },
];
