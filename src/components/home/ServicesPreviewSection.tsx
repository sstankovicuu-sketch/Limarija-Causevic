import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Layers, Ruler, Home, Droplets, Factory, Cog, ArrowRight } from 'lucide-react';
import { SwipeCarousel } from '@/components/ui/swipe-carousel';

const services = [
  { icon: Layers, title: 'Obrada Lima', description: 'Profesionalna obrada limenih ploča svih vrsta i debljina.', features: ['Lasersko sečenje', 'CNC obrada'] },
  { icon: Ruler, title: 'Savijanje Lima', description: 'Precizno savijanje na CNC mašinama.', features: ['Milimetarska preciznost', 'Kompleksni profili'] },
  { icon: Home, title: 'Krovne Konstrukcije', description: 'Kompletne krovne limarske konstrukcije.', features: ['Projektovanje', 'Montaža'] },
  { icon: Droplets, title: 'Oluci i Opšivke', description: 'Izrada i montaža olučnih sistema.', features: ['Aluminijum', 'Bakar'] },
  { icon: Factory, title: 'Industrijski Radovi', description: 'Specijalizovani industrijski radovi.', features: ['Ventilacija', 'Rezervoari'] },
  { icon: Cog, title: 'Izrade Po Meri', description: 'Unikatna rešenja prema potrebama.', features: ['Prototipovi', 'Serije'] },
];

const ServiceCard = ({ service }: { service: typeof services[0] }) => (
  <div className="h-full p-5 rounded-xl bg-background border border-border">
    <div className="flex items-start gap-3 mb-3">
      <div className="w-11 h-11 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
        <service.icon className="w-5 h-5 text-primary" />
      </div>
      <h3 className="font-display text-base font-bold text-foreground pt-2">{service.title}</h3>
    </div>
    <p className="text-muted-foreground text-sm leading-relaxed mb-3">{service.description}</p>
    <div className="flex flex-wrap gap-1.5">
      {service.features.map((feature, idx) => (
        <span key={idx} className="px-2 py-0.5 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
          {feature}
        </span>
      ))}
    </div>
  </div>
);

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

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>

        {/* Mobile Swipe */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="md:hidden"
        >
          <SwipeCarousel>
            {services.map((service, index) => (
              <div key={index} className="px-1">
                <ServiceCard service={service} />
              </div>
            ))}
          </SwipeCarousel>
          <p className="text-center text-muted-foreground text-sm mt-3">← Prevucite za više →</p>
        </motion.div>

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
