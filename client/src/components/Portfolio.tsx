import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * Portfolio Component - Conceptions
 * Displays a gallery of architectural designs and concepts
 * Design: Modern, professional, with smooth animations and hover effects
 */

interface Design {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  details: string[];
}

const designs: Design[] = [
  {
    id: 1,
    title: 'Conception Villa Moderne Luxe',
    category: 'Résidentiel',
    description: 'Design de villa contemporaine avec piscine et espaces verts',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663394203752/CJU3uYkCku3hDjZVxdYZcc/modern-villa-1-hPuYpY62DbkMZNLKj9LG2U.webp',
    details: ['Architecture moderne', 'Design piscine', 'Aménagement paysager']
  },
  {
    id: 2,
    title: 'Conception Immeuble Commercial',
    category: 'Commercial',
    description: 'Design de bâtiment de bureaux avec façade en verre',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663394203752/CJU3uYkCku3hDjZVxdYZcc/commercial-building-1-LwZWZwnd7yZKwM2Jdv34p9.webp',
    details: ['Façade moderne', 'Espaces ouverts', 'Durabilité']
  },
  {
    id: 3,
    title: 'Conception Complexe Résidentiel',
    category: 'Résidentiel',
    description: 'Design d\'ensemble d\'appartements avec espaces communs',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663394203752/CJU3uYkCku3hDjZVxdYZcc/residential-complex-1-TSLtyhcG4augyjvK9J4fZQ.webp',
    details: ['Multiples unités', 'Espaces verts', 'Équipements']
  },
  {
    id: 4,
    title: 'Conception Rénovation Intérieure',
    category: 'Rénovation',
    description: 'Design de transformation complète d\'un espace intérieur',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663394203752/CJU3uYkCku3hDjZVxdYZcc/renovation-project-1-hG6NhtUgs28WCRNDZL64pb.webp',
    details: ['Design moderne', 'Finitions luxe', 'Efficacité énergétique']
  }
];

export default function Portfolio() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [selectedDesign, setSelectedDesign] = React.useState<Design | null>(null);

  const nextDesign = () => {
    setCurrentIndex((prev) => (prev + 1) % designs.length);
  };

  const prevDesign = () => {
    setCurrentIndex((prev) => (prev - 1 + designs.length) % designs.length);
  };

  const visibleDesigns = [
    designs[currentIndex],
    designs[(currentIndex + 1) % designs.length],
    designs[(currentIndex + 2) % designs.length]
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 id="conceptions" className="text-5xl font-bold text-gray-900 mb-4 cursor-pointer hover:text-red-600 transition-colors">Nos Conceptions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez nos concepts de construction résidentielle, commerciale et de rénovation
          </p>
        </div>

        {/* Featured Project */}
        <div className="mb-16">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
            <img
              src={designs[currentIndex].image}
              alt={designs[currentIndex].title}
              className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
              <h3 className="text-4xl font-bold text-white mb-2 cursor-pointer hover:underline">{designs[currentIndex].title}</h3>
              <p className="text-lg text-gray-200">{designs[currentIndex].description}</p>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevDesign}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextDesign}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Design Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visibleDesigns.map((design, index) => (
            <div
              key={design.id}
              className="group cursor-pointer"
              onClick={() => setSelectedDesign(design)}
            >
              <div className="relative rounded-xl overflow-hidden shadow-lg mb-4 h-64">
                <img
                  src={design.image}
                  alt={design.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <span className="inline-block bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-2">
                      {design.category}
                    </span>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors cursor-pointer hover:underline">
                {design.title}
              </h3>
              <p className="text-gray-600 text-sm mt-2">{design.description}</p>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-12">
          {designs.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-red-600 w-8' : 'bg-gray-300 w-3 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <button className="bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl">
            Voir Plus de Conceptions
          </button>
        </div>
      </div>
    </section>
  );
}
