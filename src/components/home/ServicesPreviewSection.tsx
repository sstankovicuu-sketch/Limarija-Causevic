import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Layers, Ruler, Home, Droplets, Factory, Cog, ArrowRight } from 'lucide-react';

const services = [
  { icon: Layers, title: 'Obrada Lima', description: 'Sečenje, štancanje, obrada.' },
  { icon: Ruler, title: 'Savijanje', description: 'CNC precizno savijanje.' },
  { icon: Home, title: 'Krovovi', description: 'Krovne konstrukcije.' },
  { icon: Droplets, title: 'Oluci', description: 'Olučni sistemi.' },
  { icon: Factory, title: 'Industrija', description: 'Industrijski radovi.' },
  { icon: Cog, title: 'Po Meri', description: 'Unikatna rešenja.' },
];

export const ServicesPreviewSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 md:py-24 bg-card relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <span className="text-primary font-medium uppercase tracking-widest text-sm">Naše Usluge</span>
          <h2 className="font-display text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
            KLJUČNE <span className="text-gradient">USLUGE</span>
          </h2>
        </motion.div>

        {/* Grid - 2x3 on mobile, 3x2 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-4 md:p-5 rounded-xl bg-background border border-border"
            >
              <div className="w-10 h-10 md:w-11 md:h-11 rounded-lg bg-secondary flex items-center justify-center mb-3">
                <service.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-sm md:text-base font-bold text-foreground mb-1">{service.title}</h3>
              <p className="text-muted-foreground text-xs md:text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-8"
        >
          <Button variant="hero" size="lg" asChild>
            <Link to="/usluge" className="group">
              Sve Usluge
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
