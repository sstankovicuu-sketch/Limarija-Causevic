import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Layers, Ruler, Home, Droplets, Factory, Cog, ArrowRight, 
  CheckCircle, Hammer, Settings, Truck, FileText, Shield
} from 'lucide-react';

const services = [
  {
    id: 'obrada-lima',
    icon: Layers,
    title: 'Obrada Lima',
    shortDesc: 'Sečenje, štancanje, obrada limenih ploča.',
    features: ['Lasersko sečenje', 'Plazmeno sečenje', 'Štancanje', 'Završna obrada'],
    materials: ['Čelik', 'Aluminijum', 'INOX'],
  },
  {
    id: 'savijanje',
    icon: Ruler,
    title: 'Savijanje',
    shortDesc: 'CNC precizno savijanje lima.',
    features: ['Do 4m dužine', 'Preciznost 0.1mm', 'Kompleksni profili'],
    materials: ['Lim do 8mm', 'Profili'],
  },
  {
    id: 'krovovi',
    icon: Home,
    title: 'Krovovi',
    shortDesc: 'Krovne limarske konstrukcije.',
    features: ['Trapezni lim', 'Sendvič paneli', 'Izolacija'],
    materials: ['Plastificirani', 'Aluminijum'],
  },
  {
    id: 'oluci',
    icon: Droplets,
    title: 'Oluci i Opšivke',
    shortDesc: 'Olučni sistemi i završni elementi.',
    features: ['Oluci', 'Opšivke', 'Obloge'],
    materials: ['Pocinkovani', 'Bakar'],
  },
  {
    id: 'industrijski',
    icon: Factory,
    title: 'Industrijski',
    shortDesc: 'Specijalizovani industrijski radovi.',
    features: ['Ventilacija', 'Rezervoari', 'Konstrukcije'],
    materials: ['INOX', 'Čelik'],
  },
  {
    id: 'po-meri',
    icon: Cog,
    title: 'Po Meri',
    shortDesc: 'Unikatna rešenja po zahtevu.',
    features: ['Prototipovi', 'Serije', 'Dekoracije'],
    materials: ['Svi materijali'],
  },
];

const processSteps = [
  { icon: FileText, title: 'Konsultacije' },
  { icon: Settings, title: 'Projektovanje' },
  { icon: Hammer, title: 'Izrada' },
  { icon: Truck, title: 'Montaža' },
  { icon: Shield, title: 'Garancija' },
];

const Services = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <Layout>
      {/* Hero Section */}
      <section ref={heroRef} className="pt-28 pb-10 md:pt-32 md:pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-steel-dark/30 via-background to-primary/5" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-primary font-medium uppercase tracking-widest text-sm">Usluge</span>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-2 mb-3">
              KOMPLETNA PONUDA <span className="text-gradient">LIMARSKIH USLUGA</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground">
              Od obrade lima do krovnih sistema - sve na jednom mestu.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid - same on mobile and desktop */}
      <section className="py-10 md:py-16 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-4 md:p-6 rounded-xl bg-background border border-border"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-3">
                  <service.icon className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-sm md:text-lg font-bold text-foreground mb-1">{service.title}</h3>
                <p className="text-muted-foreground text-xs md:text-sm mb-3">{service.shortDesc}</p>
                
                <div className="space-y-1 mb-3">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                      <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                      <span className="text-xs text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1 mb-3">
                  {service.materials.slice(0, 2).map((material, idx) => (
                    <span key={idx} className="px-2 py-0.5 text-xs rounded-full bg-secondary text-secondary-foreground">
                      {material}
                    </span>
                  ))}
                </div>

                <Button variant="hero" size="sm" className="w-full text-xs" asChild>
                  <Link to="/kontakt">
                    Ponuda
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Grid */}
      <section className="py-10 md:py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-6"
          >
            <h2 className="font-display text-xl md:text-3xl font-bold text-foreground">
              KAKO <span className="text-gradient">RADIMO</span>
            </h2>
          </motion.div>

          {/* Grid for all screens */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-2 p-2 md:p-3 rounded-lg bg-card border border-border"
              >
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                  <step.icon className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground" />
                </div>
                <p className="font-display font-bold text-foreground text-xs md:text-sm">{step.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 md:py-16 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="font-display text-xl md:text-3xl font-bold text-foreground mb-3">
              POTREBNA VAM JE <span className="text-gradient">POMOĆ?</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-base mb-5">
              Kontaktirajte nas za besplatne konsultacije.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/kontakt">Zatražite Ponudu</Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="tel:+381601234567">Pozovite Nas</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
