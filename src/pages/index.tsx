import PageLayout from '@/components/layouts/pageLayout';
import { AnimatedRole } from '@/components/views/home/Role';
import Hero from '@/components/views/home/Hero';
import { About } from '@/components/views/home/About';

export default function Home() {
  return (
    <PageLayout>
      <Hero />
    </PageLayout>
  );
}
