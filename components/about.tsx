"use client";

import { Target, Eye, Heart } from "lucide-react";

const values = [
  {
    icon: Eye,
    title: "Notre Vision",
    description:
      "Devenir un acteur majeur de la logistique intégrée et du commerce en Afrique de l'Ouest, en alliant fiabilité, professionnalisme et innovation.",
  },
  {
    icon: Target,
    title: "Notre Mission",
    description:
      "Offrir à nos partenaires et clients des solutions efficaces, rapides et économiques, adaptées à leurs besoins spécifiques dans un environnement concurrentiel.",
  },
  {
    icon: Heart,
    title: "Nos Valeurs",
    description:
      "Intégrité et transparence, efficacité et rapidité, respect des engagements, innovation et amélioration continue.",
  },
];

export function About() {
  return (
    <section id="a-propos" className="py-20 lg:py-32 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-1 w-12 bg-secondary" />
            <span className="text-secondary font-medium text-sm uppercase tracking-wider">
              À Propos de Nous
            </span>
            <div className="h-1 w-12 bg-secondary" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Un groupe ouest-africain <span className="text-primary">dynamique</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            GTI-HOLDING S.A.R.L est un groupe spécialisé dans les domaines du
            transit, de la logistique, du transport, du commerce général et des
            prestations de services multisectorielles. Fortement implantée en
            Afrique de l&apos;Ouest, l&apos;entreprise dispose de représentations dans
            plusieurs pays stratégiques.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-border"
            >
              <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <value.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Banner */}
        <div className="mt-16 bg-primary rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-2">
                5+
              </p>
              <p className="text-primary-foreground/80">Années d&apos;expérience</p>
            </div>
            <div>
              <p className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-2">
                5
              </p>
              <p className="text-primary-foreground/80">Pays couverts</p>
            </div>
            <div>
              <p className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-2">
                500+
              </p>
              <p className="text-primary-foreground/80">Clients satisfaits</p>
            </div>
            <div>
              <p className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-2">
                24/7
              </p>
              <p className="text-primary-foreground/80">Support disponible</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
