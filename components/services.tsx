"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, FileCheck, Truck, ShoppingCart, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: 1,
    icon: FileCheck,
    title: "Transit & Douane",
    shortDesc: "Dédouanement et formalités administratives",
    description:
      "Nous gérons toutes vos opérations de dédouanement import/export, la gestion documentaire, les formalités administratives et l'assistance logistique portuaire et aéroportuaire.",
    features: [
      "Dédouanement import/export",
      "Gestion documentaire complète",
      "Formalités administratives",
      "Assistance portuaire et aéroportuaire",
    ],
    image: "/images/transit-douane.jpg",
  },
  {
    id: 2,
    icon: Truck,
    title: "Transport & Logistique",
    shortDesc: "Solutions de transport sur mesure",
    description:
      "Notre flotte assure le transport terrestre de marchandises au niveau national et international, avec des solutions de stockage, entreposage et distribution adaptées.",
    features: [
      "Transport national et international",
      "Stockage et entreposage",
      "Distribution sur mesure",
      "Suivi en temps réel",
    ],
    image: "/images/transport-terrestre.jpg",
  },
  {
    id: 3,
    icon: ShoppingCart,
    title: "Commerce Général",
    shortDesc: "Import-export et fourniture d'équipements",
    description:
      "Nous proposons des services d'import-export de produits divers, la fourniture d'équipements industriels, automobiles et bureautiques, ainsi que des partenariats commerciaux.",
    features: [
      "Import-export de produits",
      "Équipements industriels",
      "Fourniture automobile et bureautique",
      "Représentation de marques",
    ],
    image: "/images/commerce-general.jpg",
  },
  {
    id: 4,
    icon: Briefcase,
    title: "Prestations & Multiservices",
    shortDesc: "Conseils et assistance aux entreprises",
    description:
      "Notre équipe d'experts vous accompagne avec des conseils en gestion logistique et supply chain, des services administratifs et techniques, ainsi qu'une assistance personnalisée.",
    features: [
      "Conseil en supply chain",
      "Services administratifs",
      "Assistance technique",
      "Solutions personnalisées",
    ],
    image: "/images/hero-logistics.jpg",
  },
];

export function Services() {
  const [activeService, setActiveService] = useState(0);

  return (
    <section id="services" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-1 w-12 bg-secondary" />
            <span className="text-secondary font-medium text-sm uppercase tracking-wider">
              Nos Domaines d&apos;Activité
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Des solutions <span className="text-primary">complètes</span> pour
            tous vos besoins logistiques
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            GTI-HOLDING vous propose une gamme complète de services pour répondre
            à toutes vos exigences en matière de transit, transport et commerce.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Service Tabs */}
          <div className="space-y-4">
            {services.map((service, index) => (
              <button
                key={service.id}
                type="button"
                onClick={() => setActiveService(index)}
                className={`w-full text-left p-6 rounded-xl border transition-all duration-300 ${
                  activeService === index
                    ? "bg-primary border-primary shadow-lg"
                    : "bg-card border-border hover:border-primary/50"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`h-12 w-12 rounded-lg flex items-center justify-center shrink-0 ${
                      activeService === index
                        ? "bg-primary-foreground/20"
                        : "bg-primary/10"
                    }`}
                  >
                    <service.icon
                      className={`h-6 w-6 ${
                        activeService === index
                          ? "text-primary-foreground"
                          : "text-primary"
                      }`}
                    />
                  </div>
                  <div>
                    <h3
                      className={`text-lg font-bold mb-1 ${
                        activeService === index
                          ? "text-primary-foreground"
                          : "text-foreground"
                      }`}
                    >
                      {service.title}
                    </h3>
                    <p
                      className={`text-sm ${
                        activeService === index
                          ? "text-primary-foreground/80"
                          : "text-muted-foreground"
                      }`}
                    >
                      {service.shortDesc}
                    </p>
                  </div>
                  <ArrowRight
                    className={`h-5 w-5 ml-auto shrink-0 transition-transform ${
                      activeService === index
                        ? "text-primary-foreground translate-x-1"
                        : "text-muted-foreground"
                    }`}
                  />
                </div>
              </button>
            ))}
          </div>

          {/* Active Service Detail */}
          <div className="bg-card rounded-2xl overflow-hidden border border-border shadow-lg">
            <div className="relative h-64">
              <Image
                src={services[activeService].image || "/placeholder.svg"}
                alt={services[activeService].title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full">
                  {services[activeService].title}
                </span>
              </div>
            </div>
            <div className="p-6 lg:p-8">
              <p className="text-muted-foreground leading-relaxed mb-6">
                {services[activeService].description}
              </p>
              <ul className="space-y-3 mb-6">
                {services[activeService].features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-secondary" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground gap-2">
                En savoir plus
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
