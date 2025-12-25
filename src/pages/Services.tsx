import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Droplets, Package, Layers, PanelTop, Wrench, Pipette, 
  Ruler, ArrowRight, CheckCircle, ShoppingBag, Factory
} from 'lucide-react';
import { ProcessSection } from '@/components/home/ProcessSection';
import { SwipeCarousel } from '@/components/ui/swipe-carousel';
import majstorNaKrovu from '@/assets/majstor_na_krovu.jpg';

const prodaja = [
  {
    id: 'oluci',
    icon: Droplets,
    title: 'Oluci',
    shortDesc: 'Kvalitetni olučni sistemi za odvod kišnice.',
    features: ['Poluokrugli oluci', 'Kutijasti oluci', 'Olučne cevi', 'Nosači i spojnice'],
  },
  {
    id: 'galanterija',
    icon: Package,
    title: 'Galanterija',
    shortDesc: 'Sav potreban pribor i galanterija za limariju.',
    features: ['Kuke i nosači', 'Spojnice', 'Završni elementi', 'Zaptivači'],
  },
  {
    id: 'profilisani-limovi',
    icon: Layers,
    title: 'Profilisani Limovi',
    shortDesc: 'Trapezni i profilisani limovi za krovove i fasade.',
    features: ['Trapezni lim', 'Salonit profil', 'Fasadni lim', 'Različite boje'],
  },
  {
    id: 'sendvic-paneli',
    icon: PanelTop,
    title: 'Sendvič Paneli',
    shortDesc: 'Termoizolacioni sendvič paneli vrhunskog kvaliteta.',
    features: ['Krovni paneli', 'Zidni paneli', 'Različite debljine', 'PIR/PUR ispuna'],
  },
  {
    id: 'srafovi',
    icon: Wrench,
    title: 'Šrafovi',
    shortDesc: 'Specijalizovani šrafovi za limariju i krovove.',
    features: ['Samourezni šrafovi', 'Šrafovi sa podloškom', 'INOX šrafovi', 'Različite dužine'],
  },
  {
    id: 'silikoni',
    icon: Pipette,
    title: 'Silikoni',
    shortDesc: 'Kvalitetni silikoni i zaptivna sredstva.',
    features: ['Neutralni silikoni', 'Akrilni kit', 'Trajno elastični', 'Otporni na UV'],
  },
];

const izrada = [
  {
    id: 'okapnice',
    icon: Ruler,
    title: 'Okapnice',
    shortDesc: 'Izrada okapnica po meri do 6m dužine.',
  },
  {
    id: 'vetar-lajsne',
    icon: Ruler,
    title: 'Vetar Lajsne',
    shortDesc: 'Precizna izrada vetar lajsni svih dimenzija.',
  },
  {
    id: 'iksne',
    icon: Ruler,
    title: 'Iksne',
    shortDesc: 'Izrada iksni za profesionalnu montažu.',
  },
  {
    id: 'vandiksne',
    icon: Ruler,
    title: 'Vandiksne',
    shortDesc: 'Kvalitetne vandiksne po vašim merama.',
  },
  {
    id: 'cetvrtasti-oluci',
    icon: Droplets,
    title: 'Četvrtasti Oluci',
    shortDesc: 'Izrada četvrtastih oluka po meri.',
  },
];

const ProdajaCard = ({ item }: { item: typeof prodaja[0] }) => (
  <div className="p-5 rounded-xl bg-background border border-border h-full">
    <div className="flex items-center gap-3 mb-3">
      <div className="w-11 h-11 rounded-lg bg-gradient-primary flex items-center justify-center">
        <item.icon className="w-5 h-5 text-primary-foreground" />
      </div>
      <h3 className="font-display text-base font-bold text-foreground">{item.title}</h3>
    </div>
    
    <p className="text-muted-foreground text-sm mb-3">{item.shortDesc}</p>
    
    <div className="space-y-1.5 mb-4">
      {item.features.map((feature, idx) => (
        <div key={idx} className="flex items-center gap-2">
          <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
          <span className="text-xs text-muted-foreground">{feature}</span>
        </div>
      ))}
    </div>

    <Button variant="hero" size="sm" className="w-full" asChild>
      <Link to="/kontakt">
        Naručite
        <ArrowRight className="w-3 h-3" />
      </Link>
    </Button>
  </div>
);

