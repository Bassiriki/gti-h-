"use client";

import { ArrowUp, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const footerLinks = {
  services: [
    { label: "Transit & Douane", href: "#services" },
    { label: "Transport & Logistique", href: "#services" },
    { label: "Commerce Général", href: "#services" },
    { label: "Multiservices", href: "#services" },
  ],
  entreprise: [
    { label: "À Propos", href: "#a-propos" },
    { label: "Nos Implantations", href: "#implantations" },
    { label: "Carrières", href: "#" },
    { label: "Actualités", href: "#" },
  ],
  support: [
    { label: "Contact", href: "#contact" },
    { label: "FAQ", href: "#" },
    { label: "Demander un devis", href: "#contact" },
    { label: "Suivi des expéditions", href: "#" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-zinc-900 text-zinc-400">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 lg:py-24 grid md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4 max-w-sm">
            <Link href="/" className="inline-flex items-center mb-8">
              <span className="text-2xl font-bold text-white tracking-tight">GTI</span>
              <span className="text-2xl font-bold text-secondary tracking-tight">-HOLDING</span>
            </Link>
            <p className="text-zinc-400 leading-relaxed mb-8 text-[15px]">
              Groupe ouest-africain spécialisé dans le transit, la logistique, le
              transport et le commerce général. Basé à Rue Tolbiac, Dakar, Sénégal.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="h-9 w-9 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground hover:border-secondary transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1 hidden lg:block" />

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-6">Services</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="hover:text-secondary transition-colors text-[14px] font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Entreprise */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-6">Entreprise</h4>
            <ul className="space-y-4">
              {footerLinks.entreprise.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="hover:text-secondary transition-colors text-[14px] font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-6">Support & Contact</h4>
            <ul className="space-y-4">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="hover:text-secondary transition-colors text-[14px] font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-zinc-500 text-sm font-medium">
            © {new Date().getFullYear()} GTI-HOLDING S.A.R.L. Tous droits réservés.
          </p>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-6">
              <Link
                href="#"
                className="text-zinc-500 hover:text-white text-xs font-medium transition-colors"
              >
                Mentions légales
              </Link>
              <Link
                href="#"
                className="text-zinc-500 hover:text-white text-xs font-medium transition-colors"
              >
                Confidentialité
              </Link>
            </div>
            <button
              type="button"
              onClick={scrollToTop}
              className="h-10 w-10 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-400 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground hover:border-secondary transition-all duration-300 shadow-lg"
              aria-label="Retour en haut"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
