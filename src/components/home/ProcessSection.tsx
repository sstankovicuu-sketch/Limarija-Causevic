import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, FileText, Hammer, CheckCircle } from 'lucide-react';

const steps = [
  { icon: Phone, number: '01', title: 'Kontakt', description: 'Javite nam se' },
  { icon: FileText, number: '02', title: 'Procena', description: 'Izlazak i ponuda' },
  { icon: Hammer, number: '03', title: 'Realizacija', description: 'Izrada i montaža' },
  { icon: CheckCircle, number: '04', title: 'Garancija', description: 'Primopredaja' },
];

export const ProcessSection = () => {
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
          <span className="text-primary font-medium uppercase tracking-widest text-sm">Proces Rada</span>
          <h2 className="font-display text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
            KAKO <span className="text-gradient">RADIMO</span>
          </h2>
        </motion.div>

        {/* Grid - 2x2 on mobile, 4 columns on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center p-4 rounded-xl bg-card border border-border"
            >
              <span className="font-display text-3xl md:text-4xl font-bold text-primary/20">{step.number}</span>
              <div className="w-12 h-12 mx-auto rounded-lg bg-secondary flex items-center justify-center -mt-2 mb-2">
                <step.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-sm md:text-base font-bold text-foreground">{step.title}</h3>
              <p className="text-muted-foreground text-xs md:text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
