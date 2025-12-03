import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote, Star, User } from 'lucide-react';
import { SwipeCarousel } from '@/components/ui/swipe-carousel';

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

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <div className="p-6 md:p-8 rounded-2xl bg-card border border-border h-full">
    <Quote className="w-8 h-8 text-primary/30 mb-3" />

    <div className="flex gap-1 mb-3">
      {[...Array(testimonial.rating)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
      ))}
    </div>

    <p className="text-foreground/90 leading-relaxed mb-4 text-sm md:text-base">
      "{testimonial.content}"
    </p>

    <div className="flex items-center gap-3 pt-3 border-t border-border">
      <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
        <User className="w-5 h-5 text-muted-foreground" />
      </div>
      <div>
        <p className="font-display font-bold text-foreground text-sm">{testimonial.name}</p>
        <p className="text-xs text-muted-foreground">{testimonial.role}</p>
      </div>
    </div>
  </div>
);

export const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-24 bg-background relative overflow-hidden">
      <div className="absolute top-20 left-10 opacity-5">
        <Quote className="w-48 md:w-64 h-48 md:h-64 text-primary" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16 space-y-4"
        >
          <span className="text-primary font-medium uppercase tracking-widest text-sm">
            Iskustva Klijenata
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            ŠTA KAŽU <span className="text-gradient">NAŠI KLIJENTI</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Naši zadovoljni klijenti su naša najbolja preporuka.
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
            >
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </div>

        {/* Mobile/Tablet Swipe Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="lg:hidden"
        >
          <SwipeCarousel>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-1">
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </SwipeCarousel>
          <p className="text-center text-muted-foreground text-sm mt-4">
            ← Prevucite za više →
          </p>
        </motion.div>
      </div>
    </section>
  );
};
