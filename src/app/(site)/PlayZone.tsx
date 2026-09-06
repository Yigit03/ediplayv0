"use client";

import { useState } from "react";
import Image from "next/image";
import Trambolin from "@/src/assets/trambolin.jpg";
import Playground from "@/src/assets/HeroPlayground.png";
import Events from "@/src/assets/events.jpg"
import PrivateToAge from "@/src/assets/PrivateToAge.png";
import {
  Tent,
  Waves,
  Rocket,
  Baby,
  Palette,
  CheckCircle2,
  ArrowRight,
  PartyPopper,
} from "lucide-react";

type FilterKey = "all" | "baby" | "kids" | "workshop";

const FILTERS: { key: FilterKey; label: string; activeClass: string; idleClass: string }[] = [
  {
    key: "all",
    label: "Tüm Alanlar",
    activeClass: "bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white",
    idleClass: "bg-pink-50 text-pink-600 hover:bg-pink-100",
  },
  {
    key: "baby",
    label: "Bebek (1-3 Yaş)",
    activeClass: "bg-purple-600 text-white",
    idleClass: "bg-purple-50 text-purple-600 hover:bg-purple-100",
  },
  {
    key: "kids",
    label: "Büyükler (4-10 Yaş)",
    activeClass: "bg-sky-500 text-white",
    idleClass: "bg-sky-50 text-sky-600 hover:bg-sky-100",
  },
  {
    key: "workshop",
    label: "Atölye & Parti",
    activeClass: "bg-orange-500 text-white",
    idleClass: "bg-orange-50 text-orange-600 hover:bg-orange-100",
  },
];

interface ZoneCard {
  filterKey: FilterKey;
  variant: "photo" | "illustration";
  ageBadge: string;
  cornerBadge: string;
  image?: string;
  icon: typeof Waves;
  illustrationCaption?: string;
  title: string;
  description: string;
  tags: string[];
  footerNote: string;
  ctaLabel: string;
  theme: {
    accent: string;
    ctaClass: string;
    tagClass: string;
    cardClass: string;
    titleClass: string;
    descriptionClass: string;
  };
}

const ZONE_CARDS: ZoneCard[] = [
  {
    filterKey: "kids",
    variant: "photo",
    ageBadge: "3-10 YAŞ",
    cornerBadge: "Resimli Tarif",
    image:PrivateToAge,
    icon: Waves,
    title: "Mega Top Havuzu & Tırmanma",
    description:
      "Binlerce pastel top, çoklu köprüler, tüneller ve spiral tüp kaydıraklarla dolu sınırsız enerji atma alanı!",
    tags: ["Tüp Kaydırağı", "Darbe Korumalı"],
    footerNote: "Genel Giriş",
    ctaLabel: "İncele →",
    theme: {
      accent: "bg-pink-500",
      ctaClass: "bg-pink-500 text-white hover:bg-pink-600",
      tagClass: "bg-pink-50 text-pink-600",
      cardClass: "bg-white",
      titleClass: "text-gray-900",
      descriptionClass: "text-gray-500",
    },
  },
  {
    filterKey: "baby",
    variant: "photo",
    ageBadge: "TÜM YAŞLAR",
    cornerBadge: "Güvenlik Ağı",
    image: Trambolin,
    icon: Rocket,
    illustrationCaption: "Yüksek Zıplama Parkuru",
    title: "Zıplama & Trambolin Alanı",
    description:
      "Yan duvarları sünger kaplı, yaylanı korumalı profesyonel çocuk trambolinleri ile eğlenceli ve güvenli zıplamalar.",
    tags: ["Kaydırmaz Çorap", "Sünger Havuzu"],
    footerNote: "Çorap Dahil",
    ctaLabel: "İncele →",
    theme: {
      accent: "bg-purple-600",
      ctaClass: "bg-white text-purple-600 hover:bg-purple-50",
      tagClass: "bg-purple-500/40 text-white",
      cardClass: "bg-gradient-to-b from-purple-500 to-purple-700 text-white",
      titleClass: "text-white",
      descriptionClass: "text-purple-100",
    },
  },
  {
    filterKey: "baby",
    variant: "photo",
    ageBadge: "1-3 YAŞ",
    cornerBadge: "Düşük Ses",
    image: Events,
    icon: Baby,
    title: "Minik Adımlar & Duyusal Alan",
    description:
      "Bebeklerin motor becerilerini geliştiren yumuşak sünger bloklar, mini rampalar ve anneyle beraber keşif alanı.",
    tags: ["Bebek Kapısı", "Duyusal Bloklar"],
    footerNote: "Anne Eşliğinde",
    ctaLabel: "İncele →",
    theme: {
      accent: "bg-sky-500",
      ctaClass: "bg-sky-500 text-white hover:bg-sky-600",
      tagClass: "bg-sky-50 text-sky-600",
      cardClass: "bg-white",
      titleClass: "text-gray-900",
      descriptionClass: "text-gray-500",
    },
  },
  { 
    filterKey: "workshop",
    variant: "photo",
    ageBadge: "TÜM ÇOCUKLAR",
    cornerBadge: "Haftalık Program",
    image: Playground,
    icon: Palette,
    illustrationCaption: "Yaratıcı Atölye & Parti Evi",
    title: "Etkinlik, Resim & Parti Odası",
    description:
      "Ahşap boyama, kum sanatı, milli bayram etkinlikleri, temalı maskot buluşmaları ve unutulmaz doğum günleri.",
    tags: ["Özel Süsleme", "Maskot Görüşmesi"],
    footerNote: "Parti Rezervasyonu",
    ctaLabel: "Paketler →",
    theme: {
      accent: "bg-orange-500",
      ctaClass: "bg-white text-orange-600 hover:bg-orange-50",
      tagClass: "bg-orange-400/40 text-white",
      cardClass: "bg-gradient-to-b from-orange-400 to-orange-600 text-white",
      titleClass: "text-white",
      descriptionClass: "text-orange-50",
    },
  },
];

