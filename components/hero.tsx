"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, FileCheck, MapPin, Truck } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-logistics.jpg"
          alt="GTI-HOLDING Logistique"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-black/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-24">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-6">
            <div className="h-1 w-12 bg-secondary" />
            <span className="text-secondary font-medium text-sm uppercase tracking-wider">
              Groupe  Torodo International Holding
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-card leading-tight mb-6">
            <span className="text-balance">
              Votre partenaire en{" "}
              <span className="text-secondary">Transit, Logistique</span> et{" "}
              <span className="text-secondary">Transport</span>
            </span>
          </h1>

          <p className="text-lg md:text-xl text-card/80 mb-8 leading-relaxed max-w-2xl">
            GTI-HOLDING S.A.R.L accompagne les entreprises et particuliers avec
            des solutions logistiques efficaces, rapides et économiques à travers
            l&apos;Afrique de l&apos;Ouest.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground gap-2"
            >
              Nos Services
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-card text-card hover:bg-card hover:text-foreground bg-transparent"
            >
              Contactez-nous
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-card/20">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                <MapPin className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-card">5</p>
                <p className="text-sm text-card/60">Pays</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                <Truck className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-card">4</p>
                <p className="text-sm text-card/60">Services</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                <FileCheck className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-card">100%</p>
                <p className="text-sm text-card/60">Fiabilité</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}


    </section>
  );
}
