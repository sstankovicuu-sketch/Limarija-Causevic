import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Shield, Award, Clock, ChevronDown } from 'lucide-react';

const features = [
  { icon: Shield, text: 'Garancija' },
  { icon: Award, text: '20+ godina' },
  { icon: Clock, text: 'Brza realizacija' },
];

export const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-20 pb-8 md:pt-24 md:pb-12">
        <div className="max-w-2xl lg:max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm mb-4 md:mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs md:text-sm font-medium text-primary">Profesionalni limarski radovi</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-display text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-4 md:mb-6"
          >
            <span className="text-foreground">PRECIZNOST</span>
            <br />
            <span className="text-gradient">U SVAKOM</span>
            <br />
            <span className="text-foreground">DETALJU</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-base md:text-xl text-foreground/80 max-w-xl leading-relaxed mb-4 md:mb-6"
          >
            Specijalizovani smo za vrhunske limarske radove sa višedecenijskim iskustvom. 
            Garantujemo kvalitet koji traje generacijama.
          </motion.p>

          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-2 md:gap-3 mb-6"
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary/50 backdrop-blur-sm border border-border"
              >
                <feature.icon className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs md:text-sm font-medium text-foreground">{feature.text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Button variant="hero" size="lg" asChild>
              <Link to="/kontakt">Zatražite Ponudu</Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/usluge">Naše Usluge</Link>
            </Button>
          </motion.div>
        </div>

        {/* Scroll Indicator - Hidden on mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-xs uppercase tracking-widest">Skrolujte</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
