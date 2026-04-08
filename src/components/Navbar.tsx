import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Terminal as TerminalIcon } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
];

interface NavbarProps {
  onDownloadResume: () => void;
}

export const Navbar = ({ onDownloadResume }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'}`}>
      <div className="container mx-auto px-6">
        <div className={`glass rounded-2xl border border-white/5 px-6 py-3 flex items-center justify-between transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-xl' : 'bg-transparent'}`}>
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center group-hover:rotate-12 transition-transform">
              <TerminalIcon className="w-5 h-5 text-white" />
            </div>
            <span className="font-heading font-bold text-xl tracking-tight">Nisarga<span className="text-primary">.</span></span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <button 
              onClick={onDownloadResume}
              className="px-5 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-medium hover:bg-white/10 transition-all"
            >
              Resume
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 px-6 py-4 md:hidden"
          >
            <div className="glass rounded-2xl border border-white/5 p-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-white/10">
                <button 
                  onClick={() => {
                    onDownloadResume();
                    setIsMobileMenuOpen(false);
                  }}
                  className="block w-full py-3 rounded-xl bg-primary text-center font-medium"
                >
                  Download Resume
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
