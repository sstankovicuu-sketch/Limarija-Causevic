import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Shield, Award, Clock, ChevronDown, Wrench, Ruler, Building2 } from 'lucide-react';

const features = [
  { icon: Shield, text: 'Garancija kvaliteta' },
  { icon: Award, text: '20+ godina iskustva' },
  { icon: Clock, text: 'Brza realizacija' },
];

const quickServices = [
  { icon: Wrench, name: 'Obrada lima' },
  { icon: Ruler, name: 'Precizno savijanje' },
  { icon: Building2, name: 'Krovne konstrukcije' },
];

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 hero-overlay" />
        {/* Additional gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-24 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">Profesionalni limarski radovi</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-foreground">PRECIZNOST</span>
                <br />
                <span className="text-gradient">U SVAKOM</span>
                <br />
                <span className="text-foreground">DETALJU</span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-foreground/80 max-w-xl leading-relaxed"
            >
              Specijalizovani smo za vrhunske limarske radove sa višedecenijskim iskustvom. 
              Od precizne obrade lima do kompletnih krovnih sistema - garantujemo kvalitet 
              koji traje generacijama.
            </motion.p>

            {/* Feature Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 backdrop-blur-sm border border-border"
                >
                  <feature.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">{feature.text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button variant="hero" size="xl" asChild>
                <Link to="/kontakt">Zatražite Ponudu</Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/usluge">Naše Usluge</Link>
              </Button>
            </motion.div>
          </div>

          {/* Right Content - Quick Services Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-primary rounded-3xl blur-3xl opacity-20" />
              
              <div className="relative bg-card/80 backdrop-blur-xl rounded-2xl border border-border p-8 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <Wrench className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground">Brze Usluge</h3>
                    <p className="text-sm text-muted-foreground">Pogledajte šta nudimo</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {quickServices.map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group cursor-pointer"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <service.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-medium text-foreground">{service.name}</span>
                    </motion.div>
                  ))}
                </div>

                <Link 
                  to="/usluge"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-primary/30 text-primary hover:bg-primary/10 transition-colors font-medium"
                >
                  Pogledaj sve usluge
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-xs uppercase tracking-widest">Skrolujte</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
