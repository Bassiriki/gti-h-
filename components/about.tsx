"use client";

import { ArrowRight } from "lucide-react";

const items = [
  {
    number: "01",
    title: "Notre Vision",
    description:
      "Devenir un acteur majeur de la logistique intégrée et du commerce en Afrique de l'Ouest, en alliant fiabilité, professionnalisme et innovation.",
    image: "/images/hero-logistics.jpg",
  },
  {
    number: "02",
    title: "Notre Mission",
    description:
      "Offrir à nos partenaires et clients des solutions efficaces, rapides et économiques, adaptées à leurs besoins spécifiques dans un environnement concurrentiel.",
    image: "/images/transit-douane.jpg",
  },
  {
    number: "03",
    title: "Nos Valeurs",
    description:
      "Intégrité et transparence, efficacité et rapidité, respect des engagements, innovation et amélioration continue.",
    image: "/images/transport-terrestre.jpg",
  },
];

export function About() {
  return (
    <section id="a-propos" className="py-24 lg:py-32 bg-white scroll-mt-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header - Ant Design Style */}
        <div className="flex flex-col lg:flex-row gap-12 lg:items-start mb-20">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[2px] w-8 bg-secondary rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                Qui sommes-nous
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-semibold text-zinc-900 mb-4 leading-tight tracking-tight">
              Un groupe ouest-africain <br />
              <span className="text-secondary">dynamique et engagé</span>
            </h2>
          </div>
          <div className="flex-1 lg:max-w-2xl pt-2">
            <p className="text-lg text-zinc-500 leading-relaxed font-normal">
              <strong className="text-zinc-900 font-semibold">Groupe Torodo International Holding S.A.R.L</strong> est
              une structure spécialisée dans le transit, la logistique,
              le transport et le commerce général. Fortement implantée en Afrique de l&apos;Ouest,
              nous accompagnons nos clients avec une expertise reconnue et des solutions sur mesure.
            </p>
          </div>
        </div>

        {/* Cards Grid - Ant Design Style */}
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-zinc-50/50 rounded-2xl border border-zinc-200/60 p-8 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:bg-white hover:border-secondary/30 transition-all duration-300"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-4xl font-bold text-zinc-200 group-hover:text-secondary/20 transition-colors">
                    {item.number}
                  </span>
                  <div className="h-10 w-10 bg-white rounded-lg flex items-center justify-center border border-zinc-100 shadow-sm">
                    <ArrowRight className="h-4 w-4 text-secondary" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-zinc-900 uppercase tracking-wider mb-4">
                  {item.title}
                </h3>

                <p className="text-zinc-500 leading-relaxed text-[15px] font-normal">
                  {item.description}
                </p>

                <div className="mt-8 pt-8 border-t border-zinc-100/80">
                  <div className="relative aspect-video rounded-xl overflow-hidden hover:opacity-100 transition-all duration-500">
                    <img src={item.image} alt={item.title} className="object-cover w-full h-full" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
