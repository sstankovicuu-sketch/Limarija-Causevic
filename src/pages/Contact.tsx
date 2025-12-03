import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { 
  Phone, Mail, MapPin, Clock, Send, CheckCircle, 
  MessageSquare, Building2, User, FileText
} from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    title: 'Telefon',
    primary: '+381 60 123 4567',
    secondary: '+381 11 234 5678',
    action: 'tel:+381601234567',
  },
  {
    icon: Mail,
    title: 'Email',
    primary: 'info@metalpro.rs',
    secondary: 'ponude@metalpro.rs',
    action: 'mailto:info@metalpro.rs',
  },
  {
    icon: MapPin,
    title: 'Adresa',
    primary: 'Industrijska zona bb',
    secondary: '11000 Beograd, Srbija',
    action: '#map',
  },
  {
    icon: Clock,
    title: 'Radno vreme',
    primary: 'Pon - Pet: 07:00 - 17:00',
    secondary: 'Sub: 08:00 - 14:00',
    action: null,
  },
];

const Contact = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Poruka poslata!",
      description: "Hvala vam na interesovanju. Javićemo vam se u najkraćem roku.",
    });
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: '',
    });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-steel-dark/30 via-background to-primary/5" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span className="text-primary font-medium uppercase tracking-widest text-sm">
              Kontakt
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
              STUPITE U <span className="text-gradient">KONTAKT</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
              Imate pitanje, potrebna vam je ponuda ili želite da zakažete konsultacije? 
              Tu smo za vas. Javite nam se na bilo koji od navedenih načina i očekujte 
              brz odgovor našeg tima.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {info.action ? (
                  <a
                    href={info.action}
                    className="block h-full p-6 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all group"
                  >
                    <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                      <info.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-display font-bold text-foreground mb-2">{info.title}</h3>
                    <p className="text-foreground font-medium">{info.primary}</p>
                    <p className="text-muted-foreground text-sm">{info.secondary}</p>
                  </a>
                ) : (
                  <div className="h-full p-6 rounded-2xl bg-background border border-border">
                    <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-4">
                      <info.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-display font-bold text-foreground mb-2">{info.title}</h3>
                    <p className="text-foreground font-medium">{info.primary}</p>
                    <p className="text-muted-foreground text-sm">{info.secondary}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form & Map Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="p-8 rounded-2xl bg-card border border-border">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center">
                    <MessageSquare className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h2 className="font-display text-2xl font-bold text-foreground">
                      Pošaljite nam poruku
                    </h2>
                    <p className="text-muted-foreground">Odgovaramo u roku od 24h</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground flex items-center gap-2">
                        <User className="w-4 h-4 text-primary" />
                        Ime i prezime *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Vaše ime"
                        required
                        className={`bg-background border-border transition-all duration-300 ${
                          focusedField === 'name' ? 'border-primary ring-2 ring-primary/20' : ''
                        }`}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground flex items-center gap-2">
                        <Mail className="w-4 h-4 text-primary" />
                        Email *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="vas@email.com"
                        required
                        className={`bg-background border-border transition-all duration-300 ${
                          focusedField === 'email' ? 'border-primary ring-2 ring-primary/20' : ''
                        }`}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground flex items-center gap-2">
                        <Phone className="w-4 h-4 text-primary" />
                        Telefon *
                      </label>
                      <Input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="+381 60 123 4567"
                        required
                        className={`bg-background border-border transition-all duration-300 ${
                          focusedField === 'phone' ? 'border-primary ring-2 ring-primary/20' : ''
                        }`}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-primary" />
                        Firma (opciono)
                      </label>
                      <Input
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('company')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Naziv firme"
                        className={`bg-background border-border transition-all duration-300 ${
                          focusedField === 'company' ? 'border-primary ring-2 ring-primary/20' : ''
                        }`}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground flex items-center gap-2">
                      <FileText className="w-4 h-4 text-primary" />
                      Tip usluge
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('service')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full h-10 px-3 rounded-md bg-background border border-border text-foreground transition-all duration-300 ${
                        focusedField === 'service' ? 'border-primary ring-2 ring-primary/20' : ''
                      }`}
                    >
                      <option value="">Izaberite uslugu...</option>
                      <option value="obrada">Obrada lima</option>
                      <option value="savijanje">Savijanje lima</option>
                      <option value="krov">Krovne konstrukcije</option>
                      <option value="oluci">Oluci i opšivke</option>
                      <option value="industrijski">Industrijski radovi</option>
                      <option value="po-meri">Izrada po meri</option>
                      <option value="ostalo">Ostalo</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-primary" />
                      Poruka *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Opišite vaš projekat ili pitanje..."
                      rows={5}
                      required
                      className={`bg-background border-border transition-all duration-300 resize-none ${
                        focusedField === 'message' ? 'border-primary ring-2 ring-primary/20' : ''
                      }`}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="xl" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Slanje...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Pošaljite Poruku
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Map */}
              <div id="map" className="rounded-2xl overflow-hidden border border-border h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d181149.76447049954!2d20.286430!3d44.815102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7aa3d7b53fbd%3A0x1db8c56dc79d7cd1!2sBelgrade%2C%20Serbia!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokacija"
                />
              </div>

              {/* Why Contact Us */}
              <div className="p-8 rounded-2xl bg-card border border-border">
                <h3 className="font-display text-xl font-bold text-foreground mb-6">
                  Zašto nas kontaktirati?
                </h3>
                <div className="space-y-4">
                  {[
                    'Besplatna procena i savet stručnjaka',
                    'Brz odgovor - obično u roku od nekoliko sati',
                    'Transparentne ponude bez skrivenih troškova',
                    'Fleksibilni termini za razgovor i posetu',
                    'Mogućnost besplatnog izlaska na teren',
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid sm:grid-cols-2 gap-4">
                <Button variant="heroOutline" size="lg" className="w-full" asChild>
                  <a href="tel:+381601234567">
                    <Phone className="w-5 h-5" />
                    Pozovite Odmah
                  </a>
                </Button>
                <Button variant="heroOutline" size="lg" className="w-full" asChild>
                  <a href="mailto:info@metalpro.rs">
                    <Mail className="w-5 h-5" />
                    Pošaljite Email
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ or Additional Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Brza pitanja?
            </h2>
            <p className="text-muted-foreground mb-8">
              Pozovite nas direktno za hitne upite ili brze informacije.
            </p>
            <Button variant="hero" size="xl" asChild>
              <a href="tel:+381601234567" className="group">
                <Phone className="w-5 h-5" />
                +381 60 123 4567
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
