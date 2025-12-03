import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    name: 'Marko Petrović',
    role: 'Vlasnik građevinske firme',
    content: 'Sarađujemo sa MetalPro već 5 godina na različitim projektima. Njihova preciznost i profesionalizam su na zavidnom nivou. Rokovi se uvek poštuju, a kvalitet je konstantno vrhunski.',
    rating: 5,
  },
  {
    name: 'Ana Jovanović',
    role: 'Arhitekta',
    content: 'Kada imam specifične zahteve za limarske radove, MetalPro je moj prvi izbor. Razumeju arhitektonske potrebe i mogu da realizuju i najsloženije detalje. Preporučujem bez rezerve.',
    rating: 5,
  },
  {
    name: 'Stefan Nikolić',
    role: 'Direktor hotela',
    content: 'Kompletna sanacija krova i oluka našeg hotela je obavljena brzo i efikasno. Tim je bio profesionalan, a radovi su završeni bez remećenja rada hotela. Izuzetno zadovoljni.',
    rating: 5,
  },
  {
    name: 'Jelena Stojanović',
    role: 'Vlasnica kuće',
    content: 'Posle mnogo loših iskustava sa drugim majstorima, konačno sam pronašla pouzdanog partnera. Novi oluk i opšivke izgledaju fantastično i funkcionišu savršeno već drugu sezonu.',
    rating: 5,
  },
  {
    name: 'Dragan Ilić',
    role: 'Upravnik stambene zgrade',
    content: 'MetalPro je obavio kompletnu sanaciju krova naše zgrade. Sve stanare su redovno obaveštavali o napretku radova. Cena je bila konkurentna, a kvalitet iznad očekivanja.',
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={ref} className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 left-10 opacity-5">
        <Quote className="w-64 h-64 text-primary" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <span className="text-primary font-medium uppercase tracking-widest text-sm">
            Iskustva Klijenata
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            ŠTA KAŽU <span className="text-gradient">NAŠI KLIJENTI</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Naši zadovoljni klijenti su naša najbolja preporuka. Pročitajte šta kažu o 
            saradnji sa nama.
          </p>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="h-full p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300">
                {/* Quote icon */}
                <Quote className="w-10 h-10 text-primary/30 mb-4" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground/90 leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                    <User className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile/Tablet Carousel */}
        <div className="lg:hidden">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="p-8 rounded-2xl bg-card border border-border"
            >
              <Quote className="w-10 h-10 text-primary/30 mb-4" />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-foreground/90 leading-relaxed mb-6 text-lg">
                "{testimonials[currentIndex].content}"
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <User className="w-6 h-6 text-muted-foreground" />
                </div>
                <div>
                  <p className="font-display font-bold text-foreground">{testimonials[currentIndex].name}</p>
                  <p className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-6">
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex ? 'w-8 bg-primary' : 'bg-muted-foreground/30'
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <Button
                  variant="steel"
                  size="icon"
                  onClick={prevSlide}
                  className="rounded-full"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button
                  variant="steel"
                  size="icon"
                  onClick={nextSlide}
                  className="rounded-full"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
