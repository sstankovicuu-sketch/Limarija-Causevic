import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, FileText, Hammer, CheckCircle } from 'lucide-react';
import { SwipeCarousel } from '@/components/ui/swipe-carousel';

const steps = [
  { icon: Phone, number: '01', title: 'Kontakt', description: 'Javite nam se i opišite potrebe.' },
  { icon: FileText, number: '02', title: 'Procena', description: 'Izlazak na teren i detaljna ponuda.' },
  { icon: Hammer, number: '03', title: 'Realizacija', description: 'Izrada i montaža po dogovoru.' },
  { icon: CheckCircle, number: '04', title: 'Garancija', description: 'Primopredaja sa garancijom.' },
];

const StepCard = ({ step, index }: { step: typeof steps[0]; index: number }) => (
  <div className="relative text-center p-4">
    <span className="font-display text-4xl md:text-5xl font-bold text-primary/10">{step.number}</span>
    <div className="w-14 h-14 mx-auto rounded-xl bg-card border border-border flex items-center justify-center -mt-4 mb-3">
      <step.icon className="w-7 h-7 text-primary" />
    </div>
    <h3 className="font-display text-base font-bold text-foreground mb-1">{step.title}</h3>
    <p className="text-muted-foreground text-sm">{step.description}</p>
  </div>
);

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

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <StepCard step={step} index={index} />
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
            {steps.map((step, index) => (
              <div key={index} className="px-1">
                <div className="bg-card rounded-xl border border-border">
                  <StepCard step={step} index={index} />
                </div>
              </div>
            ))}
          </SwipeCarousel>
          <p className="text-center text-muted-foreground text-sm mt-3">← Prevucite za više →</p>
        </motion.div>
      </div>
    </section>
  );
};
