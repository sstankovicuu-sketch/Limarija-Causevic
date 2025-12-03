import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, FileText, Hammer, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Phone,
    number: '01',
    title: 'Kontaktirajte Nas',
    description: 'Javite nam se putem telefona, emaila ili kontakt forme. Opišite vaše potrebe i zakažite besplatne konsultacije sa našim stručnjacima.',
  },
  {
    icon: FileText,
    number: '02',
    title: 'Izlazak na Teren',
    description: 'Naš tim dolazi na lokaciju za snimanje stanja i uzimanje mera. Dobijate detaljnu ponudu sa specifikacijom materijala i rokovima.',
  },
  {
    icon: Hammer,
    number: '03',
    title: 'Realizacija Projekta',
    description: 'Po vašem odobrenju, krećemo sa izradom i montažom. Pratite napredak i komunicirajte sa nama tokom celog procesa.',
  },
  {
    icon: CheckCircle,
    number: '04',
    title: 'Primopredaja',
    description: 'Po završetku radova, vršimo detaljnu kontrolu kvaliteta. Dobijate garanciju, dokumentaciju i podršku za sve dodatne potrebe.',
  },
];

export const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-background relative overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <span className="text-primary font-medium uppercase tracking-widest text-sm">
            Proces Rada
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            KAKO <span className="text-gradient">RADIMO</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Naš proces je osmišljen tako da vam pruži maksimalnu transparentnost i udobnost. 
            Od prvog poziva do završetka projekta - uvek znate gde se nalazite.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Connection line (desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-[60%] right-0 h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              )}

              <div className="relative text-center">
                {/* Number badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="font-display text-6xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                    {step.number}
                  </span>
                </div>

                {/* Icon */}
                <div className="relative mb-6 pt-8">
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-card border border-border flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-300">
                    <step.icon className="w-10 h-10 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
