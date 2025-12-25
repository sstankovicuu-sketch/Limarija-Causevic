import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Phone, ArrowRight, CheckCircle } from 'lucide-react';

const benefits = ['Besplatna procena', 'Garancija kvaliteta', 'Fer cene', 'Brza realizacija'];

export const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-steel-dark via-background to-primary/10" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h2 className="font-display text-2xl md:text-4xl lg:text-5xl font-bold text-foreground">
              SPREMNI ZA <span className="text-gradient">SARADNJU?</span>
            </h2>

            <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
              Kontaktirajte nas danas i dobijte besplatnu procenu za vaš projekat.
            </p>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-2 py-4"
            >
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-card/50 backdrop-blur-sm border border-border"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-primary" />
                  <span className="text-xs md:text-sm text-foreground">{benefit}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 justify-center pt-2"
            >
              <Button variant="hero" size="lg" asChild>
                <Link to="/kontakt" className="group">
                  Zatražite Ponudu
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="tel:+381653400631">
                  <Phone className="w-4 h-4" />
                  Pozovite
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
