import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, Github, Linkedin, Send } from 'lucide-react';
import { Button } from '@/components/ui/Button.tsx';
import { Input } from './ui/Input.tsx';
import { Textarea } from '@/components/ui/Textarea.tsx';

export const Contact = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <div>
          <h3 className="text-4xl font-heading font-medium mb-6 italic">Get in Touch</h3>
          <p className="text-muted-foreground leading-relaxed font-light tracking-wide">
            Have a project in mind or just want to chat about DevOps and Security? 
            Feel free to reach out through any of these channels.
          </p>
        </div>

        <div className="space-y-4">
          <a href="mailto:nisargamurthybp@gmail.com" className="flex items-center gap-4 p-4 glass rounded-2xl border border-white/5 hover:border-primary/30 transition-all group">
            <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground uppercase tracking-widest">Email</div>
              <div className="text-sm font-medium">nisargamurthybp@gmail.com</div>
            </div>
          </a>
        </div>

        <div className="flex gap-4">
          {[
            { icon: <Github />, href: 'https://github.com/nxshh' },
            { icon: <Linkedin />, href: 'https://linkedin.com/in/nisargamurthy' }
          ].map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 glass rounded-2xl border border-white/5 hover:border-white/20 hover:scale-110 transition-all text-muted-foreground hover:text-white"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="glass p-8 rounded-3xl border border-white/5"
      >
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-muted-foreground ml-1">Name</label>
              <Input placeholder="John Doe" className="bg-white/5 border-white/10 focus:border-primary/50" />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-muted-foreground ml-1">Email</label>
              <Input placeholder="john@example.com" type="email" className="bg-white/5 border-white/10 focus:border-primary/50" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-muted-foreground ml-1">Message</label>
            <Textarea placeholder="How can I help you?" className="bg-white/5 border-white/10 focus:border-primary/50 min-h-[150px]" />
          </div>
          <Button className="w-full bg-primary hover:bg-primary/80 text-white h-12 rounded-xl group">
            Send Message
            <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Button>
        </form>
      </motion.div>
    </div>
  );
};
