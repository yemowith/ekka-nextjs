import { VisionMissionSection } from "@/components/sections/VisionMissionSection";
import { HistorySection } from "@/components/sections/HistorySection";
import { ValuesSection } from "@/components/sections/ValuesSection";

export default function Kurumsal() {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-anthracite-900 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-8 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              EKKA GAYRİMENKUL
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-8">
              Gayrimenkul ve enerji sektörlerinde öncü bir güç olarak,
              kuruluşumuzdan bu yana mükemmellik, yenilik ve sürdürülebilir
              büyümeye odaklanıyoruz.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full"></div>
          </div>
        </div>
      </div>
      <VisionMissionSection />
      <ValuesSection />
    </div>
  );
}