export default function PlayZonesSection() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");

  const visibleCards =
    activeFilter === "all"
      ? ZONE_CARDS
      : ZONE_CARDS.filter((card) => card.filterKey === activeFilter);

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-pink-50 px-3 py-1 text-xs font-semibold text-pink-600">
              <Tent className="h-3.5 w-3.5" aria-hidden="true" />
              EDİ PLAY MACERA ALANLARI
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Her Yaş Grubuna Özel Eğlenceli Parkurlar
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-500">
              Gelişim basamaklarına göre tasarlanmış, gözetmen ablalar
              eşliğinde oynanan güvenli eğlence istasyonları.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {FILTERS.map((filter) => (
              <button
                key={filter.key}
                type="button"
                onClick={() => setActiveFilter(filter.key)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
                  activeFilter === filter.key ? filter.activeClass : filter.idleClass
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {visibleCards.map((card) => {
            const Icon = card.icon;
            return (
              <article
                key={card.title}
                className={`overflow-hidden rounded-2xl shadow-md ${card.theme.cardClass}`}
              >
                <div className="relative h-40 w-full">
                  {card.variant === "photo" && card.image ? (
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center gap-2">
                      <Icon className="h-9 w-9 text-white" aria-hidden="true" />
                      <p className="text-xs font-semibold text-white/90">
                        {card.illustrationCaption}
                      </p>
                    </div>
                  )}
                  <span
                    className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-bold text-white ${card.theme.accent}`}
                  >
                    {card.ageBadge}
                  </span>
                  <span className="absolute right-3 top-3 rounded-full bg-black/60 px-2.5 py-1 text-[10px] font-medium text-white">
                    {card.cornerBadge}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className={`text-base font-bold ${card.theme.titleClass}`}>
                    {card.title}
                  </h3>
                  <p className={`mt-1.5 text-xs leading-relaxed ${card.theme.descriptionClass}`}>
                    {card.description}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${card.theme.tagClass}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <span
                      className={`flex items-center gap-1 text-[11px] font-medium ${card.theme.descriptionClass}`}
                    >
                      {card.footerNote === "Parti Rezervasyonu" ? (
                        <PartyPopper className="h-3.5 w-3.5" aria-hidden="true" />
                      ) : (
                        <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                      )}
                      {card.footerNote}
                    </span>
                    <a
                      href="#iletisim-konum"
                      className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-[11px] font-semibold transition-colors ${card.theme.ctaClass}`}
                    >
                      {card.ctaLabel.replace(" →", "")}
                      <ArrowRight className="h-3 w-3" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}