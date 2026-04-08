import React from 'react';
import { motion } from 'motion/react';
import { Cloud, Shield, Code, Database, Terminal, Settings } from 'lucide-react';

const skillCategories = [
  {
    title: 'DevOps & Cloud',
    icon: <Cloud className="w-5 h-5" />,
    skills: ['Terraform', 'AWS', 'Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'GitLab CI'],
    color: 'text-blue-400'
  },
  {
    title: 'Security',
    icon: <Shield className="w-5 h-5" />,
    skills: ['OWASP Top 10', 'JWT', 'RBAC', 'Kali Linux', 'Metasploit', 'Burp Suite', 'Wireshark'],
    color: 'text-accent'
  },
  {
    title: 'Programming',
    icon: <Code className="w-5 h-5" />,
    skills: ['JavaScript (Node.js)', 'Python', 'Shell Scripting'],
    color: 'text-purple-400'
  },
  {
    title: 'Databases',
    icon: <Database className="w-5 h-5" />,
    skills: ['PostgreSQL', 'MySQL', 'MongoDB'],
    color: 'text-green-400'
  },
  {
    title: 'Tools & Others',
    icon: <Settings className="w-5 h-5" />,
    skills: ['Git', 'Linux', 'VMware', 'Postman', 'Swagger'],
    color: 'text-orange-400'
  }
];

export const Skills = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {skillCategories.map((category, idx) => (
        <motion.div
          key={idx}
          variants={item}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
          className="glass p-6 rounded-2xl border border-white/5 hover:border-primary/30 hover:bg-white/[0.03] transition-all duration-300 group"
        >
          <div className={`flex items-center gap-3 mb-6 ${category.color}`}>
            <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-primary/30 transition-colors">
              {category.icon}
            </div>
            <h3 className="font-heading italic text-xl">{category.title}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill, sIdx) => (
              <span
                key={sIdx}
                className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-muted-foreground group-hover:text-foreground group-hover:border-primary/20 transition-all"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};
