import React from 'react';
import { motion } from 'motion/react';
import { Award } from 'lucide-react';

const certs = [
  {
    name: 'Cisco CCST (Cybersecurity)',
    issuer: 'Cisco',
    date: '2024'
  },
  {
    name: 'EC-Council Digital Forensics',
    issuer: 'EC-Council',
    date: '2023'
  },
  {
    name: 'Pearson IT Specialist (Network Security)',
    issuer: 'Pearson',
    date: '2023'
  },
  {
    name: 'AWS DevOps Engineer',
    issuer: 'Amazon Web Services',
    date: 'In Progress'
  }
];

export const Certifications = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {certs.map((cert, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: idx * 0.1 }}
          viewport={{ once: true }}
          className="glass p-5 rounded-xl border border-white/5 flex flex-col gap-3 hover:bg-white/10 transition-colors"
        >
          <Award className="w-8 h-8 text-primary opacity-40 mb-2" />
          <div>
            <h4 className="font-heading italic text-lg leading-tight mb-2">{cert.name}</h4>
            <div className="flex justify-between items-center text-[9px] text-muted-foreground uppercase tracking-[0.2em]">
              <span>{cert.issuer}</span>
              <span>{cert.date}</span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
