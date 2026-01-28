"use client";

import { ArrowUpRight } from "lucide-react";

const items = [
  {
    number: "01",
    title: "NOTRE VISION",
    description:
      "Devenir un acteur majeur de la logistique intégrée et du commerce en Afrique de l'Ouest, en alliant fiabilité, professionnalisme et innovation.",
    image: "/images/hero-logistics.jpg",
  },
  {
    number: "02",
    title: "NOTRE MISSION",
    description:
      "Offrir à nos partenaires et clients des solutions efficaces, rapides et économiques, adaptées à leurs besoins spécifiques dans un environnement concurrentiel.",
    image: "/images/transit-douane.jpg",
  },
  {
    number: "03",
    title: "NOS VALEURS",
    description:
      "Intégrité et transparence, efficacité et rapidité, respect des engagements, innovation et amélioration continue.",
    image: "/images/transport-terrestre.jpg",
  },
];

export function About() {
  return (
    <section id="a-propos" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row gap-12 lg:items-start mb-20">
          <div className="flex-1">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
              Un groupe ouest-africain <br />
              <span className="text-secondary border-b-4 border-secondary/20 pb-2">
                dynamique
              </span>
            </h2>
          </div>
          <div className="flex-1 lg:max-w-2xl">
            <p className="text-lg text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Groupe Torodo International Holding S.A.R.L</strong> est
              un groupe spécialisé dans les domaines du transit, de la logistique,
              du transport, du commerce général et des prestations de services
              multisectorielles. Fortement implantée en Afrique de l&apos;Ouest,
              l&apos;entreprise dispose de représentations dans plusieurs pays
              stratégiques.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="group relative h-[500px] w-full overflow-hidden bg-zinc-900 shadow-xl"
            >
              {/* Background with Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-20" />

              {/* Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundColor: "#1a1a1a",
                }}
              />

              {/* Content Container */}
              <div className="relative z-30 h-full flex flex-col justify-between p-8">
                {/* Header: Number & Arrow */}
                <div className="flex items-start justify-between">
                  <span className="text-7xl font-bold text-secondary font-sans leading-none tracking-tighter">
                    {item.number}
                  </span>
                  <ArrowUpRight className="h-8 w-8 text-secondary/80 stroke-[1.5] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>

                {/* Footer: Title & Description */}
                <div className="transform transition-all duration-300 group-hover:-translate-y-2">
                  <h3 className="text-3xl font-bold text-white uppercase leading-tight mb-2 max-w-[80%]">
                    {item.title}
                  </h3>
                  <div className="h-1 w-12 bg-secondary mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <p className="text-gray-300 text-sm leading-relaxed opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-500 ease-in-out">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
