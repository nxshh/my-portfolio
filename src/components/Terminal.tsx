import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export const Terminal = () => {
  const [text, setText] = useState('');
  const fullText = '$ whoami\n> DevOps Engineer | Cybersecurity Researcher\n$ status\n> Automating chaos. Securing the overlooked.\n$ location\n> Reva University, India\n$ contact\n> nisargamurthybp@gmail.com';
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto font-mono text-sm md:text-base glass rounded-lg overflow-hidden shadow-2xl border border-white/10">
      <div className="bg-white/10 px-4 py-2 flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500/50" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
        <div className="w-3 h-3 rounded-full bg-green-500/50" />
        <span className="ml-2 text-xs text-white/40">bash — nisarga@murthy</span>
      </div>
      <div className="p-6 min-h-[200px] whitespace-pre-wrap">
        <span className="text-accent">{text}</span>
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="inline-block w-2 h-5 bg-accent ml-1 align-middle"
        />
      </div>
    </div>
  );
};
