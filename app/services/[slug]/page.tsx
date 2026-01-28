"use client";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { servicesData } from "@/lib/services-data";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation"; // Correct next/navigation for App Router
import { use } from "react";

interface ServicePageProps {
    params: Promise<{ slug: string }>;
}

export default function ServicePage({ params }: ServicePageProps) {
    // Directly unwrap params since it's now a Promise in Next.js 15+ (if applicable) or standard object
    const { slug } = use(params);

    const service = servicesData.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    // Fallback image if specific one is missing
    const heroImage = service.image || "/images/hero-logistics.jpg";

    return (
        <main className="min-h-screen bg-background">
            <Header />

            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={heroImage}
                        alt={service.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-background" />
                </div>

                <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center pt-20">
                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-secondary/20 backdrop-blur-sm border border-secondary/30">
                        <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                        <span className="text-secondary font-medium text-sm uppercase tracking-wider">
                            Service
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight max-w-4xl mx-auto">
                        {service.title}
                    </h1>

                    <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                        {service.description}
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 lg:py-32">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">

                        {/* Sidebar / Navigation */}
                        <div className="lg:col-span-4 space-y-8">
                            <div className="bg-muted/30 p-8 rounded-2xl border border-border sticky top-32">
                                <h3 className="text-xl font-bold mb-6">Autres Services</h3>
                                <nav className="flex flex-col gap-3">
                                    {servicesData.map((s) => (
                                        <Link
                                            key={s.id}
                                            href={`/services/${s.slug}`}
                                            className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${s.slug === slug
                                                    ? "bg-secondary text-secondary-foreground"
                                                    : "hover:bg-muted text-muted-foreground hover:text-foreground"
                                                }`}
                                        >
                                            {s.title}
                                        </Link>
                                    ))}
                                </nav>
                            </div>

                            <div className="bg-primary p-8 rounded-2xl text-primary-foreground">
                                <h3 className="text-2xl font-bold mb-4">Besoin d&apos;expertise ?</h3>
                                <p className="mb-6 opacity-90">
                                    Contactez nos experts pour une solution sur mesure adaptée à vos besoins.
                                </p>
                                <Link href="/#contact">
                                    <Button variant="secondary" className="w-full">
                                        Contactez-nous
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="lg:col-span-8">
                            <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
                                <p className="text-xl text-muted-foreground leading-relaxed font-light">
                                    {service.description}
                                </p>
                            </div>

                            <div className="bg-card rounded-3xl p-8 lg:p-12 border border-border shadow-sm">
                                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                                    <span className="w-1 h-8 bg-secondary rounded-full" />
                                    Nos Prestations & Compétences
                                </h3>

                                <div className="grid md:grid-cols-2 gap-6">
                                    {service.details.map((detail, index) => (
                                        <div
                                            key={index}
                                            className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors group"
                                        >
                                            <div className="mt-1 h-8 w-8 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 group-hover:bg-secondary/20 transition-colors">
                                                <CheckCircle2 className="h-5 w-5 text-secondary" />
                                            </div>
                                            <p className="text-foreground leading-relaxed">
                                                {detail}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-12 flex justify-between items-center pt-8 border-t border-border">
                                <Link href="/#services">
                                    <Button variant="ghost" className="gap-2 pl-0 hover:pl-2 transition-all">
                                        <ArrowLeft className="h-4 w-4" />
                                        Retour aux services
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
