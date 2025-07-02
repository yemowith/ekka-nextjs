import { ServicesHero } from '@/components/sections/ServicesHero';
import { ServiceDetailSection } from '@/components/sections/ServiceDetailSection';

export default function Services() {
  return (
    <div className="pt-20">
      <ServicesHero />
      <ServiceDetailSection />
    </div>
  );
}