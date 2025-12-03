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
    shortDesc: 'Profesionalna obrada limenih ploča svih vrsta i debljina.',
    fullDesc: `Naša radionica je opremljena najsavremenijom opremom za obradu lima koja 
    omogućava preciznu izradu komponenti po vašim specifikacijama. Koristimo lasersko 
    sečenje, plazmeno sečenje, i konvencionalne metode u zavisnosti od zahteva projekta.`,
    features: [
      'Lasersko sečenje lima do 20mm debljine',
      'Plazmeno sečenje za veće debljine',
      'Probijanje i štancanje',
      'Sečenje i krojenje po meri',
      'Završna obrada ivica',
      'Antikorozivna zaštita',
    ],
    materials: ['Čelični lim', 'Aluminijum', 'Nehrđajući čelik (INOX)', 'Pocinkovani lim', 'Bakarni lim'],
    process: 'Od dostave tehničke dokumentacije do gotovog proizvoda - standardni rok je 3-7 radnih dana za manje serije.',
  },
  {
    id: 'savijanje',
    icon: Ruler,
    title: 'Savijanje Lima',
    shortDesc: 'Precizno savijanje lima na najmodernijim CNC mašinama.',
    fullDesc: `CNC savijanje lima je naša specijalnost. Posedujemo abkant prese sa numeričkom 
    kontrolom koje garantuju milimetarsku preciznost pri savijanju. Možemo da realizujemo 
    i najsloženije profile i oblike.`,
    features: [
      'CNC savijanje do 4m dužine',
      'Preciznost do 0.1mm',
      'Kompleksni profili i uglovi',
      'Serijska proizvodnja',
      'Izrada prototipova',
      'Savijanje po crtežu',
    ],
    materials: ['Sve vrste lima do 8mm debljine', 'Specijalni profili', 'Perforisani lim'],
    process: 'Dostavite nam crtež ili uzorak, a mi ćemo vam pripremiti ponudu u roku od 24h.',
  },
  {
    id: 'krovovi',
    icon: Home,
    title: 'Krovište i Krovne Konstrukcije',
    shortDesc: 'Kompletne krovne limarske konstrukcije od projektovanja do montaže.',
    fullDesc: `Nudimo kompletnu uslugu izrade i montaže krovnih limarskih elemenata. Od 
    projektovanja i izrade u radionici, preko transporta, do profesionalne montaže na 
    objektu. Koristimo najkvalitetnije materijale i garantujemo dugotrajnost.`,
    features: [
      'Trapezni limovi svih profila',
      'Sendvič paneli sa izolacijom',
      'Termo izolacija krovova',
      'Hidroizolacija',
      'Krovne kupole i svetlarnici',
      'Ventilacioni elementi',
    ],
    materials: ['Plastificirani lim', 'Aluminijum', 'Cink-titan', 'Bakar'],
    process: 'Kompletna usluga uključuje besplatni izlazak na teren, snimanje stanja, ponudu, izradu i montažu.',
  },
  {
    id: 'oluci',
    icon: Droplets,
    title: 'Oluci, Opšivke i Obloge',
    shortDesc: 'Izrada i montaža olučnih sistema i svih završnih limarskih elemenata.',
    fullDesc: `Olučni sistem je kritičan deo svakog objekta koji štiti fasadu i temelje 
    od vode. Nudimo kompletna rešenja za odvod kišnice - od izrade oluka i olučnih cevi 
    do svih pratećih elemenata i montaže.`,
    features: [
      'Poluokrugli i kutijasti oluci',
      'Olučne cevi svih dimenzija',
      'Opšivke prozora i vrata',
      'Krovne uvale i odvodi',
      'Fasadne obloge',
      'Dimnjaci i ventilacione kape',
    ],
    materials: ['Pocinkovani lim', 'Plastificirani lim', 'Aluminijum', 'Bakar', 'Titan-cink'],
    process: 'Besplatno merenje na objektu, izrada u radionici, profesionalna montaža sa garancijom.',
  },
  {
    id: 'industrijski',
    icon: Factory,
    title: 'Industrijski Limarski Radovi',
    shortDesc: 'Specijalizovani industrijski limarski radovi za sve vrste objekata.',
    fullDesc: `Za industrijske klijente nudimo specijalizovane usluge koje zahtevaju 
    posebnu stručnost i opremu. Od ventilacionih sistema do industrijskih rezervoara - 
    imamo znanje i kapacitete za sve vrste industrijskih projekata.`,
    features: [
      'Ventilacioni kanali i sistemi',
      'Industrijski rezervoari',
      'Transportne trake i kanali',
      'Aspiracioni sistemi',
      'Industrijske obloge',
      'Specijalne konstrukcije',
    ],
    materials: ['INOX za prehrambenu industriju', 'Čelični lim', 'Specijalni legure'],
    process: 'Radimo po tehničkoj dokumentaciji ili možemo da projektujemo rešenje prema vašim potrebama.',
  },
  {
    id: 'po-meri',
    icon: Cog,
    title: 'Specijalne Izrade Po Meri',
    shortDesc: 'Unikatna rešenja prema vašim potrebama - sve što možete zamisliti.',
    fullDesc: `Imate specifičan zahtev koji ne spada u standardnu ponudu? Naš tim može 
    da realizuje praktično svaku ideju u limu. Od dekorativnih elemenata do funkcionalnih 
    komponenti - izazovi su naša specijalnost.`,
    features: [
      'Dekorativni elementi',
      'Reklamne konstrukcije',
      'Nameštaj od lima',
      'Zaštitne obloge',
      'Prototipovi',
      'Male i velike serije',
    ],
    materials: ['Svi dostupni materijali', 'Kombinacije materijala', 'Specijalne završne obrade'],
    process: 'Konsultacije → Dizajn → Prototip → Odobrenje → Proizvodnja',
  },
];

