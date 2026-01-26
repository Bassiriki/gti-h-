"use client";

import { Button } from "@/components/ui/button";
import { Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#accueil", label: "Accueil" },
  { href: "#a-propos", label: "À Propos" },
  { href: "#services", label: "Services" },
  { href: "#implantations", label: "Implantations" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen
        ? "bg-card/95 backdrop-blur-md shadow-lg py-3"
        : "bg-transparent py-5"
        }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
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
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-secondary ${isScrolled || isMobileMenuOpen ? "text-foreground" : "text-card"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="tel:+221788694657"
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${isScrolled || isMobileMenuOpen ? "text-foreground" : "text-card"
                }`}
            >
              <Phone className="h-4 w-4" />
              <span>+221 78 869 46 57</span>
            </Link>
            <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              Demander un devis
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
                className={`h-6 w-6 ${isScrolled || isMobileMenuOpen ? "text-foreground" : "text-card"
                  }`}
              />
            ) : (
              <Menu
                className={`h-6 w-6 ${isScrolled || isMobileMenuOpen ? "text-foreground" : "text-card"
                  }`}
              />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-6 border-t border-border/20">
            <nav className="flex flex-col gap-4 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-secondary ${isScrolled ? "text-foreground" : "text-foreground"
                    }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-4 pt-2 border-t border-border/10">
                <Link
                  href="tel:+221788694657"
                  className="flex items-center gap-2 text-sm font-medium text-foreground"
                >
                  <Phone className="h-4 w-4" />
                  <span>+221 78 869 46 57</span>
                </Link>
                <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground w-full">
                  Demander un devis
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
