import React from 'react';
import { motion } from 'motion/react';

const experiences = [
  {
    company: 'Elevate Labs',
    role: 'DevOps Intern',
    period: 'Present',
    description: 'Reduced provisioning time from 2 hrs to <10 mins. Built CI/CD pipelines and Kubernetes orchestration for zero-downtime deployments.',
    accent: 'bg-primary'
  },
  {
    company: 'Basshub Locateus Pvt Ltd',
    role: 'DevOps Engineer',
    period: 'Previous',
    description: 'Reduced deployment time from 40 mins to <5 mins using AWS infra (EC2, S3, IAM). Secured APIs with JWT, RBAC, and OWASP standards.',
    accent: 'bg-accent'
  },
  {
    company: 'Verzeo',
    role: 'Cybersecurity Analyst',
    period: 'Previous',
    description: 'Performed penetration testing and found 8 critical vulnerabilities. Conducted network analysis using Wireshark.',
    accent: 'bg-destructive'
  }
];

export const Experience = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const itemReverse = {
    hidden: { opacity: 0, x: 20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent"
    >
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          variants={index % 2 === 0 ? item : itemReverse}
          className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
        >
          {/* Icon */}
          <div className={`flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 group-hover:border-primary/50 transition-colors`}>
             <div className={`w-2 h-2 rounded-full ${exp.accent} animate-pulse`} />
          </div>
          {/* Card */}
          <motion.div 
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            className="w-[calc(100%-4rem)] md:w-[45%] glass p-6 rounded-xl border border-white/10 hover:border-primary/50 hover:bg-white/[0.03] transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="font-heading italic text-xl text-white">{exp.company}</div>
              <time className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60">{exp.period}</time>
            </div>
            <div className="text-primary font-light tracking-wide mb-3">{exp.role}</div>
            <div className="text-sm text-muted-foreground leading-relaxed font-light">
              {exp.description}
            </div>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
};
