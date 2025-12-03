import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Industrijska Hala Zemun',
    category: 'Krovne konstrukcije',
    description: 'Kompletna krovna konstrukcija za industrijsku halu od 2500m². Korišćen trapezni lim sa termoizolacijom.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop',
  },
  {
    title: 'Stambeni Kompleks Novi Beograd',
    category: 'Oluci i opšivke',
    description: 'Sistem oluka i opšivki za stambeni kompleks od 8 zgrada. Preko 3km olučnih cevi i horizontala.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
  },
  {
    title: 'Ventilacioni Sistem Fabrika',
    category: 'Industrijski radovi',
    description: 'Projektovanje i izrada kompletnog ventilacionog sistema za prehrambenu industriju sa INOX elementima.',
    image: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=800&h=600&fit=crop',
  },
  {
    title: 'Hotel Spa Centar',
    category: 'Specijalne izrade',
    description: 'Dekorativni limarski elementi za wellness centar hotela - fasadne obloge, dekorativni paneli.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
  },
  {
    title: 'Sportska Hala Čukarica',
    category: 'Krovne konstrukcije',
    description: 'Kompletan krovni sistem sportske hale sa velikim rasponima i specijalnim sistemom odvodnjavanja.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop',
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section ref={ref} className="py-24 bg-card relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <span className="text-primary font-medium uppercase tracking-widest text-sm">
            Portfolio
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            NAŠI <span className="text-gradient">PROJEKTI</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Pogledajte neke od naših uspešno realizovanih projekata. Svaki projekat predstavlja 
            priču o posvećenosti kvalitetu i zadovoljnom klijentu.
          </p>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {projects.slice(0, 6).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-primary text-sm font-medium uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="font-display text-xl font-bold text-foreground mt-1">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-2 line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Default overlay (always visible) */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/90 to-transparent group-hover:opacity-0 transition-opacity">
                <h3 className="font-display text-lg font-bold text-foreground">
                  {project.title}
                </h3>
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
            className="relative"
          >
            <div className="overflow-hidden rounded-2xl">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative aspect-[4/3]">
                  <img
                    src={projects[currentIndex].image}
                    alt={projects[currentIndex].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-primary text-sm font-medium uppercase tracking-wider">
                      {projects[currentIndex].category}
                    </span>
                    <h3 className="font-display text-2xl font-bold text-foreground mt-1">
                      {projects[currentIndex].title}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-2">
                      {projects[currentIndex].description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-6">
              <div className="flex gap-2">
                {projects.map((_, index) => (
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
