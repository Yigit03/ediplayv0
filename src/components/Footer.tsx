import { Shield, Sparkles, MapPin, type LucideIcon } from "lucide-react";
import Image from "next/image";
import Logo from "@/src/assets/Logo_nobg.png";
/**
 * Link columns and working hours are plain arrays with no hardcoded count,
 * so the admin panel can add/remove/reorder rows freely — the component
 * just maps over whatever it receives.
 */

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterLinkColumn {
  title: string;
  links: FooterLink[];
}

export interface WorkingHoursRow {
  days: string;
  hours: string;
}

export type FooterBadgeIcon = "certified" | "hygiene";

const BADGE_ICON_MAP: Record<FooterBadgeIcon, LucideIcon> = {
  certified: Shield,
  hygiene: Sparkles,
};

export interface FooterBadge {
  icon: FooterBadgeIcon;
  label: string;
}

export interface FooterContact {
  addressLines: string[];
  phoneLabel: string;
  mapCtaLabel: string;
  mapHref: string;
  mapEmbedUrl:string;
  mapEmbedTitle: string;
}

export const DEFAULT_FOOTER_LINK_COLUMNS: FooterLinkColumn[] = [
  {
    title: "Hızlı Erişim",
    links: [
      { label: "Oyun Alanları & Top Havuzu", href: "#oyun-alanlari" },
      { label: "Doğum Günü Paketleri", href: "#fiyatlandirma" },
      { label: "Edi Cafe & Lounge", href: "#anne-baba-lounge" },
      { label: "Hijyen Standartlarımız", href: "#guvenlik-hijyen" },
      { label: "Fotoğraf Galerisi", href: "#galeri" },
    ],
  },
];

export const DEFAULT_WORKING_HOURS: WorkingHoursRow[] = [
  { days: "Pazartesi - Cuma", hours: "09:30 - 20:00" },
  { days: "Cumartesi - Pazar", hours: "09:00 - 20:30" },
];

export const DEFAULT_FOOTER_BADGES: FooterBadge[] = [
  { icon: "certified", label: "ASTM & CE Standardı" },
  { icon: "hygiene", label: "%100 Hijyenik" },
];

export const DEFAULT_FOOTER_CONTACT: FooterContact = {
  addressLines: ["Mudanya, Bursa", "(Mudanya Sahiline Yürüme Mesafesinde)"],
  phoneLabel: "Rezervasyon: 05XX XXX XX XX",
  mapCtaLabel: "Konum Haritada Aç",
  mapHref: "https://maps.google.com",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3040.431001154956!2d28.91023739678955!3d40.35496670000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca6df3c98eeb71%3A0xb7720c02f025e5fd!2sEdi%20Play!5e0!3m2!1str!2str!4v1788712410414!5m2!1str!2str",
  mapEmbedTitle: "Edi Play konumu - Google Haritalar",
};


export interface SiteFooterProps {
  brandDescription?: string;
  badges?: FooterBadge[];
  linkColumns?: FooterLinkColumn[];
  workingHours?: WorkingHoursRow[];
  contact?: FooterContact;
  copyrightText?: string;
}

export default function SiteFooter({
  brandDescription = "Mudanya'nın ilk ve tek çocuk oyun parkı, aktivite atölyesi ve ebeveyn cafe konsepti. Güvenli zeminler, güler yüzlü eğitmenler ve sınırsız neşe!",
  badges = DEFAULT_FOOTER_BADGES,
  linkColumns = DEFAULT_FOOTER_LINK_COLUMNS,
  workingHours = DEFAULT_WORKING_HOURS,
  contact = DEFAULT_FOOTER_CONTACT,
  copyrightText = `© ${new Date().getFullYear()} Edi Play Çocuk Oyun Alanı & Cafe - Tüm hakları saklıdır.`,
}: SiteFooterProps) {
  return (
    <footer className="bg-gradient-to-b from-violet-700 via-purple-700 to-purple-800 pt-14 text-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="">
            <Image src={Logo} alt={"Logo"} width={250} />
            <p className="mt-8 max-w-xs text-xs leading-relaxed text-white-400">
              {brandDescription}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {badges.map((badge) => {
                const Icon = BADGE_ICON_MAP[badge.icon];
                return (
                  <span
                    key={badge.label}
                    className="flex items-center gap-1.5 rounded-full bg-slate-800 px-3 py-1.5 text-[10px] font-semibold text-pink-400"
                  >
                    <Icon className="h-3 w-3" aria-hidden="true" />
                    {badge.label}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Link columns */}
          {linkColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-xs font-bold uppercase tracking-wide text-pink-400 hover:text-pink-300">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-xs text-white-400 transition-colors hover:text-pink-400"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Working hours */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wide text-pink-400 hover:text-pink-300">
              Çalışma Saatleri
            </h3>
            <ul className="mt-4 space-y-3">
              {workingHours.map((row) => (
                <li key={row.days} className="text-xs">
                  <p className="font-semibold text-white-200">{row.days}</p>
                  <p className="text-white-400">{row.hours}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wide text-pink-500 hover:text-pink-300">
              İletişim & Adres
            </h3>
            <div className="mt-4 space-y-1 text-xs text-white-400">
              {contact.addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <p>{contact.phoneLabel}</p>
            </div>
            <a
              href={contact.mapHref}
              target="_blank"
              rel="noreferrer"
              className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-pink-400 hover:text-pink-300"
            >
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              {contact.mapCtaLabel}
            </a>

             {contact.mapEmbedUrl && (
              <div className="mt-4 overflow-hidden rounded-xl border border-slate-800">
                <iframe
                  src={contact.mapEmbedUrl}
                  title={contact.mapEmbedTitle ?? "Konum haritası"}
                  width="100%"
                  height="140"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="block grayscale-[15%]"
                />
              </div>
            )}
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 py-6 text-center text-[11px] text-white-500">
          {copyrightText}
        </div>
      </div>
    </footer>
  );
}