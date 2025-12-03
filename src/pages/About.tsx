import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Target, Eye, Shield, Clock, CheckCircle, Lightbulb, Heart, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { AnimatedCounter } from '@/components/about/AnimatedCounter';
import { SwipeCarousel } from '@/components/ui/swipe-carousel';

const stats = [
  { value: '20+', label: 'Godina iskustva' },
  { value: '2500+', label: 'Realizovanih projekata' },
  { value: '98%', label: 'Zadovoljnih klijenata' },
  { value: '15', label: 'Stručnjaka u timu' },
];

const values = [
  { icon: Shield, title: 'Kvalitet', description: 'Nikada ne pravimo kompromise kada je kvalitet u pitanju.' },
  { icon: Clock, title: 'Poštovanje rokova', description: 'Rok je svetinja. Isporučujemo na vreme.' },
  { icon: Heart, title: 'Posvećenost', description: 'Svaki projekat tretiramo kao da je naš.' },
  { icon: Lightbulb, title: 'Inovativnost', description: 'Stalno pratimo nove tehnologije i metode.' },
];

const team = [
  { name: 'Miloš Stanković', role: 'Vlasnik & Glavni Majstor', description: 'Sa 25 godina iskustva, Miloš je stub naše kompanije.' },
  { name: 'Dejan Pavlović', role: 'Vođa Tima za Krovove', description: 'Ekspert za krovne konstrukcije sa preko 15 godina iskustva.' },
  { name: 'Nikola Jovanović', role: 'CNC Operater', description: 'Zadužen za preciznu obradu na najsavremenijim mašinama.' },
  { name: 'Marko Petrović', role: 'Projektni Menadžer', description: 'Koordinira sve aspekte projekta od ponude do primopredaje.' },
  { name: 'Stefan Ilić', role: 'Glavni Monter', description: 'Sa preko 10 godina na terenu, garantuje besprekorne montaže.' },
];

const certificates = [
  'ISO 9001:2015 - Sistem menadžmenta kvalitetom',
  'ISO 14001:2015 - Upravljanje zaštitom životne sredine',
  'OHSAS 18001 - Bezbednost i zdravlje na radu',
  'Sertifikat za rad sa nehrđajućim čelikom',
  'Licenca za izvođenje limarskih radova',
  'Sertifikat za rad na visini',
];

const TeamCard = ({ member }: { member: typeof team[0] }) => (
  <div className="text-center p-6 rounded-2xl bg-card border border-border">
    <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mx-auto mb-3">
      <User className="w-10 h-10 text-muted-foreground" />
    </div>
    <h3 className="font-display text-lg font-bold text-foreground">{member.name}</h3>
    <p className="text-primary text-sm font-medium">{member.role}</p>
    <p className="text-muted-foreground text-sm mt-2">{member.description}</p>
  </div>
);

const ValueCard = ({ value, index }: { value: typeof values[0]; index: number }) => (
  <div className="p-4 rounded-xl bg-background border border-border text-center">
    <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mx-auto mb-3">
      <value.icon className="w-6 h-6 text-primary" />
    </div>
    <h3 className="font-display text-base font-bold text-foreground mb-1">{value.title}</h3>
    <p className="text-muted-foreground text-sm">{value.description}</p>
  </div>
);

const About = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <Layout>
      {/* Hero Section */}
      <section ref={heroRef} className="pt-28 pb-16 md:pt-32 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-steel-dark/30 via-background to-primary/5" />
        <div className="absolute top-20 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span className="text-primary font-medium uppercase tracking-widest text-sm">O nama</span>
            <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mt-3 mb-4">
              TRADICIJA <span className="text-gradient">KVALITETA</span><br />OD 2003. GODINE
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
              MetalPro je porodična firma sa tradicijom koja se prenosi generacijama. 
              Danas smo jedan od vodećih limarskih servisa u regionu.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10"
          >
            {stats.map((stat, index) => (
              <div key={index} className="p-4 md:p-6 rounded-xl bg-card border border-border text-center">
                <p className="font-display text-3xl md:text-4xl font-bold text-gradient">
                  <AnimatedCounter value={stat.value} duration={2000} />
                </p>
                <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Story Section - Compact */}
      <section className="py-16 md:py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                NAŠA <span className="text-gradient">PRIČA</span>
              </h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed text-sm md:text-base">
                <p>
                  Sve je počelo 2003. godine u maloj radionici u predgrađu Beograda, kada je 
                  Miloš Stanković, sa ogromnom strašću prema zanatskom radu, odlučio da pokrene sopstveni posao.
                </p>
                <p>
                  Njegova posvećenost detaljima brzo je privukla pažnju. Do 2010. godine, firma je imala 
                  5 zaposlenih i sopstvenu radionicu sa modernom opremom.
                </p>
                <p>
                  Danas, MetalPro zapošljava 15 vrhunskih stručnjaka i poseduje najsavremeniju 
                  opremu u regionu. Ali jedna stvar se nikada nije promenila - naša posvećenost kvalitetu.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop"
                  alt="Naša radionica"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-display text-xl font-bold text-foreground">Od 2003. do danas</p>
                  <p className="text-muted-foreground text-sm">Više od 20 godina posvećenosti zanatu</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Compact */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-card border border-border"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">Naša Misija</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Pružiti svakom klijentu limarske usluge najvišeg kvaliteta, koristeći 
                najsavremeniju tehnologiju i tradicionalno znanje.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 rounded-xl bg-card border border-border"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">Naša Vizija</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Postati vodeća limarska kompanija u Srbiji i regionu, prepoznata po inovativnosti, 
                kvalitetu i odnosu prema klijentima.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <span className="text-primary font-medium uppercase tracking-widest text-sm">Naše vrednosti</span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-2">
              PRINCIPI PO KOJIMA <span className="text-gradient">RADIMO</span>
            </h2>
          </motion.div>

          {/* Grid - 2x2 on mobile */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ValueCard value={value} index={index} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <span className="text-primary font-medium uppercase tracking-widest text-sm">Naš tim</span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-2">
              STRUČNJACI IZA <span className="text-gradient">USPEHA</span>
            </h2>
          </motion.div>

          {/* Desktop Grid */}
          <div className="hidden lg:grid grid-cols-5 gap-4">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <TeamCard member={member} />
              </motion.div>
            ))}
          </div>

          {/* Mobile/Tablet Swipe */}
          <div className="lg:hidden">
            <SwipeCarousel>
              {team.map((member, index) => (
                <div key={index} className="px-1">
                  <TeamCard member={member} />
                </div>
              ))}
            </SwipeCarousel>
            <p className="text-center text-muted-foreground text-sm mt-3">← Prevucite za više →</p>
          </div>
        </div>
      </section>

      {/* Certificates - With Swipe on Mobile */}
      <section className="py-16 md:py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <span className="text-primary font-medium uppercase tracking-widest text-sm">Sertifikati</span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-2">
              GARANCIJA <span className="text-gradient">KVALITETA</span>
            </h2>
          </motion.div>

          {/* Grid - works on all screens */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 p-3 md:p-4 rounded-xl bg-background border border-border"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground text-xs md:text-sm font-medium">{cert}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              ŽELITE DA RADITE SA <span className="text-gradient">NAMA?</span>
            </h2>
            <p className="text-muted-foreground mb-6">
              Kontaktirajte nas danas i saznajte kako možemo da vam pomognemo.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/kontakt">Kontaktirajte Nas</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
