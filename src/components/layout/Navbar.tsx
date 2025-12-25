import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import logo from '@/assets/logo.png';

const navItems = [
  { name: 'Početna', path: '/' },
  { name: 'O nama', path: '/o-nama' },
  { name: 'Usluge', path: '/usluge' },
  { name: 'Kontakt', path: '/kontakt' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg" 
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img src={logo} alt="Limarija Čaušević logo" className="w-12 h-12 object-contain" />
            <div className="flex flex-col">
              <span className="font-display text-xl font-bold text-foreground tracking-wide">
                Limarija <span className="text-primary">Čaušević</span>
              </span>
              <span className="text-xs text-muted-foreground tracking-widest uppercase">
                Limarski Radovi
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "relative font-medium text-sm uppercase tracking-wider transition-colors duration-300 py-2",
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-foreground/80 hover:text-primary"
                )}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-primary rounded-full"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+381653400631" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">065 3400 631</span>
            </a>
            <Button variant="hero" size="xl" className="px-8" asChild>
              <a href="tel:+381653400631">Pozovite</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden bg-card/95 backdrop-blur-md rounded-b-2xl border-x border-b border-border"
            >
              <div className="py-6 px-4 space-y-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      className={cn(
                        "block py-3 px-4 rounded-lg font-display text-lg uppercase tracking-wider transition-all",
                        location.pathname === item.path
                          ? "bg-primary/10 text-primary"
                          : "text-foreground hover:bg-secondary"
                      )}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="pt-4 border-t border-border"
                >
                  <a 
                    href="tel:+381653400631" 
                    className="flex items-center gap-3 py-3 px-4 text-muted-foreground"
                  >
                    <Phone className="w-5 h-5 text-primary" />
                    <span className="font-medium">065 3400 631</span>
                  </a>
                  <Button variant="hero" size="lg" className="w-full mt-4" asChild>
                    <a href="tel:+381653400631">Pozovite</a>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};
