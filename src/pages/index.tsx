import PageLayout from '@/components/layouts/pageLayout';
import Hero from '@/components/views/home/Hero';
import AboutSection  from '@/components/views/home/About';

export default function Home() {
  return (
    <PageLayout>
      <Hero />
      <AboutSection />
    </PageLayout>
  );
}
