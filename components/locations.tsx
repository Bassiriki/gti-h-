"use client";

import { Building2, Mail, MapPin, Phone } from "lucide-react";

const locations = [
  {
    country: "Sénégal",
    city: "Dakar",
    isHeadquarters: true,
    description: "Rue Tolbiac, Dakar - Siège social de GTI-HOLDING S.A.R.L",
    phone: "+221 78 869 46 57",
    email: "contact@gti-holding.com",
    code: "SN"
  },
  {
    country: "Guinée",
    city: "Conakry",
    isHeadquarters: false,
    description: "Filiale régionale pour la Guinée",
    phone: "+224 XX XXX XX XX",
    email: "conakry@gti-holding.com",
    code: "GN"
  },
  {
    country: "Côte d'Ivoire",
    city: "Abidjan",
    isHeadquarters: false,
    description: "Filiale régionale pour la Côte d'Ivoire",
    phone: "+225 XX XX XX XX",
    email: "abidjan@gti-holding.com",
    code: "CI"
  },
  {
    country: "Togo",
    city: "Lomé",
    isHeadquarters: false,
    description: "Filiale régionale pour le Togo",
    phone: "+228 XX XX XX XX",
    email: "lome@gti-holding.com",
    code: "TG"
  },
  {
    country: "Ghana",
    city: "Accra",
    isHeadquarters: false,
    description: "Filiale régionale pour le Ghana",
    phone: "+233 XX XXX XXXX",
    email: "accra@gti-holding.com",
    code: "GH"
  },
];

export function Locations() {
  return (
    <section id="implantations" className="py-24 lg:py-32 bg-zinc-50/50 scroll-mt-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header - Ant Design Style */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[2px] w-8 bg-secondary rounded-full" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
              Notre Présence
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold text-zinc-900 mb-6 tracking-tight">
            Présence <span className="text-secondary">stratégique</span> <br className="hidden md:block" />
            en Afrique de l&apos;Ouest
          </h2>
          <p className="text-lg text-zinc-500 leading-relaxed max-w-2xl font-normal">
            Avec des bureaux dans 5 pays clés de la région, GTI-HOLDING vous garantit une couverture optimale et un service de proximité.
          </p>
        </div>

        {/* Locations Grid - Ant Design style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl border border-zinc-200/60 p-8 transition-all duration-300 hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] hover:border-secondary/30 group ${location.isHeadquarters ? "ring-2 ring-secondary/5 border-secondary/20 shadow-sm" : ""
                }`}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                  <div className={`h-12 w-12 rounded-xl flex items-center justify-center transition-colors ${location.isHeadquarters ? "bg-secondary text-secondary-foreground" : "bg-zinc-50 text-secondary group-hover:bg-secondary/10"
                    }`}>
                    {location.isHeadquarters ? <Building2 className="h-6 w-6" /> : <MapPin className="h-6 w-6" />}
                  </div>
                  <span className="text-sm font-bold text-zinc-300 group-hover:text-secondary/40 transition-colors">
                    {location.code}
                  </span>
                </div>

                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold text-zinc-900">{location.country}</h3>
                    {location.isHeadquarters && (
                      <span className="px-2 py-0.5 bg-secondary/10 text-secondary text-[10px] font-bold uppercase tracking-wider rounded">
                        Siège
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-zinc-500 font-medium">{location.city} — {location.description}</p>
                </div>

                <div className="mt-auto space-y-3 pt-6 border-t border-zinc-50">
                  <div className="flex items-center gap-3 group/link">
                    <div className="h-8 w-8 rounded-full bg-zinc-50 flex items-center justify-center group-hover/link:bg-secondary/10 transition-colors">
                      <Phone className="h-3.5 w-3.5 text-zinc-400 group-hover/link:text-secondary" />
                    </div>
                    <a href={`tel:${location.phone}`} className="text-sm text-zinc-600 hover:text-secondary transition-colors font-medium">
                      {location.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3 group/link">
                    <div className="h-8 w-8 rounded-full bg-zinc-50 flex items-center justify-center group-hover/link:bg-secondary/10 transition-colors">
                      <Mail className="h-3.5 w-3.5 text-zinc-400 group-hover/link:text-secondary" />
                    </div>
                    <a href={`mailto:${location.email}`} className="text-sm text-zinc-600 hover:text-secondary transition-colors font-medium">
                      {location.email}
                    </a>
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
