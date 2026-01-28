"use client";

import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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

interface TopbarProps {
    isScrolled: boolean;
}

export function Topbar({ isScrolled }: TopbarProps) {
    return (
        <div
            className={`bg-[#0a0a0a] text-white transition-all duration-300 ease-in-out overflow-hidden will-change-[height] ${isScrolled ? "h-0 opacity-0" : "h-10 opacity-100"
                }`}
        >
            <div className="container mx-auto px-4 lg:px-8 h-10 flex items-center justify-between text-[12px] font-medium">
                <div className="flex items-center gap-6">
                    <Link href="tel:+221788694657" className="flex items-center gap-2 hover:text-secondary transition-colors">
                        <Phone className="h-3.5 w-3.5 text-secondary" />
                        <span className="hidden sm:inline">+221 78 869 46 57</span>
                    </Link>
                    <Link href="mailto:contact@gti-holding.com" className="flex items-center gap-2 hover:text-secondary transition-colors">
                        <Mail className="h-3.5 w-3.5 text-secondary" />
                        <span className="hidden sm:inline">contact@gti-holding.com</span>
                    </Link>
                </div>
                <div className="flex items-center gap-4 text-white/70">
                    <PresenceFlags />
                </div>
            </div>
        </div>
    );
}
