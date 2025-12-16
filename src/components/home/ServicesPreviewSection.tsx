import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Droplets, Package, Layers, PanelTop, Wrench, Pipette, Factory, ArrowRight } from 'lucide-react';
import { SwipeCarousel } from '@/components/ui/swipe-carousel';

const prodaja = [
  { icon: Droplets, title: 'Oluci', description: 'Kvalitetni olučni sistemi.' },
  { icon: Package, title: 'Galanterija', description: 'Sav potreban pribor.' },
  { icon: Layers, title: 'Profilisani Limovi', description: 'Trapezni i fasadni limovi.' },
  { icon: PanelTop, title: 'Sendvič Paneli', description: 'Termoizolacioni paneli.' },
  { icon: Wrench, title: 'Šrafovi', description: 'Specijalizovani šrafovi.' },
  { icon: Pipette, title: 'Silikoni', description: 'Zaptivna sredstva.' },
];

const izrada = [
  'Okapnice', 'Vetar lajsne', 'Iksne', 'Vandiksne', 'Četvrtasti oluci'
];

const ServiceCard = ({ item }: { item: typeof prodaja[0] }) => (
  <div className="h-full p-4 rounded-xl bg-background border border-border">
    <div className="flex items-start gap-3 mb-2">
      <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
        <item.icon className="w-5 h-5 text-primary" />
      </div>
      <div>
        <h3 className="font-display text-sm font-bold text-foreground">{item.title}</h3>
        <p className="text-muted-foreground text-xs">{item.description}</p>
      </div>
    </div>
  </div>
);

export const ServicesPreviewSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-14 md:py-20 bg-card relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 md:mb-10"
        >
          <span className="text-primary font-medium uppercase tracking-widest text-sm">Naša Ponuda</span>
          <h2 className="font-display text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
            PRODAJA I <span className="text-gradient">IZRADA</span>
          </h2>
        </motion.div>

        {/* Prodaja */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6"
        >
          <h3 className="font-display text-lg font-bold text-foreground mb-3 flex items-center gap-2">
            <Package className="w-5 h-5 text-primary" /> Prodaja
          </h3>
          
          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-6 gap-3">
            {prodaja.map((item, index) => (
              <ServiceCard key={index} item={item} />
            ))}
          </div>

          {/* Mobile Swipe */}
          <div className="md:hidden">
            <SwipeCarousel>
              {prodaja.map((item, index) => (
                <div key={index} className="px-1">
                  <ServiceCard item={item} />
                </div>
              ))}
            </SwipeCarousel>
          </div>
        </motion.div>

        {/* Izrada */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <h3 className="font-display text-lg font-bold text-foreground mb-3 flex items-center gap-2">
            <Factory className="w-5 h-5 text-primary" /> Izrada po meri (do 6m)
          </h3>
          
          <div className="flex flex-wrap gap-2">
            {izrada.map((item, index) => (
              <span key={index} className="px-3 py-1.5 text-sm font-medium rounded-full bg-secondary text-secondary-foreground">
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-6"
        >
          <Button variant="hero" size="lg" asChild>
            <Link to="/usluge" className="group">
              Pogledaj Sve
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
