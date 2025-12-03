import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Award, Target, Eye, Shield, Users, Clock, ChevronLeft, ChevronRight, CheckCircle, Hammer, Lightbulb, Heart, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const stats = [
  { value: '20+', label: 'Godina iskustva' },
  { value: '2500+', label: 'Realizovanih projekata' },
  { value: '98%', label: 'Zadovoljnih klijenata' },
  { value: '15', label: 'Stručnjaka u timu' },
];

const values = [
  {
    icon: Shield,
    title: 'Kvalitet',
    description: 'Nikada ne pravimo kompromise kada je kvalitet u pitanju. Svaki detalj mora biti savršen.',
  },
  {
    icon: Clock,
    title: 'Poštovanje rokova',
    description: 'Rok je svetinja. Planiramo realistično i isporučujemo na vreme - bez izuzetaka.',
  },
  {
    icon: Heart,
    title: 'Posvećenost',
    description: 'Svaki projekat tretiramo kao da je naš. Vaše zadovoljstvo je naš glavni cilj.',
  },
  {
    icon: Lightbulb,
    title: 'Inovativnost',
    description: 'Stalno pratimo nove tehnologije i metode rada kako bismo vam pružili najbolje.',
  },
];

const team = [
  {
    name: 'Miloš Stanković',
    role: 'Vlasnik & Glavni Majstor',
    description: 'Sa 25 godina iskustva, Miloš je stub naše kompanije. Specijalizovan za kompleksne industrijske projekte.',
  },
  {
    name: 'Dejan Pavlović',
    role: 'Vođa Tima za Krovove',
    description: 'Ekspert za krovne konstrukcije sa preko 15 godina iskustva u montaži i projektovanju.',
  },
  {
    name: 'Nikola Jovanović',
    role: 'CNC Operater',
    description: 'Magistar mašinstva zadužen za preciznu obradu na našim najsavremenijim mašinama.',
  },
  {
    name: 'Marko Petrović',
    role: 'Projektni Menadžer',
    description: 'Koordinira sve aspekte projekta od ponude do finalne primopredaje.',
  },
  {
    name: 'Stefan Ilić',
    role: 'Glavni Monter',
    description: 'Sa preko 10 godina na terenu, Stefan garantuje besprekorne montaže.',
  },
];

const certificates = [
  'ISO 9001:2015 - Sistem menadžmenta kvalitetom',
  'ISO 14001:2015 - Upravljanje zaštitom životne sredine',
  'OHSAS 18001 - Bezbednost i zdravlje na radu',
  'Sertifikat za rad sa nehrđajućim čelikom',
  'Licenca za izvođenje limarskih radova',
  'Sertifikat za rad na visini',
];

