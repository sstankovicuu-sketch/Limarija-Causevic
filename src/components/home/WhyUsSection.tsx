import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Award, Users, Zap, Target, HeartHandshake } from 'lucide-react';

const reasons = [
  {
    icon: Shield,
    title: 'Garancija Kvaliteta',
    description: 'Svi naši radovi dolaze sa pisanom garancijom. Koristimo samo premium materijale renomiranih proizvođača i garantujemo dugotrajnost svakog projekta.',
  },
  {
    icon: Award,
    title: '20+ Godina Iskustva',
    description: 'Dve decenije u limarskom zanatu znači hiljadama uspešno realizovanih projekata. Naša ekspertiza je rezultat kontinuiranog usavršavanja i praćenja najnovijih tehnologija.',
  },
  {
    icon: Users,
    title: 'Stručni Tim',
    description: 'Naš tim čine sertifikovani majstori sa dugogodišnjim iskustvom. Svaki član prolazi redovne obuke i poseduje specijalizaciju za određene vrste limarskih radova.',
  },
  {
    icon: Zap,
    title: 'Brza Realizacija',
    description: 'Efikasnost je naš prioritet. Zahvaljujući organizovanom procesu rada i modernoj opremi, projekte završavamo u rekordnom roku bez kompromisa kvaliteta.',
  },
  {
    icon: Target,
    title: 'Preciznost Izrade',
    description: 'Koristimo najsavremenije CNC mašine za savijanje i sečenje lima. Svaki element se izrađuje sa milimetarskom preciznošću prema vašim specifikacijama.',
  },
  {
    icon: HeartHandshake,
    title: 'Fer Cene',
    description: 'Transparentne ponude bez skrivenih troškova. Nudimo konkurentne cene koje odražavaju pravi kvalitet - bez precenjivanja, ali i bez kompromisa.',
  },
];

export const WhyUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-steel/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <span className="text-primary font-medium uppercase tracking-widest text-sm">
            Zašto baš mi?
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            RAZLOZI ZA <span className="text-gradient">POVERENJE</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Kada birate partnera za limarske radove, birate nekoga ko će vam garantovati 
            kvalitet, pouzdanost i dugotrajnost. Evo zašto klijenti biraju nas.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="h-full p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 card-shadow">
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <reason.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="absolute -inset-2 bg-primary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
