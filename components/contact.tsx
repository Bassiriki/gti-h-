"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import React, { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Merci pour votre message! Nous vous contacterons bientôt.");
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-white scroll-mt-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header - Ant Design Style */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[2px] w-8 bg-secondary rounded-full" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
              Contactez-nous
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold text-zinc-900 mb-6 tracking-tight">
            Parlons de votre <span className="text-secondary">projet</span>
          </h2>
          <p className="text-lg text-zinc-500 leading-relaxed max-w-2xl font-normal">
            Notre équipe est à votre disposition pour répondre à toutes vos questions et vous accompagner dans vos projets logistiques à travers l&apos;Afrique de l&apos;Ouest.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:items-start">
          {/* Contact Info Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-zinc-50 rounded-2xl border border-zinc-200/60 p-8">
              <h3 className="text-xl font-bold text-zinc-900 mb-8">Informations de contact</h3>

              <div className="space-y-8">
                <div className="flex items-start gap-4 group">
                  <div className="h-10 w-10 rounded-xl bg-white border border-zinc-100 flex items-center justify-center shrink-0 shadow-sm group-hover:border-secondary/30 transition-colors">
                    <MapPin className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-1">Siège Social</p>
                    <p className="text-sm font-semibold text-zinc-900 leading-relaxed">Rue Tolbiac, Dakar, Sénégal</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="h-10 w-10 rounded-xl bg-white border border-zinc-100 flex items-center justify-center shrink-0 shadow-sm group-hover:border-secondary/30 transition-colors">
                    <Phone className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-1">Téléphone</p>
                    <a href="tel:+221788694657" className="text-sm font-semibold text-zinc-900 hover:text-secondary transition-colors">
                      +221 78 869 46 57
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="h-10 w-10 rounded-xl bg-white border border-zinc-100 flex items-center justify-center shrink-0 shadow-sm group-hover:border-secondary/30 transition-colors">
                    <Mail className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-1">Email</p>
                    <a href="mailto:contact@gti-holding.com" className="text-sm font-semibold text-zinc-900 hover:text-secondary transition-colors italic">
                      contact@gti-holding.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="h-10 w-10 rounded-xl bg-white border border-zinc-100 flex items-center justify-center shrink-0 shadow-sm group-hover:border-secondary/30 transition-colors">
                    <Clock className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-1">Horaires d'ouverture</p>
                    <p className="text-sm font-semibold text-zinc-900 leading-relaxed">Lun - Ven : 08h00 - 18h00</p>
                    <p className="text-[12px] text-zinc-400 font-medium">Samedi : 09h00 - 13h00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sub-card for Cities */}
            <div className="p-8 bg-zinc-900 rounded-2xl text-white">
              <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">Nos points d'ancrage</p>
              <div className="flex flex-wrap gap-2">
                {["Dakar", "Conakry", "Abidjan", "Lomé", "Accra"].map(city => (
                  <span key={city} className="px-3 py-1 bg-white/10 rounded-lg text-xs font-bold hover:bg-secondary transition-colors cursor-default">
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-zinc-200/60 p-8 lg:p-12 shadow-[0_12px_40px_rgba(0,0,0,0.03)]"
            >
              <h3 className="text-xl font-bold text-zinc-900 mb-8">Envoyez-nous un message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-[13px] font-bold text-zinc-400 uppercase tracking-wider">
                      Nom complet
                    </label>
                    <Input
                      id="name"
                      placeholder="Votre nom"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="h-12 border-zinc-200 focus:border-secondary/50 focus:ring-secondary/20 rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-[13px] font-bold text-zinc-400 uppercase tracking-wider">
                      Email professionnel
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="votre@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="h-12 border-zinc-200 focus:border-secondary/50 focus:ring-secondary/20 rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-[13px] font-bold text-zinc-400 uppercase tracking-wider">
                      Téléphone
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+221 XX XXX XX XX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="h-12 border-zinc-200 focus:border-secondary/50 focus:ring-secondary/20 rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-[13px] font-bold text-zinc-400 uppercase tracking-wider">
                      Sujet
                    </label>
                    <Input
                      id="subject"
                      placeholder="Objet de votre message"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      className="h-12 border-zinc-200 focus:border-secondary/50 focus:ring-secondary/20 rounded-xl"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-[13px] font-bold text-zinc-400 uppercase tracking-wider">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Décrivez votre projet ou votre demande..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="border-zinc-200 focus:border-secondary/50 focus:ring-secondary/20 rounded-xl resize-none"
                  />
                </div>

                <div className="pt-4">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full sm:w-auto min-w-[200px] h-14 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full shadow-lg shadow-secondary/20 gap-3 text-base font-bold"
                  >
                    <Send className="h-5 w-5" />
                    Envoyer le message
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
