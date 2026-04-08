/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Download, Rocket } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Terminal } from './components/Terminal';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Button } from './components/ui/button';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shadow-[0_0_20px_rgba(127,90,240,0.5)]">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <span className="font-heading font-bold text-2xl tracking-tighter">Nisarga<span className="text-primary">.</span></span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Effects */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(127,90,240,0.05),transparent_50%)]" />
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <Navbar onDownloadResume={() => setIsResumeModalOpen(true)} />

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-12 px-6 overflow-hidden">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={!isLoading ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-primary mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for new opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={!isLoading ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight mb-6"
            >
              Nisarga <span className="text-primary">Murthy</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={!isLoading ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              DevOps Engineer <span className="mx-2 text-white/20">|</span> Cybersecurity Engineer
              <br />
              <span className="text-foreground font-medium">I automate chaos. I secure what others overlook.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={!isLoading ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/80 text-white rounded-xl px-8 h-14 text-base group" 
                render={
                  <a href="#projects" className="flex items-center">
                    View Projects
                    <Rocket className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                }
              />
              <Button 
                size="lg" 
                variant="outline" 
                className="glass hover:bg-white/10 rounded-xl px-8 h-14 text-base border-white/10"
                onClick={() => setIsResumeModalOpen(true)}
              >
                Download Resume
                <Download className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          >
            <ChevronDown className="w-6 h-6 text-muted-foreground" />
          </motion.div>
        </section>

        <ResumeModal isOpen={isResumeModalOpen} onClose={() => setIsResumeModalOpen(false)} />

        {/* About / Terminal Section */}
        <section id="about" className="py-24 px-6 bg-white/[0.02]">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                  Bridging the gap between <br />
                  <span className="text-primary">Development</span> and <span className="text-accent">Security</span>
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    As an MCA Graduate from Reva University, I've cultivated a hybrid profile that lives at the intersection of DevOps and Cybersecurity.
                  </p>
                  <p>
                    My focus is on <span className="text-foreground font-medium">automation-first engineering</span>, building cloud-native systems that aren't just fast, but inherently secure. I believe that security shouldn't be a bottleneck, but a seamless part of the delivery pipeline.
                  </p>
                  <p>
                    Whether it's orchestrating Kubernetes clusters or conducting deep-dive penetration tests, my goal is always the same: building resilient systems that stand the test of both scale and scrutiny.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Terminal />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Technical Arsenal</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                A comprehensive toolkit built for modern infrastructure and robust security.
              </p>
            </div>
            <Skills />
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 px-6 bg-white/[0.02]">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Professional Journey</h2>
              <p className="text-muted-foreground">
                My path through the industry, focused on optimization and protection.
              </p>
            </div>
            <Experience />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Featured Work</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Real-world applications and research projects that push boundaries.
              </p>
            </div>
            <Projects />
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-24 px-6 bg-white/[0.02]">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Certifications</h2>
              <p className="text-muted-foreground">
                Validated expertise in security and infrastructure.
              </p>
            </div>
            <Certifications />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-6">
          <div className="container mx-auto max-w-6xl">
            <Contact />
          </div>
        </section>
      </main>

      <footer className="py-12 px-6 border-t border-white/5 relative z-10">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-primary flex items-center justify-center">
              <span className="text-[10px] font-bold text-white">N</span>
            </div>
            <span className="font-heading font-bold text-lg">Nisarga Murthy</span>
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Nisarga Murthy.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