const About = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const [teamIndex, setTeamIndex] = useState(0);

  const nextTeam = () => setTeamIndex((prev) => (prev + 1) % team.length);
  const prevTeam = () => setTeamIndex((prev) => (prev - 1 + team.length) % team.length);

  return (
    <Layout>
      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-steel-dark/30 via-background to-primary/5" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span className="text-primary font-medium uppercase tracking-widest text-sm">
              O nama
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
              TRADICIJA <span className="text-gradient">KVALITETA</span>
              <br />OD 2003. GODINE
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
              MetalPro je porodična firma sa tradicijom koja se prenosi generacijama. 
              Započeli smo kao mala radionica, a danas smo jedan od vodećih limarskih 
              servisa u regionu sa modernom opremom i stručnim timom od 15 profesionalaca.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-card border border-border text-center"
              >
                <p className="font-display text-4xl md:text-5xl font-bold text-gradient">
                  {stat.value}
                </p>
                <p className="text-muted-foreground mt-2">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                NAŠA <span className="text-gradient">PRIČA</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Sve je počelo 2003. godine u maloj radionici u predgrađu Beograda, kada je 
                  Miloš Stanković, sa svega 22 godine i ogromnom strašću prema zanatskom radu, 
                  odlučio da pokrene sopstveni posao. Sa jednom savijačicom i nepokoleljivom 
                  voljom, počeo je da gradi reputaciju koja će postati sinonim za kvalitet.
                </p>
                <p>
                  Prvih godina, Miloš je radio sam, često do kasno u noć, učeći svaki aspekt 
                  limarskog zanata. Njegova posvećenost detaljima i odbijanje da prihvati 
                  "dovoljno dobro" kao standard, brzo su privukli pažnju. Klijenti su dolazili 
                  po preporuci, a svaki završeni projekat donosio je novi izazov.
                </p>
                <p>
                  Do 2010. godine, firma je imala 5 zaposlenih i sopstvenu radionicu sa modernom 
                  opremom. Investirali smo u prvu CNC mašinu za savijanje, što nam je omogućilo 
                  da preuzimamo kompleksnije projekte sa većom preciznošću.
                </p>
                <p>
                  Danas, MetalPro zapošljava 15 vrhunskih stručnjaka i poseduje najsavremeniju 
                  opremu u regionu. Ali jedna stvar se nikada nije promenila - naša posvećenost 
                  kvalitetu i zadovoljstvu svakog klijenta.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-primary rounded-3xl blur-3xl opacity-20" />
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop"
                  alt="Naša radionica"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="font-display text-2xl font-bold text-foreground">
                    Od 2003. do danas
                  </p>
                  <p className="text-muted-foreground">Više od 20 godina posvećenosti zanatu</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-2xl bg-card border border-border"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Naša Misija</h3>
              <p className="text-muted-foreground leading-relaxed">
                Pružiti svakom klijentu limarske usluge najvišeg kvaliteta, koristeći 
                najsavremeniju tehnologiju i tradicionalno znanje. Želimo da svaki projekat 
                bude dokaz naše posvećenosti zanatu i da traje generacijama. Naš cilj je da 
                budemo sinonim za pouzdanost, kvalitet i profesionalizam u limarskoj industriji.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 rounded-2xl bg-card border border-border"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Naša Vizija</h3>
              <p className="text-muted-foreground leading-relaxed">
                Postati vodeća limarska kompanija u Srbiji i regionu, prepoznata po inovativnosti, 
                kvalitetu i odnosu prema klijentima. Želimo da postavimo nove standarde u industriji 
                i da budemo prvi izbor za sve, od pojedinačnih vlasnika kuća do velikih industrijskih 
                klijenata. Naša vizija uključuje i edukaciju nove generacije limarskih majstora.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-primary font-medium uppercase tracking-widest text-sm">
              Naše vrednosti
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4">
              PRINCIPI PO KOJIMA <span className="text-gradient">RADIMO</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-background border border-border text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Naš tim
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4">
              STRUČNJACI IZA <span className="text-gradient">USPEHA</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Naš tim čine iskusni profesionalci koji dele istu strast prema kvalitetu i 
              usavršavanju. Upoznajte ljude koji čine MetalPro posebnim.
            </p>
          </motion.div>

          {/* Desktop Grid */}
          <div className="hidden lg:grid grid-cols-5 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                  <User className="w-12 h-12 text-muted-foreground" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground">{member.name}</h3>
                <p className="text-primary text-sm font-medium">{member.role}</p>
                <p className="text-muted-foreground text-sm mt-2">{member.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="lg:hidden">
            <motion.div
              key={teamIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="text-center p-8 rounded-2xl bg-card border border-border"
            >
              <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                <User className="w-12 h-12 text-muted-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">{team[teamIndex].name}</h3>
              <p className="text-primary font-medium">{team[teamIndex].role}</p>
              <p className="text-muted-foreground mt-4">{team[teamIndex].description}</p>
            </motion.div>

            <div className="flex items-center justify-between mt-6">
              <div className="flex gap-2">
                {team.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setTeamIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === teamIndex ? 'w-8 bg-primary' : 'bg-muted-foreground/30'
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <Button variant="steel" size="icon" onClick={prevTeam} className="rounded-full">
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button variant="steel" size="icon" onClick={nextTeam} className="rounded-full">
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-primary font-medium uppercase tracking-widest text-sm">
              Sertifikati i standardi
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4">
              GARANCIJA <span className="text-gradient">KVALITETA</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Posedujemo sve potrebne sertifikate i licence za obavljanje limarskih radova 
              po najvišim standardima kvaliteta i bezbednosti.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
                <span className="text-foreground font-medium">{cert}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              ŽELITE DA RADITE SA <span className="text-gradient">NAMA?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Kontaktirajte nas danas i saznajte kako možemo da vam pomognemo sa vašim projektom.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/kontakt">Kontaktirajte Nas</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
