"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";

export function CEOMessage() {
    return (
        <section className="py-24 lg:py-32 bg-zinc-50/50">
            <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
                <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-zinc-200/60 overflow-hidden">
                    <div className="flex flex-col lg:flex-row divide-x divide-zinc-100">
                        {/* Image Column - Structured side */}
                        <div className="relative w-full lg:w-2/5 aspect-[4/5] lg:aspect-auto min-h-[450px]">
                            <Image
                                src="/images/director.jpg"
                                alt="Directeur Général"
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
                            <div className="absolute bottom-6 left-6 text-white lg:hidden">
                                <p className="text-xl font-bold">M. Bassiriki</p>
                                <p className="text-sm opacity-90">Directeur Général</p>
                            </div>
                        </div>

                        {/* Content Column - Card Body */}
                        <div className="flex-1 p-8 lg:p-16 flex flex-col justify-center bg-white">
                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="flex items-center gap-3 mb-8 text-secondary">
                                    <span className="h-[2px] w-8 bg-secondary rounded-full" />
                                    <span className="text-xs font-bold uppercase tracking-[0.2em]">
                                        Leadership
                                    </span>
                                </div>

                                <div className="relative mb-8">
                                    <Quote className="absolute -top-4 -left-6 h-12 w-12 text-zinc-100 -z-10" />
                                    <h2 className="text-2xl md:text-4xl font-semibold text-zinc-900 leading-[1.3] tracking-tight">
                                        "L'excellence logistique au service du <br className="hidden md:block" />
                                        <span className="text-secondary">développement</span> de l'Afrique"
                                    </h2>
                                </div>

                                <div className="space-y-5 text-[15px] lg:text-[16px] text-zinc-600 leading-relaxed font-normal">
                                    <p>
                                        Bienvenue chez <strong className="text-zinc-900 font-semibold">GTI-HOLDING</strong>. Depuis notre création, notre ambition a toujours été de devenir un pilier du commerce et de la logistique en Afrique de l'Ouest.
                                    </p>
                                    <p>
                                        Dans un monde en perpétuelle mutation, nous croyons fermement que la fluidité des échanges est la clé de la croissance économique. C'est pourquoi nous investissons continuellement dans l'innovation pour offrir à nos partenaires des solutions d'excellence.
                                    </p>
                                    <p>
                                        Notre engagement envers l'intégrité et la satisfaction client n'est pas seulement une politique, c'est l'ADN même de notre groupe.
                                    </p>
                                </div>

                                <div className="mt-12 pt-10 border-t border-zinc-100 hidden lg:block">
                                    <div className="flex items-center gap-4">
                                        <div className="h-12 w-12 rounded-full border-2 border-secondary/20 p-1">
                                            <div className="w-full h-full rounded-full overflow-hidden relative">
                                                <Image src="/images/director.jpg" alt="Signature" fill className="object-cover" />
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-lg font-bold text-zinc-900 leading-none mb-1">M. Bassiriki</p>
                                            <p className="text-xs font-medium text-zinc-400 uppercase tracking-widest">Directeur Général</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
