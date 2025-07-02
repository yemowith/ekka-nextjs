import { VisionMissionSection } from '@/components/sections/VisionMissionSection';
import { TeamSection } from '@/components/sections/TeamSection';
import { HistorySection } from '@/components/sections/HistorySection';

export default function Corporate() {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About EKKA GAYRİMENKUL</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              A pioneering force in real estate and energy sectors, committed to excellence, 
              innovation, and sustainable growth since our establishment.
            </p>
          </div>
        </div>
      </div>
      <HistorySection />
      <VisionMissionSection />
      <TeamSection />
    </div>
  );
}