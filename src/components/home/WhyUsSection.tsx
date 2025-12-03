import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Award, Users, Zap, Target, HeartHandshake } from 'lucide-react';
import { SwipeCarousel } from '@/components/ui/swipe-carousel';

const reasons = [
  { icon: Shield, title: 'Garancija Kvaliteta', description: 'Svi radovi dolaze sa pisanom garancijom i premium materijalima.' },
  { icon: Award, title: '20+ Godina Iskustva', description: 'Dve decenije hiljada uspešno realizovanih projekata.' },
  { icon: Users, title: 'Stručni Tim', description: 'Sertifikovani majstori sa dugogodišnjim iskustvom.' },
  { icon: Zap, title: 'Brza Realizacija', description: 'Projekte završavamo u rekordnom roku bez kompromisa.' },
  { icon: Target, title: 'Preciznost Izrade', description: 'CNC mašine za milimetarsku preciznost.' },
  { icon: HeartHandshake, title: 'Fer Cene', description: 'Transparentne ponude bez skrivenih troškova.' },
];

const ReasonCard = ({ reason }: { reason: typeof reasons[0] }) => (
  <div className="h-full p-5 md:p-6 rounded-xl bg-card border border-border">
    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
      <reason.icon className="w-6 h-6 text-primary-foreground" />
    </div>
    <h3 className="font-display text-base md:text-lg font-bold text-foreground mb-2">{reason.title}</h3>
    <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
  </div>
);

export const WhyUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <span className="text-primary font-medium uppercase tracking-widest text-sm">Zašto mi?</span>
          <h2 className="font-display text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
            RAZLOZI ZA <span className="text-gradient">POVERENJE</span>
          </h2>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ReasonCard reason={reason} />
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
            {reasons.map((reason, index) => (
              <div key={index} className="px-1">
                <ReasonCard reason={reason} />
              </div>
            ))}
          </SwipeCarousel>
          <p className="text-center text-muted-foreground text-sm mt-3">← Prevucite za više →</p>
        </motion.div>
      </div>
    </section>
  );
};
