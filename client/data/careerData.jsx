import React from "react";
import {
  Code,
  Shield,
  Globe,
  HeartPulse,
  Briefcase,
  Palette,
  Wrench,
  GraduationCap,
  Scale,
} from "lucide-react";

export const careerData = {
  technology: {
    id: "technology",
    title: "Technology",
    description:
      "Explore careers in the fast-paced world of technology and digital innovation.",
    icon: <Code className="h-6 w-6 text-blue-500" />,
    color: "blue",
    subCareers: [
      {
        id: "cybersecurity",
        title: "Cybersecurity",
        description: "Protect digital assets and information systems from threats and vulnerabilities.",
        icon: <Shield className="h-5 w-5 text-blue-500" />,
        skills: ["Network Security", "Ethical Hacking", "Risk Assessment", "Security Protocols", "Incident Response"],
        salary: "$85K - $160K",
        growth: "High",
        path: "/explore/technology/cybersecurity",
        details: {
          responsibilities: [
            "Implement security measures to protect computer systems, networks, and data",
            "Monitor systems for security breaches and investigate violations",
            "Conduct penetration testing to identify vulnerabilities",
            "Develop security standards and best practices",
            "Respond to security incidents and provide recovery solutions",
          ],
          careerPath: {
            entry: "Security Analysts monitor systems and implement basic security measures under supervision.",
            mid: "Security Engineers design and implement more complex security solutions and lead security assessments.",
            senior:
              "Senior Security Consultants or Architects develop comprehensive security strategies and lead teams.",
            leadership:
              "CISO (Chief Information Security Officer) or Security Director roles focus on organizational security strategy.",
          },
          techStack: {
            overview:
              "Cybersecurity professionals use a variety of tools and technologies to protect systems and data from threats.",
            categories: [
              {
                name: "Security Tools",
                tools: [
                  { name: "Wireshark", description: "Network protocol analyzer for monitoring network traffic" },
                  { name: "Metasploit", description: "Penetration testing framework for vulnerability assessment" },
                  { name: "Nmap", description: "Network scanning and security auditing tool" },
                  { name: "Burp Suite", description: "Web application security testing platform" },
                ],
              },
              {
                name: "Programming Languages",
                tools: [
                  { name: "Python", description: "Used for security scripting and automation" },
                  { name: "Bash", description: "Shell scripting for system administration and security tasks" },
                  { name: "PowerShell", description: "Automation and security scripting for Windows environments" },
                ],
              },
              {
                name: "Security Platforms",
                tools: [
                  { name: "SIEM Systems", description: "Security Information and Event Management for monitoring" },
                  { name: "Firewalls", description: "Network security systems that monitor and filter traffic" },
                  { name: "IDS/IPS", description: "Intrusion Detection/Prevention Systems" },
                ],
              },
            ],
            proficiencyLevels: {
              entry: [
                { tool: "Network Security Fundamentals", level: 70 },
                { tool: "Basic Security Tools", level: 60 },
                { tool: "Security Protocols", level: 50 },
              ],
              senior: [
                { tool: "Advanced Threat Detection", level: 90 },
                { tool: "Security Architecture", level: 85 },
                { tool: "Risk Management", level: 80 },
              ],
            },
          },
          gettingStarted: {
            overview:
              "Starting a career in cybersecurity requires a combination of technical knowledge, certifications, and practical experience.",
            steps: [
              {
                title: "Build Technical Foundation",
                description:
                  "Develop a strong understanding of networking, operating systems, and basic programming concepts.",
                tips: [
                  "Start with CompTIA Network+ and Security+ certifications",
                  "Learn Linux and Windows administration",
                  "Practice with virtual labs and CTF (Capture The Flag) competitions",
                ],
              },
              {
                title: "Obtain Relevant Certifications",
                description: "Industry certifications validate your knowledge and skills to potential employers.",
                tips: [
                  "CompTIA Security+ is an excellent entry-level certification",
                  "Consider CISSP, CEH, or OSCP for more advanced roles",
                  "Focus on certifications that align with your career goals",
                ],
              },
              {
                title: "Gain Practical Experience",
                description:
                  "Apply your knowledge in real-world scenarios through internships, projects, or entry-level positions.",
                tips: [
                  "Contribute to open-source security projects",
                  "Set up a home lab to practice security techniques",
                  "Participate in bug bounty programs to find and report vulnerabilities",
                ],
              },
              {
                title: "Specialize in a Security Domain",
                description: "As you advance, focus on a specific area of cybersecurity that interests you.",
                tips: [
                  "Options include network security, application security, cloud security, or security operations",
                  "Join professional communities related to your specialization",
                  "Stay updated with the latest threats and security trends in your domain",
                ],
              },
            ],
          },
          learningRoadmap: {
            overview:
              "This roadmap outlines the key skills and knowledge areas to develop as you progress in your cybersecurity career.",
            stages: [
              {
                title: "Fundamentals",
                description: "Build a strong foundation in networking, operating systems, and basic security concepts.",
                skills: [
                  "Networking fundamentals (TCP/IP, DNS, routing)",
                  "Operating system security (Windows, Linux)",
                  "Basic cryptography concepts",
                  "Security principles and best practices",
                ],
                resources: [
                  "CompTIA Network+ and Security+ study materials",
                  '"Computer Networking: A Top-Down Approach" by Kurose and Ross',
                  "Cybrary.it free cybersecurity courses",
                ],
              },
              {
                title: "Technical Skills Development",
                description: "Develop hands-on skills with security tools and technologies.",
                skills: [
                  "Security tools (Wireshark, Nmap, Metasploit)",
                  "Vulnerability assessment and penetration testing",
                  "Scripting and automation (Python, Bash)",
                  "Log analysis and monitoring",
                ],
                resources: [
                  '"The Hacker Playbook" series by Peter Kim',
                  "TryHackMe and HackTheBox platforms",
                  "SANS courses on specific security domains",
                ],
              },
              {
                title: "Specialization",
                description: "Focus on a specific area of cybersecurity based on your interests and career goals.",
                skills: [
                  "Advanced techniques in your chosen specialization",
                  "Industry-specific security requirements",
                  "Security architecture and design",
                  "Threat intelligence and analysis",
                ],
                resources: [
                  "Specialized certifications (OSCP, CISSP, AWS Security)",
                  "Professional conferences like DEF CON or Black Hat",
                  "Advanced courses on platforms like Pluralsight or Udemy",
                ],
              },
            ],
          },
          resources: {
            overview:
              "These resources will help you learn and master cybersecurity skills at various stages of your career.",
            categories: [
              {
                name: "Books & Publications",
                items: [
                  {
                    title: "The Web Application Hacker's Handbook",
                    description: "Comprehensive guide to finding and exploiting web application vulnerabilities",
                    type: "book",
                  },
                  {
                    title: "Practical Malware Analysis",
                    description: "Techniques for analyzing malicious software",
                    type: "book",
                  },
                  {
                    title: "OWASP Top 10",
                    description: "Standard awareness document for web application security risks",
                    url: "https://owasp.org/www-project-top-ten/",
                    type: "website",
                  },
                ],
              },
              {
                name: "Online Platforms & Courses",
                items: [
                  {
                    title: "TryHackMe",
                    description: "Learn cybersecurity through hands-on exercises and challenges",
                    url: "https://tryhackme.com/",
                    type: "website",
                  },
                  {
                    title: "HackTheBox",
                    description: "Platform for practicing penetration testing skills",
                    url: "https://www.hackthebox.eu/",
                    type: "website",
                  },
                  {
                    title: "SANS Courses",
                    description: "Professional cybersecurity training courses",
                    url: "https://www.sans.org/",
                    type: "course",
                  },
                ],
              },
              {
                name: "Tools & Software",
                items: [
                  {
                    title: "Kali Linux",
                    description: "Security-focused Linux distribution with pre-installed security tools",
                    url: "https://www.kali.org/",
                    type: "tool",
                  },
                  {
                    title: "Burp Suite",
                    description: "Integrated platform for web application security testing",
                    url: "https://portswigger.net/burp",
                    type: "tool",
                  },
                  {
                    title: "Wireshark",
                    description: "Network protocol analyzer for monitoring network traffic",
                    url: "https://www.wireshark.org/",
                    type: "tool",
                  },
                ],
              },
            ],
          },
        },
      },
      {
        id: "web-development",
        title: "Web Development",
        description: "Design and build websites and web applications for businesses and consumers.",
        icon: <Globe className="h-5 w-5 text-blue-500" />,
        skills: ["HTML/CSS", "JavaScript", "React/Angular", "Node.js", "Responsive Design"],
        salary: "$70K - $130K",
        growth: "High",
        path: "/explore/technology/web-development",
        details: {
          responsibilities: [
            "Design and develop responsive websites and web applications",
            "Implement user interfaces using HTML, CSS, and JavaScript",
            "Develop server-side logic and APIs",
            "Optimize applications for performance and scalability",
            "Collaborate with designers, product managers, and other developers",
          ],
          techStack: {
            overview:
              "Web developers use a variety of languages, frameworks, and tools to build modern web applications.",
            categories: [
              {
                name: "Frontend Technologies",
                tools: [
                  { name: "HTML5", description: "Markup language for structuring web content" },
                  { name: "CSS3", description: "Styling language for web design" },
                  { name: "JavaScript", description: "Programming language for interactive web features" },
                  { name: "TypeScript", description: "Typed superset of JavaScript for larger applications" },
                ],
              },
              {
                name: "Frontend Frameworks",
                tools: [
                  { name: "React", description: "JavaScript library for building user interfaces" },
                  { name: "Angular", description: "Platform for building web applications" },
                  { name: "Vue.js", description: "Progressive JavaScript framework for building UIs" },
                ],
              },
              {
                name: "Backend Technologies",
                tools: [
                  { name: "Node.js", description: "JavaScript runtime for server-side development" },
                  { name: "Express", description: "Web application framework for Node.js" },
                  { name: "MongoDB", description: "NoSQL database for modern applications" },
                  { name: "SQL Databases", description: "Relational databases like MySQL, PostgreSQL" },
                ],
              },
              {
                name: "Development Tools",
                tools: [
                  { name: "Git", description: "Version control system" },
                  { name: "VS Code", description: "Popular code editor with extensive plugin ecosystem" },
                  { name: "Webpack", description: "Module bundler for JavaScript applications" },
                  { name: "Chrome DevTools", description: "Web development and debugging tools" },
                ],
              },
            ],
          },
        },
      },
    ],
  },
  healthcare: {
    id: "healthcare",
    title: "Healthcare",
    description:
      "Discover careers in medicine, patient care, and health administration.",
    icon: <HeartPulse className="h-6 w-6 text-green-500" />,
    color: "green",
    subCareers: [],
  },
  business: {
    id: "business",
    title: "Business",
    description:
      "Explore careers in finance, marketing, management, and entrepreneurship.",
    icon: <Briefcase className="h-6 w-6 text-amber-500" />,
    color: "amber",
    subCareers: [],
  },
  creative: {
    id: "creative",
    title: "Creative Arts",
    description:
      "Discover careers in design, media production, writing, and entertainment.",
    icon: <Palette className="h-6 w-6 text-purple-500" />,
    color: "purple",
    subCareers: [],
  },
  engineering: {
    id: "engineering",
    title: "Engineering",
    description:
      "Explore careers in civil, mechanical, electrical, and aerospace engineering.",
    icon: <Wrench className="h-6 w-6 text-emerald-500" />,
    color: "emerald",
    subCareers: [],
  },
  education: {
    id: "education",
    title: "Education",
    description:
      "Discover careers in teaching, educational research, and school administration.",
    icon: <GraduationCap className="h-6 w-6 text-sky-500" />,
    color: "sky",
    subCareers: [],
  },
  legal: {
    id: "legal",
    title: "Legal",
    description:
      "Explore careers in law, legal services, and the justice system.",
    icon: <Scale className="h-6 w-6 text-red-500" />,
    color: "red",
    subCareers: [],
  },
};
