import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Layers, Ruler, Home, Droplets, Factory, Cog, ArrowRight, 
  CheckCircle, Hammer, Settings, Truck, FileText, Shield
} from 'lucide-react';
import { SwipeCarousel } from '@/components/ui/swipe-carousel';

const services = [
  {
    id: 'obrada-lima',
    icon: Layers,
    title: 'Obrada Lima',
    shortDesc: 'Profesionalna obrada limenih ploča svih vrsta i debljina.',
    fullDesc: `Naša radionica je opremljena najsavremenijom opremom za obradu lima.`,
    features: ['Lasersko sečenje lima', 'Plazmeno sečenje', 'Probijanje i štancanje', 'Sečenje po meri', 'Završna obrada ivica', 'Antikorozivna zaštita'],
    materials: ['Čelični lim', 'Aluminijum', 'INOX', 'Pocinkovani lim', 'Bakarni lim'],
  },
  {
    id: 'savijanje',
    icon: Ruler,
    title: 'Savijanje Lima',
    shortDesc: 'Precizno savijanje lima na najmodernijim CNC mašinama.',
    fullDesc: `CNC savijanje lima je naša specijalnost sa milimetarskom preciznošću.`,
    features: ['CNC savijanje do 4m', 'Preciznost do 0.1mm', 'Kompleksni profili', 'Serijska proizvodnja', 'Izrada prototipova', 'Savijanje po crtežu'],
    materials: ['Sve vrste lima do 8mm', 'Specijalni profili', 'Perforisani lim'],
  },
  {
    id: 'krovovi',
    icon: Home,
    title: 'Krovište i Konstrukcije',
    shortDesc: 'Kompletne krovne limarske konstrukcije.',
    fullDesc: `Kompletna usluga izrade i montaže krovnih limarskih elemenata.`,
    features: ['Trapezni limovi', 'Sendvič paneli', 'Termo izolacija', 'Hidroizolacija', 'Krovne kupole', 'Ventilacioni elementi'],
    materials: ['Plastificirani lim', 'Aluminijum', 'Cink-titan', 'Bakar'],
  },
  {
    id: 'oluci',
    icon: Droplets,
    title: 'Oluci i Opšivke',
    shortDesc: 'Izrada i montaža olučnih sistema i završnih elemenata.',
    fullDesc: `Kompletna rešenja za odvod kišnice i zaštitu objekta.`,
    features: ['Poluokrugli i kutijasti oluci', 'Olučne cevi', 'Opšivke prozora', 'Krovne uvale', 'Fasadne obloge', 'Dimnjaci'],
    materials: ['Pocinkovani lim', 'Plastificirani lim', 'Aluminijum', 'Bakar'],
  },
  {
    id: 'industrijski',
    icon: Factory,
    title: 'Industrijski Radovi',
    shortDesc: 'Specijalizovani industrijski limarski radovi.',
    fullDesc: `Za industrijske klijente nudimo specijalizovane usluge.`,
    features: ['Ventilacioni kanali', 'Industrijski rezervoari', 'Transportne trake', 'Aspiracioni sistemi', 'Industrijske obloge', 'Specijalne konstrukcije'],
    materials: ['INOX za prehrambenu industriju', 'Čelični lim', 'Specijalni legure'],
  },
  {
    id: 'po-meri',
    icon: Cog,
    title: 'Izrade Po Meri',
    shortDesc: 'Unikatna rešenja prema vašim potrebama.',
    fullDesc: `Naš tim može da realizuje praktično svaku ideju u limu.`,
    features: ['Dekorativni elementi', 'Reklamne konstrukcije', 'Nameštaj od lima', 'Zaštitne obloge', 'Prototipovi', 'Male i velike serije'],
    materials: ['Svi dostupni materijali', 'Kombinacije materijala', 'Specijalne završne obrade'],
  },
];

const processSteps = [
  { icon: FileText, title: 'Konsultacije' },
  { icon: Settings, title: 'Projektovanje' },
  { icon: Hammer, title: 'Izrada' },
  { icon: Truck, title: 'Montaža' },
  { icon: Shield, title: 'Garancija' },
];

const ServiceCard = ({ service }: { service: typeof services[0] }) => (
  <div className="p-6 rounded-xl bg-background border border-border h-full">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
        <service.icon className="w-6 h-6 text-primary-foreground" />
      </div>
      <div>
        <h3 className="font-display text-lg font-bold text-foreground">{service.title}</h3>
        <p className="text-primary text-xs">{service.shortDesc}</p>
      </div>
    </div>
    
    <p className="text-muted-foreground text-sm mb-4">{service.fullDesc}</p>
    
    <div className="space-y-2 mb-4">
      {service.features.slice(0, 4).map((feature, idx) => (
        <div key={idx} className="flex items-center gap-2">
          <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
          <span className="text-xs text-muted-foreground">{feature}</span>
        </div>
      ))}
    </div>

    <div className="flex flex-wrap gap-1">
      {service.materials.slice(0, 3).map((material, idx) => (
        <span key={idx} className="px-2 py-0.5 text-xs rounded-full bg-secondary text-secondary-foreground">
          {material}
        </span>
      ))}
    </div>

    <Button variant="hero" size="sm" className="w-full mt-4" asChild>
      <Link to="/kontakt">
        Zatražite Ponudu
        <ArrowRight className="w-3 h-3" />
      </Link>
    </Button>
  </div>
);

const Services = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <Layout>
      {/* Hero Section */}
      <section ref={heroRef} className="pt-28 pb-12 md:pt-32 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-steel-dark/30 via-background to-primary/5" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span className="text-primary font-medium uppercase tracking-widest text-sm">Naše Usluge</span>
            <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mt-3 mb-4">
              KOMPLETNA PONUDA <span className="text-gradient">LIMARSKIH USLUGA</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
              Od precizne obrade lima do kompletnih krovnih sistema - sve na jednom mestu.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services - Desktop Grid / Mobile Swipe */}
      <section className="py-12 md:py-16 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </div>

          {/* Mobile Swipe Carousel */}
          <div className="md:hidden">
            <SwipeCarousel>
              {services.map((service) => (
                <div key={service.id} className="px-1">
                  <ServiceCard service={service} />
                </div>
              ))}
            </SwipeCarousel>
            <p className="text-center text-muted-foreground text-sm mt-4">← Prevucite za više usluga →</p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <span className="text-primary font-medium uppercase tracking-widest text-sm">Naš proces</span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-2">
              KAKO <span className="text-gradient">RADIMO</span>
            </h2>
          </motion.div>

          {/* Desktop */}
          <div className="hidden md:flex flex-wrap justify-center gap-3">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <step.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <p className="font-display font-bold text-foreground text-sm">{step.title}</p>
                {index < processSteps.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-muted-foreground" />
                )}
              </motion.div>
            ))}
          </div>

          {/* Mobile Swipe */}
          <div className="md:hidden">
            <SwipeCarousel>
              {processSteps.map((step, index) => (
                <div key={index} className="px-1">
                  <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-card border border-border text-center">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <p className="font-display font-bold text-foreground">{step.title}</p>
                    <span className="text-primary text-sm">Korak {index + 1}</span>
                  </div>
                </div>
              ))}
            </SwipeCarousel>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              POTREBNA VAM JE <span className="text-gradient">NAŠA POMOĆ?</span>
            </h2>
            <p className="text-muted-foreground mb-6">
              Kontaktirajte nas za besplatne konsultacije i ponudu.
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
