import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Layers, Ruler, Home, Droplets, Factory, Cog, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Layers,
    title: 'Obrada Lima',
    description: 'Profesionalna obrada limenih ploča svih vrsta i debljina. Sečenje, probijanje, štancanje i završna obrada prema vašim specifikacijama.',
    features: ['Lasersko sečenje', 'CNC obrada', 'Završna zaštita'],
  },
  {
    icon: Ruler,
    title: 'Savijanje Lima',
    description: 'Precizno savijanje lima na najmodernijim CNC mašinama. Izrada profila, kanala i komponenti za sve industrijske potrebe.',
    features: ['Milimetarska preciznost', 'Kompleksni profili', 'Brza izrada'],
  },
  {
    icon: Home,
    title: 'Krovne Konstrukcije',
    description: 'Kompletne krovne limarske konstrukcije - od projektovanja do montaže. Pokrivanje, izolacija i završni radovi.',
    features: ['Projektovanje', 'Montaža', 'Hidroizolacija'],
  },
  {
    icon: Droplets,
    title: 'Oluci i Opšivke',
    description: 'Izrada i montaža olučnih sistema, opšivki prozora i vrata, krovnih uvala i svih završnih limarskih elemenata.',
    features: ['Aluminijum', 'Pocinkovani lim', 'Bakar'],
  },
  {
    icon: Factory,
    title: 'Industrijski Radovi',
    description: 'Specijalizovani industrijski limarski radovi - ventilacioni kanali, rezervoari, industrijske obloge i konstrukcije.',
    features: ['Ventilacija', 'Rezervoari', 'Konstrukcije'],
  },
  {
    icon: Cog,
    title: 'Izrade Po Meri',
    description: 'Unikatna rešenja prema vašim potrebama. Od ideje do realizacije - sve što možete zamisliti, mi možemo napraviti.',
    features: ['Konsultacije', 'Prototipovi', 'Serijska proizvodnja'],
  },
];

export const ServicesPreviewSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-card relative overflow-hidden">
      {/* Grid pattern background */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `linear-gradient(hsl(var(--steel)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--steel)) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <span className="text-primary font-medium uppercase tracking-widest text-sm">
            Naše Usluge
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            KLJUČNE <span className="text-gradient">USLUGE</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Nudimo kompletan spektar limarskih usluga - od jednostavne obrade lima do 
            kompleksnih industrijskih projekata. Svaka usluga dolazi sa garancijom kvaliteta.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300 card-shadow hover:-translate-y-1">
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button variant="hero" size="xl" asChild>
            <Link to="/usluge" className="group">
              Pogledajte Sve Usluge
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
