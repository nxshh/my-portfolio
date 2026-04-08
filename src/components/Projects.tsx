import React from 'react';
import { motion } from 'motion/react';
import { Github, ExternalLink, Server, ShieldCheck } from 'lucide-react';

const projects = [
  {
    title: 'TrippCard OTA',
    description: 'A full-stack travel platform with Amadeus API integration. Dockerized and deployed on AWS with 99% uptime.',
    tech: ['Node.js', 'PostgreSQL', 'Docker', 'AWS', 'Amadeus API'],
    icon: <Server className="w-6 h-6 text-primary" />,
    link: 'https://github.com/nxshh/trippcard-backend',
    hot: true
  },
  {
    title: 'Breaking the Bait',
    description: 'Research on ML-based honeyfile detection. Achieved 94% F1-score using Random Forest and SVM models.',
    tech: ['Python', 'ML', 'Kali Linux', 'Metasploitable 2'],
    icon: <ShieldCheck className="w-6 h-6 text-accent" />,
    link: 'https://github.com/nxshh/ML-based-honeyfile-detection',
    hot: true
  }
];

export const Projects = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: idx * 0.2 }}
          viewport={{ once: true }}
          className="group relative glass rounded-3xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-500"
        >
          {/* Decorative background glow */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 blur-[100px] group-hover:bg-primary/20 transition-all duration-500" />
          
          <div className="p-8 relative z-10">
            <div className="flex items-start justify-between mb-6">
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                {project.icon}
              </div>
              <div className="flex gap-4">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-white transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <h3 className="text-2xl font-heading font-bold mb-3 flex items-center gap-2">
              {project.title}
              {project.hot && <span className="text-[10px] uppercase tracking-widest bg-primary/20 text-primary px-2 py-0.5 rounded-full border border-primary/30">Hot</span>}
            </h3>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span key={i} className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded bg-white/5 border border-white/10 text-white/60">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
