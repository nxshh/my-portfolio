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
  return (
    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
        >
          {/* Icon */}
          <div className={`flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10`}>
             <div className={`w-2 h-2 rounded-full ${exp.accent} animate-pulse`} />
          </div>
          {/* Card */}
          <div className="w-[calc(100%-4rem)] md:w-[45%] glass p-6 rounded-xl border border-white/10 hover:border-primary/50 transition-colors duration-300">
            <div className="flex items-center justify-between mb-1">
              <div className="font-bold text-white">{exp.company}</div>
              <time className="font-mono text-xs text-muted-foreground">{exp.period}</time>
            </div>
            <div className="text-primary font-medium mb-2">{exp.role}</div>
            <div className="text-sm text-muted-foreground leading-relaxed">
              {exp.description}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
