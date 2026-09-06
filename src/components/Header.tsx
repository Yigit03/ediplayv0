"use client";

import { useState } from "react";
import Link from 'next/link';
import Image from "next/image";
import Logo from "@/src/assets/Logo_nobg.png";

import {
  Coffee,
  DoorOpen,
  Menu,
  PartyPopper,
  ShieldCheck,
  X,
} from "lucide-react";

const NAV_LINKS = [
  { label: "Oyun\nAlanları", href: "#oyun-alanlari" },
  { label: "Foto\nGaleri", href: "#foto-galeri" },
  { label: "Güvenlik\n& Hijyen", href: "#guvenlik-hijyen" },
  { label: "Anne\n& Baba\nLounge", href: "#anne-baba-lounge" },
  { label: "Sık\nSorulan\nSorular", href: "#parti-dogum-gunu" },
  { label: "İletişim\n& Konum", href: "#iletisim-konum" },
] as const;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Announcement Bar */}
      <div className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 py-2">
        <p className="flex items-center justify-center gap-2 px-4 text-center text-xs font-medium text-white sm:text-sm">
          <PartyPopper
            className="h-4 w-4 shrink-0"
            aria-hidden="true"
          />

          <span>
            Mudanya&apos;nın İlk &amp; Tek Çocuk Oyun Parkı ve Kafe Dünyası!
            Her Çocuk Girişine 1 Ebeveyn Girişi &amp; Çay İkramı Ücretsiz!
          </span>

          <Coffee
            className="h-4 w-4 shrink-0"
            aria-hidden="true"
          />
        </p>
      </div>

      {/* Main Navigation */}
      <div className="border-b border-gray-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex shrink-0 items-center gap-3">
            <Image src={Logo} alt="Logo" width={150} height={80} />

            <span className="hidden h-10 w-px bg-gray-200 sm:block" />

            <span className="hidden flex-col leading-tight sm:flex">
              <span className="text-sm font-bold tracking-wide text-gray-800">
                OYUN ALANI &amp; CAFE
              </span>

              <span className="text-xs text-gray-400">
                Mudanya · Bursa
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden flex-1 items-center justify-center gap-6 lg:flex xl:gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="whitespace-pre-line text-center text-sm font-medium leading-tight text-gray-700 transition-colors hover:text-pink-500"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden shrink-0 items-center gap-3 lg:flex">
            <a
              href="#hijyen-rehberi"
              className="flex items-center gap-1.5 rounded-full bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-600 transition-colors hover:bg-sky-100"
            >
              <ShieldCheck
                className="h-4 w-4"
                aria-hidden="true"
              />

              Hijyen Rehberi
            </a>

            <a
              href="#rezervasyon"
              className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-orange-200 transition-opacity hover:opacity-90"
            >
              <DoorOpen
                className="h-4 w-4"
                aria-hidden="true"
              />

              Giriş &amp; Rezervasyon
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-gray-600 hover:bg-gray-50 lg:hidden"
          >
            {menuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="border-t border-gray-100 px-4 py-4 lg:hidden">
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  {link.label.replace(/\n/g, " ")}
                </a>
              ))}
            </nav>

            <div className="mt-3 flex flex-col gap-2">
              <a
                href="#hijyen-rehberi"
                onClick={closeMenu}
                className="flex items-center justify-center gap-1.5 rounded-full bg-sky-50 px-4 py-2.5 text-sm font-semibold text-sky-600"
              >
                <ShieldCheck
                  className="h-4 w-4"
                  aria-hidden="true"
                />

                Hijyen Rehberi
              </a>

              <a
                href="#rezervasyon"
                onClick={closeMenu}
                className="flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 px-5 py-2.5 text-sm font-semibold text-white"
              >
                <DoorOpen
                  className="h-4 w-4"
                  aria-hidden="true"
                />

                Giriş &amp; Rezervasyon
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}