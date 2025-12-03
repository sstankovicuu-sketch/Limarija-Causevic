import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Award, Users, Zap, Target, HeartHandshake } from 'lucide-react';

const reasons = [
  { icon: Shield, title: 'Garancija Kvaliteta', description: 'Pisana garancija i premium materijali.' },
  { icon: Award, title: '20+ Godina Iskustva', description: 'Hiljadama uspešnih projekata.' },
  { icon: Users, title: 'Stručni Tim', description: 'Sertifikovani majstori.' },
  { icon: Zap, title: 'Brza Realizacija', description: 'Projekti u rekordnom roku.' },
  { icon: Target, title: 'Preciznost Izrade', description: 'CNC mašine, milimetarska preciznost.' },
  { icon: HeartHandshake, title: 'Fer Cene', description: 'Bez skrivenih troškova.' },
];

export const WhyUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 md:py-24 bg-background relative overflow-hidden">
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

        {/* Grid - works on all screens */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-4 md:p-6 rounded-xl bg-card border border-border"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-3">
                <reason.icon className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-sm md:text-lg font-bold text-foreground mb-1">{reason.title}</h3>
              <p className="text-muted-foreground text-xs md:text-sm">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