const processSteps = [
  { icon: FileText, title: 'Konsultacije', desc: 'Besplatan razgovor o vašim potrebama' },
  { icon: Settings, title: 'Projektovanje', desc: 'Izrada tehničke dokumentacije' },
  { icon: Hammer, title: 'Izrada', desc: 'Proizvodnja u našoj radionici' },
  { icon: Truck, title: 'Montaža', desc: 'Profesionalna ugradnja na objektu' },
  { icon: Shield, title: 'Garancija', desc: 'Pisana garancija na sve radove' },
];

const Services = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <Layout>
      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-steel-dark/30 via-background to-primary/5" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span className="text-primary font-medium uppercase tracking-widest text-sm">
              Naše Usluge
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
              KOMPLETNA PONUDA <span className="text-gradient">LIMARSKIH USLUGA</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
              Od precizne obrade lima do kompletnih krovnih sistema - nudimo sve što vam 
              je potrebno na jednom mestu. Svaka usluga dolazi sa garancijom kvaliteta i 
              podrškom našeg stručnog tima.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                id={service.id}
                className={`scroll-mt-24 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="p-8 md:p-12 rounded-2xl bg-background border border-border">
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Left/Right Content */}
                    <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center">
                          <service.icon className="w-8 h-8 text-primary-foreground" />
                        </div>
                        <div>
                          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                            {service.title}
                          </h2>
                          <p className="text-primary">{service.shortDesc}</p>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">
                        {service.fullDesc}
                      </p>

                      <div>
                        <h4 className="font-display font-bold text-foreground mb-3">Šta nudimo:</h4>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right/Left Content */}
                    <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <div className="p-6 rounded-xl bg-card border border-border">
                        <h4 className="font-display font-bold text-foreground mb-3">Materijali:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.materials.map((material, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground"
                            >
                              {material}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
                        <h4 className="font-display font-bold text-foreground mb-2">Proces:</h4>
                        <p className="text-muted-foreground text-sm">{service.process}</p>
                      </div>

                      <Button variant="hero" className="w-full" asChild>
                        <Link to="/kontakt">
                          Zatražite Ponudu za {service.title}
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-primary font-medium uppercase tracking-widest text-sm">
              Naš proces
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4">
              KAKO RADIMO <span className="text-gradient">SA VAMA</span>
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <step.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-display font-bold text-foreground">{step.title}</p>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <ArrowRight className="w-5 h-5 text-muted-foreground hidden md:block" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              POTREBNA VAM JE <span className="text-gradient">NAŠA POMOĆ?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Bez obzira koji projekat imate u planu, tu smo da vam pomognemo. 
              Kontaktirajte nas za besplatne konsultacije i ponudu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/kontakt">Zatražite Ponudu</Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
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
