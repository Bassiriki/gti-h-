"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Box, Briefcase, Building2, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Logistique & Commerce",
    description: "Une expertise complète pour fluidifier vos échanges : Transit, Transport, Supply Chain et Commerce Général.",
    image: "/images/hero-logistics.jpg",
    icon: Box,
    items: ["Transit & Douane", "Supply Chain", "Commerce Général"]
  },
  {
    title: "Infrastructures & Ressources",
    description: "Bâtir l'avenir et valoriser les ressources : BTP, Mines, Énergie et Agriculture durable.",
    image: "/images/transit-douane.jpg",
    icon: Building2,
    items: ["Construction & BTP", "Mines & Énergie", "Agriculture"]
  },
  {
    title: "Services aux Entreprises",
    description: "Des solutions supports pour votre performance : Immobilier, Services Généraux, Conseil et Formation.",
    image: "/images/commerce-general.jpg",
    icon: Briefcase,
    items: ["Immobilier", "Conseil", "Services Généraux"]
  },
  {
    title: "Stratégie & Investissement",
    description: "Investir et développer : Participations financières et opérations stratégiques multisectorielles.",
    image: "/images/transport-terrestre.jpg",
    icon: TrendingUp,
    items: ["Participations", "Investissements", "Développement"]
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-white scroll-mt-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header - Ant Design Style */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[2px] w-8 bg-secondary rounded-full" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
              Nos Domaines d'Activité
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold text-zinc-900 mb-6 tracking-tight">
            Des solutions <span className="text-secondary">complètes</span> pour <br className="hidden md:block" />
            tous vos besoins
          </h2>
          <p className="text-lg text-zinc-500 leading-relaxed max-w-2xl font-normal">
            Découvrez nos expertises multisectorielles conçues pour accompagner votre croissance en Afrique de l&apos;Ouest et au-delà.
          </p>
        </div>

        {/* Categories Grid - Clean Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((category, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl border border-zinc-200/60 hover:border-secondary/50 hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] transition-all duration-300 overflow-hidden"
            >
              {/* Card Cover */}
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-zinc-900/10" />
                <div className="absolute top-4 right-4 h-10 w-10 bg-white/90 backdrop-blur rounded-lg flex items-center justify-center shadow-sm">
                  <category.icon className="h-5 w-5 text-secondary" />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-zinc-900 mb-3 group-hover:text-secondary transition-colors">
                  {category.title}
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed mb-6 line-clamp-2">
                  {category.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-[13px] text-zinc-600 font-medium">
                      <div className="h-1 w-1 rounded-full bg-secondary" />
                      {item}
                    </li>
                  ))}
                </ul>

                <Button asChild variant="ghost" className="w-full justify-between hover:bg-zinc-50 group/btn border border-zinc-100 hover:border-secondary/20 h-10 rounded-lg">
                  <Link href="/services">
                    <span className="text-[13px] font-bold">En savoir plus</span>
                    <ArrowRight className="h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-16 pt-12 border-t border-zinc-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-zinc-500 font-medium">Vous avez un projet spécifique ? Parlons-en ensemble.</p>
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full px-8 shadow-md">
            <Link href="/#contact">
              Démarrer un projet
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
