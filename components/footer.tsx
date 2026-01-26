"use client";

import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, ArrowUp } from "lucide-react";

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
    <footer className="bg-foreground text-card">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 lg:py-20 grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center mb-6">
              <span className="text-2xl font-bold text-card">GTI</span>
              <span className="text-2xl font-bold text-secondary">-HOLDING</span>
            </Link>
            <p className="text-card/70 leading-relaxed mb-6 max-w-sm">
              Groupe ouest-africain spécialisé dans le transit, la logistique, le
              transport et le commerce général. Votre partenaire de confiance en
              Afrique de l&apos;Ouest.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="h-10 w-10 rounded-lg bg-card/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-card mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-card/70 hover:text-secondary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Entreprise */}
          <div>
            <h4 className="font-bold text-card mb-4">Entreprise</h4>
            <ul className="space-y-3">
              {footerLinks.entreprise.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-card/70 hover:text-secondary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-card mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-card/70 hover:text-secondary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-card/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-card/60 text-sm">
            © {new Date().getFullYear()} GTI-HOLDING S.A.R.L. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-card/60 hover:text-card text-sm transition-colors"
            >
              Mentions légales
            </Link>
            <Link
              href="#"
              className="text-card/60 hover:text-card text-sm transition-colors"
            >
              Politique de confidentialité
            </Link>
            <button
              type="button"
              onClick={scrollToTop}
              className="h-10 w-10 rounded-lg bg-secondary text-secondary-foreground flex items-center justify-center hover:bg-secondary/90 transition-colors"
              aria-label="Retour en haut"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
