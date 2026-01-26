"use client";

import { MapPin, Building2, Phone, Mail } from "lucide-react";

const locations = [
  {
    country: "Sénégal",
    city: "Dakar",
    isHeadquarters: true,
    description: "Siège social de GTI-HOLDING S.A.R.L",
    phone: "+221 78 869 46 57",
    email: "contact@gti-holding.com",
  },
  {
    country: "Guinée",
    city: "Conakry",
    isHeadquarters: false,
    description: "Filiale régionale pour la Guinée",
    phone: "+224 XX XXX XX XX",
    email: "conakry@gti-holding.com",
  },
  {
    country: "Côte d'Ivoire",
    city: "Abidjan",
    isHeadquarters: false,
    description: "Filiale régionale pour la Côte d'Ivoire",
    phone: "+225 XX XX XX XX",
    email: "abidjan@gti-holding.com",
  },
  {
    country: "Togo",
    city: "Lomé",
    isHeadquarters: false,
    description: "Filiale régionale pour le Togo",
    phone: "+228 XX XX XX XX",
    email: "lome@gti-holding.com",
  },
  {
    country: "Ghana",
    city: "Accra",
    isHeadquarters: false,
    description: "Filiale régionale pour le Ghana",
    phone: "+233 XX XXX XXXX",
    email: "accra@gti-holding.com",
  },
];

export function Locations() {
  return (
    <section id="implantations" className="py-20 lg:py-32 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-1 w-12 bg-secondary" />
            <span className="text-secondary font-medium text-sm uppercase tracking-wider">
              Nos Implantations
            </span>
            <div className="h-1 w-12 bg-secondary" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Présence <span className="text-primary">stratégique</span> en Afrique
            de l&apos;Ouest
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Avec des bureaux dans 5 pays clés de la région, GTI-HOLDING vous
            garantit une couverture optimale et un service de proximité.
          </p>
        </div>

        {/* Map Placeholder with Locations */}
        <div className="relative bg-card rounded-2xl p-8 lg:p-12 border border-border shadow-lg">
          {/* Decorative Map Background */}
          <div className="absolute inset-0 opacity-5">
            <svg
              viewBox="0 0 800 400"
              className="w-full h-full"
              fill="currentColor"
            >
              <path d="M200,100 Q250,50 300,80 T400,100 Q450,120 500,100 T600,120 Q650,140 680,100" />
            </svg>
          </div>

          <div className="relative grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((location, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl border transition-all duration-300 hover:shadow-md ${
                  location.isHeadquarters
                    ? "bg-primary border-primary"
                    : "bg-background border-border hover:border-primary/50"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`h-12 w-12 rounded-lg flex items-center justify-center shrink-0 ${
                      location.isHeadquarters
                        ? "bg-primary-foreground/20"
                        : "bg-primary/10"
                    }`}
                  >
                    {location.isHeadquarters ? (
                      <Building2
                        className={`h-6 w-6 ${
                          location.isHeadquarters
                            ? "text-primary-foreground"
                            : "text-primary"
                        }`}
                      />
                    ) : (
                      <MapPin
                        className={`h-6 w-6 ${
                          location.isHeadquarters
                            ? "text-primary-foreground"
                            : "text-primary"
                        }`}
                      />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3
                        className={`font-bold ${
                          location.isHeadquarters
                            ? "text-primary-foreground"
                            : "text-foreground"
                        }`}
                      >
                        {location.country}
                      </h3>
                      {location.isHeadquarters && (
                        <span className="px-2 py-0.5 bg-secondary text-secondary-foreground text-xs font-medium rounded">
                          Siège
                        </span>
                      )}
                    </div>
                    <p
                      className={`text-sm mb-3 ${
                        location.isHeadquarters
                          ? "text-primary-foreground/80"
                          : "text-muted-foreground"
                      }`}
                    >
                      {location.city} - {location.description}
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Phone
                          className={`h-3.5 w-3.5 ${
                            location.isHeadquarters
                              ? "text-primary-foreground/60"
                              : "text-muted-foreground"
                          }`}
                        />
                        <span
                          className={`text-xs ${
                            location.isHeadquarters
                              ? "text-primary-foreground/80"
                              : "text-muted-foreground"
                          }`}
                        >
                          {location.phone}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail
                          className={`h-3.5 w-3.5 ${
                            location.isHeadquarters
                              ? "text-primary-foreground/60"
                              : "text-muted-foreground"
                          }`}
                        />
                        <span
                          className={`text-xs ${
                            location.isHeadquarters
                              ? "text-primary-foreground/80"
                              : "text-muted-foreground"
                          }`}
                        >
                          {location.email}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
