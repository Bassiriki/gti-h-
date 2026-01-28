"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-zinc-50/50 scroll-mt-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-1 w-12 bg-secondary" />
            <span className="text-secondary font-medium text-sm uppercase tracking-wider">
              Nos Domaines d&apos;Activité
            </span>
            <div className="h-1 w-12 bg-secondary" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Des solutions <span className="text-secondary">complètes</span> pour
            tous vos besoins
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Découvrez nos expertises multisectorielles conçues pour accompagner votre croissance en Afrique de l&apos;Ouest et au-delà.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            {
              title: "Logistique & Commerce",
              description: "Une expertise complète pour fluidifier vos échanges : Transit, Transport, Supply Chain et Commerce Général.",
              image: "/images/hero-logistics.jpg",
              count: "3 Services"
            },
            {
              title: "Infrastructures & Ressources",
              description: "Bâtir l'avenir et valoriser les ressources : BTP, Mines, Énergie et Agriculture durable.",
              image: "/images/transit-douane.jpg",
              count: "3 Services"
            },
            {
              title: "Services aux Entreprises",
              description: "Des solutions supports pour votre performance : Immobilier, Services Généraux, Conseil et Formation.",
              image: "/images/commerce-general.jpg",
              count: "3 Services"
            },
            {
              title: "Stratégie",
              description: "Investir et développer : Participations financières et opérations stratégiques multisectorielles.",
              image: "/images/transport-terrestre.jpg",
              count: "1 Service"
            }
          ].map((category, index) => (
            <div
              key={index}
              className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer shadow-xl border border-border/20"
            >
              <Image
                src={category.image}
                alt={category.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-300 group-hover:-translate-y-2">
                <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-white border border-white/30 rounded-full bg-white/10 backdrop-blur-md">
                  {category.count}
                </span>
                <h3 className="text-3xl font-bold text-white mb-3">
                  {category.title}
                </h3>
                <p className="text-white/80 leading-relaxed opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-20 transition-all duration-500 delay-100">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8">
            <Link href="/#contact">
              Passez à l&apos;action
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
