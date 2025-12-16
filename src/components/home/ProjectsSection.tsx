import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { SwipeCarousel } from '@/components/ui/swipe-carousel';
import crniKrovLivada from '@/assets/crni_krov_livada.jpg';

const projects = [
  {
    title: 'Porodična Kuća - Krov',
    category: 'Krovne konstrukcije',
    description: 'Kompletna krovna konstrukcija sa profilisanim limom u crnoj boji. Precizna izrada i montaža.',
    image: crniKrovLivada,
  },
  {
    title: 'Stambeni Kompleks Novi Beograd',
    category: 'Oluci i opšivke',
    description: 'Sistem oluka i opšivki za stambeni kompleks od 8 zgrada. Preko 3km olučnih cevi i horizontala.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
  },
  {
    title: 'Industrijska Hala Zemun',
    category: 'Krovne konstrukcije',
    description: 'Kompletna krovna konstrukcija za industrijsku halu od 2500m². Korišćen trapezni lim sa termoizolacijom.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop',
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

const ProjectCard = ({ project }: { project: typeof projects[0] }) => (
  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 p-6">
      <span className="text-primary text-sm font-medium uppercase tracking-wider">
        {project.category}
      </span>
      <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mt-1">
        {project.title}
      </h3>
      <p className="text-muted-foreground text-sm mt-2">
        {project.description}
      </p>
    </div>
  </div>
);

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-24 bg-card relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16 space-y-4"
        >
          <span className="text-primary font-medium uppercase tracking-widest text-sm">
            Portfolio
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            NAŠI <span className="text-gradient">PROJEKTI</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Pogledajte neke od naših uspešno realizovanih projekata.
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

              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/90 to-transparent group-hover:opacity-0 transition-opacity">
                <h3 className="font-display text-lg font-bold text-foreground">
                  {project.title}
                </h3>
              </div>
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
            {projects.map((project, index) => (
              <div key={index} className="px-1">
                <ProjectCard project={project} />
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
