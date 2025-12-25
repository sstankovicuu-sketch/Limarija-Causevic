import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-card border-t border-border">
      {/* Decorative top line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary" />
      
      <div className="container mx-auto px-4 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="space-y-4 md:space-y-6">
            <Link to="/" className="flex items-center">
              <div className="flex flex-col">
                <span className="font-display text-lg md:text-xl font-bold text-foreground tracking-wide">
                  Limarija <span className="text-primary">Čaušević</span>
                </span>
                <span className="text-xs text-muted-foreground tracking-widest uppercase">
                  Limarski Radovi
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Vaš pouzdan partner za sve limarske radove. Preko 20 godina iskustva u izradi 
              kvalitetnih limarskih konstrukcija i rešenja za krov.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Linkedin].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-display text-lg font-bold text-foreground uppercase tracking-wider">
              Brzi Linkovi
            </h4>
            <nav className="space-y-3">
              {[
                { name: 'Početna', path: '/' },
                { name: 'O nama', path: '/o-nama' },
                { name: 'Naše usluge', path: '/usluge' },
                { name: 'Kontakt', path: '/kontakt' },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="font-display text-lg font-bold text-foreground uppercase tracking-wider">
              Naše Usluge
            </h4>
            <nav className="space-y-3">
              {[
                'Obrada lima',
                'Krovne konstrukcije',
                'Oluci i opšivke',
                'Industrijski radovi',
                'Izrade po meri',
              ].map((service) => (
                <Link
                  key={service}
                  to="/usluge"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  {service}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-display text-lg font-bold text-foreground uppercase tracking-wider">
              Kontakt Info
            </h4>
            <div className="space-y-4">
              <a href="tel:+381653400631" className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-5 h-5 mt-0.5 text-primary" />
                <div>
                  <p className="font-medium text-foreground">065 3400 631</p>
                  <p className="text-sm">Pozovite nas</p>
                </div>
              </a>
              <a href="mailto:info@metalpro.rs" className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5 mt-0.5 text-primary" />
                <div>
                  <p className="font-medium text-foreground">info@metalpro.rs</p>
                  <p className="text-sm">Pišite nam</p>
                </div>
              </a>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 mt-0.5 text-primary" />
                <div>
                  <p className="font-medium text-foreground">Industrijska zona bb</p>
                  <p className="text-sm">11000 Beograd, Srbija</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-muted-foreground">
                <Clock className="w-5 h-5 mt-0.5 text-primary" />
                <div>
                  <p className="font-medium text-foreground">Pon - Pet: 07:00 - 17:00</p>
                  <p className="text-sm">Sub: 08:00 - 14:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-xs md:text-sm text-center md:text-left">
              © {currentYear} Limarija Čaušević. Sva prava zadržana.
            </p>
            <div className="flex gap-4 md:gap-6 text-xs md:text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Politika privatnosti</a>
              <a href="#" className="hover:text-primary transition-colors">Uslovi korišćenja</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
