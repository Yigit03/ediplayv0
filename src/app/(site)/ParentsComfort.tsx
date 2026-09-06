import Image from "next/image";
import type { StaticImageData } from "next/image";
import MomDadCafe from "@/src/assets/MomDadCafe.png"

import {
  Cookie,
  Eye,
  Baby,
  Wifi,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

/**
 * Same DB-friendly contract as HappyMomentsSection:
 * - `icon` and `theme` are closed string keys, not component references or
 *   raw class names, so an admin panel can offer a dropdown instead of free
 *   text and nothing invalid can reach the render layer.
 * - `perks` is a plain array with an `order` field for future re-sorting.
 *
 * Future DB wiring (no structural change needed):
 *   const perks = await getComfortPerks();
 *   <ParentComfortSection perks={perks} />
 */

export type PerkIcon = "treats" | "visibility" | "nursery";
export type PerkTheme = "orange" | "pink" | "purple";

const ICON_MAP: Record<PerkIcon, LucideIcon> = {
  treats: Cookie,
  visibility: Eye,
  nursery: Baby,
};

const THEME_CLASSES: Record<PerkTheme, string> = {
  orange: "bg-orange-100 text-orange-500",
  pink: "bg-pink-100 text-pink-500",
  purple: "bg-purple-100 text-purple-600",
};

export interface ComfortPerk {
  id: string;
  order: number;
  icon: PerkIcon;
  theme: PerkTheme;
  title: string;
  description: string;
}

export const DEFAULT_COMFORT_PERKS: ComfortPerk[] = [
  {
    id: "treats",
    order: 1,
    icon: "treats",
    theme: "orange",
    title: "Taze Kurabiye, Börek & İçecekler",
    description:
      "Kafeinsiz taze sıkma meyve suları, tost çeşitleri, kekler ve çocuklara özel sağlıklı atıştırmalıklar.",
  },
  {
    id: "visibility",
    order: 2,
    icon: "visibility",
    theme: "pink",
    title: "Kesintisiz Görüş Sağlayan Cam Panel",
    description:
      "Oyun alanını boydan boya gören şeffaf panel sayesinde çocuğunuzu gözünüzün önünden ayırmadan dinlenebilirsiniz.",
  },
  {
    id: "nursery",
    order: 3,
    icon: "nursery",
    theme: "purple",
    title: "Bebek Bakım & Emzirme Odası",
    description:
      "Sıcak su, alt değiştirme ünitesi ve hijyenik koşullarda tasarlanmış sakin anne-bebek odası.",
  },
];

export interface ParentComfortSectionProps {
  eyebrow?: string;
  heading?: string;
  description?: string;
  perks?: ComfortPerk[];
  noticeText?: string;
  cafeImage?: { src: StaticImageData; alt: string };
  cafeBadge?: string;
  cafeTitle?: string;
  wifiTitle?: string;
  wifiDescription?: string;
  wifiCtaLabel?: string;
  wifiCtaHref?: string;
}

export default function ParentComfortSection({
  eyebrow = "ANNE & BABALAR İÇİN KONFOR",
  heading = "Siz Kahvenizi İçerken, Yavrunuz Güvenle Oynasın!",
  description = "Plastik sandalyelerde beklemek yerine; ferah cafe alanımızda taze demlenmiş çay ve filtre kahve eşliğinde dinlenin, kitap okuyun ya da arkadaşlarınızla keyifli sohbet edin.",
  perks = DEFAULT_COMFORT_PERKS,
  noticeText = "Unutmayın: Çocuğunuz oyun alanındayken 1 yetişkin refakatçi girişi ve çay ikramı tamamen ücretsizdir!",
  cafeImage = { src: MomDadCafe, alt: "Edi Play Cafe & Bar" },
  cafeBadge = "Konforlu Dinlenme",
  cafeTitle = "Edi Play Cafe & Bar",
  wifiTitle = "Hızlı Fiber İnternet",
  wifiDescription = "Laptopunuzla rahatça çalışabileceğiniz masalar.",
  wifiCtaLabel = "Ebeveyn Ücretsiz",
  wifiCtaHref = "#rezervasyon",
}: ParentComfortSectionProps) {
  const sortedPerks = [...perks].sort((a, b) => a.order - b.order);

  return (
    <section className="bg-gradient-to-b from-pink-50 to-orange-50 py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 lg:grid-cols-2 lg:px-8">
        {/* Left: cafe photo */}
        <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-3xl border-4 border-white shadow-xl lg:max-w-none">
          <div className="relative h-150 w-full ">
            <Image src={cafeImage.src} alt={cafeImage.alt} fill className="object-cover" />
          </div>

          <span className="absolute left-4 top-4 rounded-xl bg-white/95 px-3 py-1.5 shadow-sm">
            <span className="block text-[10px] font-bold text-pink-500">{cafeBadge}</span>
            <span className="block text-sm font-bold text-gray-800">{cafeTitle}</span>
          </span>

          <div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-sm backdrop-blur">
            <span className="flex items-center gap-2">
              <Wifi className="h-4 w-4 text-orange-500" aria-hidden="true" />
              <span className="leading-tight">
                <span className="block text-xs font-bold text-gray-800">{wifiTitle}</span>
                <span className="block text-[11px] text-gray-500">{wifiDescription}</span>
              </span>
            </span>
            <a
              href={wifiCtaHref}
              className="shrink-0 rounded-full bg-orange-100 px-3 py-1.5 text-[11px] font-semibold text-orange-600 transition-colors hover:bg-orange-200"
            >
              {wifiCtaLabel}
            </a>
          </div>
        </div>

        {/* Right: copy + perks */}
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-600">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            {eyebrow}
          </span>

          <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl">
            {heading}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600">{description}</p>

          <div className="mt-6 flex flex-col gap-3">
            {sortedPerks.map((perk) => {
              const Icon = ICON_MAP[perk.icon];
              return (
                <div
                  key={perk.id}
                  className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm"
                >
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${THEME_CLASSES[perk.theme]}`}
                  >
                    <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-gray-900">{perk.title}</h3>
                    <p className="mt-0.5 text-xs leading-relaxed text-gray-500">
                      {perk.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-4 flex items-center gap-3 rounded-2xl bg-gradient-to-r from-orange-500 to-pink-500 p-4 text-sm font-semibold text-white shadow-lg shadow-orange-200">
            <Sparkles className="h-5 w-5 shrink-0" aria-hidden="true" />
            {noticeText}
          </div>
        </div>
      </div>
    </section>
  );
}