const IzradaCard = ({ item }: { item: typeof izrada[0] }) => (
  <div className="p-4 rounded-xl bg-background border border-border h-full flex flex-col items-center text-center">
    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-2">
      <item.icon className="w-5 h-5 text-primary" />
    </div>
    <h3 className="font-display text-sm font-bold text-foreground mb-1">{item.title}</h3>
    <p className="text-muted-foreground text-xs">{item.shortDesc}</p>
  </div>
);

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
            className="max-w-4xl"
          >
            <span className="text-primary font-medium uppercase tracking-widest text-sm">Naša Ponuda</span>
            <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mt-3 mb-4">
              PRODAJA I <span className="text-gradient">IZRADA</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
              Kvalitetni materijali za limariju i profesionalna izrada po meri - sve na jednom mestu.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Prodaja Section */}
      <section className="py-10 md:py-14 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
              <ShoppingBag className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h2 className="font-display text-xl md:text-2xl font-bold text-foreground">PRODAJA</h2>
              <p className="text-muted-foreground text-sm">Materijali i oprema za limariju</p>
            </div>
          </motion.div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {prodaja.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ProdajaCard item={item} />
              </motion.div>
            ))}
          </div>

          {/* Mobile Swipe */}
          <div className="md:hidden">
            <SwipeCarousel>
              {prodaja.map((item) => (
                <div key={item.id} className="px-1">
                  <ProdajaCard item={item} />
                </div>
              ))}
            </SwipeCarousel>
            <p className="text-center text-muted-foreground text-sm mt-3">← Prevucite za više →</p>
          </div>
        </div>
      </section>

      {/* Izrada Section */}
      <section className="py-10 md:py-14 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
              <Factory className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h2 className="font-display text-xl md:text-2xl font-bold text-foreground">IZRADA</h2>
              <p className="text-muted-foreground text-sm">Pravimo po meri, najduža mera 6,00 m</p>
            </div>
          </motion.div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {izrada.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <IzradaCard item={item} />
              </motion.div>
            ))}
          </div>

          {/* Mobile Swipe */}
          <div className="md:hidden">
            <SwipeCarousel>
              {izrada.map((item) => (
                <div key={item.id} className="px-1">
                  <IzradaCard item={item} />
                </div>
              ))}
            </SwipeCarousel>
            <p className="text-center text-muted-foreground text-sm mt-3">← Prevucite za više →</p>
          </div>

          {/* Info box with image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 grid md:grid-cols-2 gap-6 items-center"
          >
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <img
                src={majstorNaKrovu}
                alt="Majstor na krovu - montaža limarije"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="text-primary text-sm font-medium uppercase tracking-wider">Naš rad</span>
                <p className="font-display text-lg font-bold text-foreground">Profesionalna montaža</p>
              </div>
            </div>
            <div className="p-6 rounded-xl bg-card border border-primary/20">
              <p className="text-foreground font-medium text-lg mb-2">
                🔧 Sve izrađujemo na meru prema vašim specifikacijama
              </p>
              <p className="text-muted-foreground mb-4">
                Naš tim iskusnih majstora garantuje preciznu izradu i montažu svih limarskih elemenata.
              </p>
              <p className="text-muted-foreground text-sm">
                Maksimalna dužina izrade: <span className="text-primary font-bold text-lg">6,00 m</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection />

      {/* CTA Section */}
      <section className="py-10 md:py-14 bg-card">
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
              Kontaktirajte nas za ponudu ili posetite našu radnju.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/kontakt">Zatražite Ponudu</Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="tel:+381653400631">Pozovite Nas</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
