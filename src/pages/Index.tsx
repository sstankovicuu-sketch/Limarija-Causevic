import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { WhyUsSection } from '@/components/home/WhyUsSection';
import { ServicesPreviewSection } from '@/components/home/ServicesPreviewSection';
import { ProcessSection } from '@/components/home/ProcessSection';
import { ProjectsSection } from '@/components/home/ProjectsSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { CTASection } from '@/components/home/CTASection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <WhyUsSection />
      <ServicesPreviewSection />
      <ProcessSection />
      <ProjectsSection />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
