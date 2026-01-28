"use client";

import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown, Mail, Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const servicesData = [
  {
    category: "Logistique & Commerce",
    items: [
      { label: "Transit, Logistique & Supply Chain", slug: "transit-logistique" },
      { label: "Commerce Général & Import-Export", slug: "commerce-general" },
      { label: "Transport, Voyages & Digital", slug: "transport-voyages-digital" },
    ],
  },
  {
    category: "Infrastructures & Ressources",
    items: [
      { label: "Construction & BTP", slug: "construction-btp" },
      { label: "Mines, Énergie & Hydrocarbures", slug: "mines-energie" },
      { label: "Agriculture & Agro-industrie", slug: "agriculture-agroindustrie" },
    ],
  },
  {
    category: "Services aux Entreprises",
    items: [
      { label: "Immobilier & Gestion", slug: "immobilier" },
      { label: "Services Généraux & Proximité", slug: "services-generaux" },
      { label: "Conseil & Formation", slug: "conseil-formation" },
    ],
  },
  {
    category: "Stratégie",
    items: [
      { label: "Participations & Investissements", slug: "participations" },
    ],
  },
];

const presenceData = [
  { country: "Sénégal", code: "sn" },
  { country: "Guinée", code: "gn" },
  { country: "Côte d'Ivoire", code: "ci" },
  { country: "Togo", code: "tg" },
  { country: "Ghana", code: "gh" },
];

function PresenceFlags() {
  return (
    <div className="flex items-center gap-3">
      {presenceData.map((item) => (
        <div
          key={item.code}
          className="relative w-6 h-4 shadow-sm border border-white/10 rounded-sm overflow-hidden shrink-0"
          title={item.country}
        >
          <Image
            src={`https://flagcdn.com/w80/${item.code}.png`}
            alt={`Drapeau ${item.country}`}
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      ))}
    </div>
  );
}

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/#a-propos", label: "À Propos" },
  { href: "/#services", label: "Services" }, // Garde le lien principal vers la section
  { href: "/#implantations", label: "Implantations" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    };
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${isScrolled || isMobileMenuOpen
        ? "bg-card/95 backdrop-blur-md shadow-lg"
        : "bg-card shadow-sm"
        }`}
    >
      {/* Top Bar */}
      <div className={`bg-neutral-900 text-white transition-all duration-500 ease-in-out overflow-hidden ${isScrolled || isMobileMenuOpen ? "max-h-0 opacity-0" : "max-h-10 opacity-100"}`}>
        <div className="container mx-auto px-4 lg:px-8 h-10 flex items-center justify-between text-[13px] font-medium">
          <div className="flex items-center gap-6">
            <Link href="tel:+221788694657" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Phone className="h-3.5 w-3.5 text-secondary" />
              <span>+221 78 869 46 57</span>
            </Link>
            <Link href="mailto:contact@gti-holding.com" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Mail className="h-3.5 w-3.5 text-secondary" />
              <span>contact@gti-holding.com</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-4 text-white/70 overflow-hidden">
            <PresenceFlags />
          </div>
        </div>
      </div>

      <div className={`container mx-auto px-4 lg:px-8 transition-all duration-300 py-4`}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo-gti-h.png"
              alt="GTI Holding Logo"
              width={120}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>


          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.label === "Services" && setActiveMenu("services")}
                onMouseLeave={() => link.label === "Services" && setActiveMenu(null)}
              >
                {link.label === "Services" ? (
                  <button
                    className={`flex items-center gap-1 text-base transition-colors hover:text-secondary group text-foreground`}
                  >
                    {link.label}
                    <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${activeMenu === "services" ? "rotate-180" : ""}`} />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className={`text-base transition-colors hover:text-secondary text-foreground`}
                  >
                    {link.label}
                  </Link>
                )}

                {/* Mega Menu */}
                {link.label === "Services" && (
                  <AnimatePresence>
                    {activeMenu === "services" && (
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 15 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="absolute top-full -left-48 w-[800px] pt-6 z-50 pointer-events-auto"
                      >
                        <div className="bg-white rounded-xl shadow-2xl overflow-hidden flex border border-border/50">
                          {/* Sidebar */}
                          <div className="w-24 bg-secondary flex items-center justify-center relative overflow-hidden shrink-0">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]" />
                            <p className="[writing-mode:vertical-lr] rotate-180 text-secondary-foreground font-bold tracking-widest text-xl opacity-90 select-none py-8">
                              NOS EXPERTISES
                            </p>
                          </div>

                          {/* Content */}
                          <div className="flex-1 p-8 bg-white grid grid-cols-2 gap-x-12 gap-y-10">
                            {servicesData.map((category, idx) => (
                              <div key={idx} className="space-y-4">
                                <h3 className="flex items-center gap-2 text-sm font-bold text-secondary uppercase tracking-wider">
                                  {category.category}
                                  <ArrowRight className="h-3 w-3" />
                                </h3>
                                <ul className="space-y-3">
                                  {category.items.map((item, i) => (
                                    <li key={i}>
                                      <Link
                                        href={`/services/${item.slug}`}
                                        className="inline-block px-3 py-1.5 bg-[#f0f9ff] text-secondary text-[13px] font-medium rounded-md hover:bg-secondary hover:text-white transition-all duration-200"
                                        onClick={() => setActiveMenu(null)}
                                      >
                                        {item.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">

            <Button asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-base">
              <Link href="/#contact">
                Contactez-nous
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X
                className={`h-6 w-6 text-foreground`}
              />
            ) : (
              <Menu
                className={`h-6 w-6 text-foreground`}
              />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-6 border-t border-border/20">
            <nav className="flex flex-col gap-4 pt-4">
              {navLinks.map((link) => (
                <div key={link.href} className="flex flex-col">
                  {link.label === "Services" ? (
                    <>
                      <button
                        onClick={() => setActiveMenu(activeMenu === "mobile-services" ? null : "mobile-services")}
                        className="flex items-center justify-between text-base transition-colors hover:text-secondary text-foreground py-2"
                      >
                        {link.label}
                        <ChevronDown className={`h-4 w-4 transition-transform ${activeMenu === "mobile-services" ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {activeMenu === "mobile-services" && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden bg-muted/30 rounded-lg px-4"
                          >
                            {servicesData.map((category, idx) => (
                              <div key={idx} className="py-3 border-b border-border/10 last:border-0">
                                <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-2">
                                  {category.category}
                                </p>
                                <ul className="flex flex-col gap-2">
                                  {category.items.map((item, i) => (
                                    <li key={i}>
                                      <Link
                                        href={`/services/${item.slug}`}
                                        className="text-sm text-foreground/70 hover:text-secondary py-1 block"
                                        onClick={() => {
                                          setIsMobileMenuOpen(false);
                                          setActiveMenu(null);
                                        }}
                                      >
                                        • {item.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className={`text-base transition-colors hover:text-secondary pt-2 ${isScrolled ? "text-foreground" : "text-foreground"
                        }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="flex flex-col gap-4 pt-2 border-t border-border/10">
                <Link
                  href="tel:+221788694657"
                  className="flex items-center gap-2 text-base font-medium text-foreground"
                >
                  <Phone className="h-4 w-4" />
                  <span>+221 78 869 46 57</span>
                </Link>
                <Button asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground w-full text-base">
                  <Link href="/#contact" onClick={() => setIsMobileMenuOpen(false)}>
                    Demander un devis
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
