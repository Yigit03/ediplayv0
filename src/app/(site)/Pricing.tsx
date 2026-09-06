import { Check, X, CreditCard, CalendarClock, Users, type LucideIcon } from "lucide-react";

/**
 * Same contract style as the previous sections: closed string keys for
 * icon/theme instead of component refs, `order` for admin-panel sorting,
 * plain data structures that map 1:1 to a future `pricing_plans` /
 * `pricing_features` table pair.
 */

export type PlanTheme = "neutral" | "featured" | "purple";

const THEME_CLASSES: Record<
  PlanTheme,
  {
    card: string;
    price: string;
    badge: string;
    check: string;
    cta: string;
  }
> = {
  neutral: {
    card: "bg-white",
    price: "text-gray-900",
    badge: "bg-pink-100 text-pink-600",
    check: "text-emerald-500",
    cta: "bg-gray-100 text-gray-700 hover:bg-gray-200",
  },
  featured: {
    card: "bg-gradient-to-b from-white to-pink-50 border-2 border-pink-400 shadow-2xl shadow-pink-500/30 lg:-translate-y-3",
    price: "text-pink-600",
    badge: "bg-orange-500 text-white",
    check: "text-pink-500",
    cta: "bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:opacity-90",
  },
  purple: {
    card: "bg-white",
    price: "text-purple-600",
    badge: "bg-purple-100 text-purple-600",
    check: "text-purple-500",
    cta: "bg-purple-600 text-white hover:bg-purple-700",
  },
};

export interface PricingFeature {
  label: string;
  included: boolean;
}

export interface PricingPlan {
  id: string;
  order: number;
  theme: PlanTheme;
  name: string;
  badge?: string;
  ribbonLabel?: string;
  price: string;
  priceSuffix: string;
  description: string;
  features: PricingFeature[];
  ctaLabel: string;
  ctaHref: string;
}

export const DEFAULT_PRICING_PLANS: PricingPlan[] = [
  {
    id: "free-play",
    order: 1,
    theme: "neutral",
    name: "Serbest Oyun",
    badge: "1 Saat",
    price: "₺250",
    priceSuffix: "/çocuk",
    description: "Okul sonrası enerji atmak için harika seçenek.",
    features: [
      { label: "Tüm oyun parkurlarına tam erişim", included: true },
      { label: "1 Yetişkin Girişi Ücretsiz", included: true },
      { label: "Oyun çorabı temini", included: true },
      { label: "Atölye materyalleri dahil değildir", included: false },
    ],
    ctaLabel: "Hemen Ara & Bilgi Al",
    ctaHref: "tel:05XXXXXXXXX",
  },
  {
    id: "all-day-adventure",
    order: 2,
    theme: "featured",
    name: "Gün Boyu Macera",
    badge: "Süresiz Oyun",
    ribbonLabel: "En Çok Tercih Edilen · Sınırsız Keyif",
    price: "₺400",
    priceSuffix: "/çocuk",
    description: "İstediğiniz kadar kalın, mola verip tekrar girin!",
    features: [
      { label: "Sınırsız oyun saati (Çıkış-Giriş serbest)", included: true },
      { label: "Anne & Baba Girişi Ücretsiz", included: true },
      { label: "Ebeveynlere 1 Çay & Kahve İkramı", included: true },
      { label: "Günün mini boyama atölyesine katılım", included: true },
    ],
    ctaLabel: "Hemen Rezervasyon Yap",
    ctaHref: "#rezervasyon",
  },
  {
    id: "birthday-package",
    order: 3,
    theme: "purple",
    name: "Doğum Günü Paketi",
    badge: "Özel Parti",
    price: "₺4.500",
    priceSuffix: "'den başlayan",
    description: "Doğum günü partileri için anahtar teslim eğlence.",
    features: [
      { label: "2.5 Saat VIP Parti Alanı ve Süsleme", included: true },
      { label: "12 Çocuğa kadar sınırsız oyun girişi", included: true },
      { label: "Müzik, pasta seremonisi ve oyun ablası", included: true },
      { label: "Doğum günü çocuğuna 1 Aylık Pasaport Hediye", included: true },
    ],
    ctaLabel: "Parti Tarihini Ayırt",
    ctaHref: "#parti-rezervasyon",
  },
];

export type TrustIconKey = "payment" | "flexibleDate" | "siblingDiscount";

const TRUST_ICON_MAP: Record<TrustIconKey, LucideIcon> = {
  payment: CreditCard,
  flexibleDate: CalendarClock,
  siblingDiscount: Users,
};

export interface TrustNote {
  icon: TrustIconKey;
  label: string;
}

export const DEFAULT_TRUST_NOTES: TrustNote[] = [
  { icon: "payment", label: "Kredi Kartı & Nakit Geçerlidir" },
  { icon: "flexibleDate", label: "Doğum Günlerinde Esnek Tarih Değişimi" },
  { icon: "siblingDiscount", label: "Kardeş İndirimi: 2. Kardeşe %20 İndirim" },
];

export interface PricingSectionProps {
  eyebrow?: string;
  heading?: string;
  description?: string;
  plans?: PricingPlan[];
  trustNotes?: TrustNote[];
}

export default function PricingSection({
  eyebrow = "ŞEFFAF & SAMİMİ FİYATLAR",
  heading = "Giriş Tarifeleri & Doğum Günü Paketleri",
  description = "Gizli ücret yok! Süre bazlı girişler ve Mudanya'nın en eğlenceli doğum günü organizasyonları.",
  plans = DEFAULT_PRICING_PLANS,
  trustNotes = DEFAULT_TRUST_NOTES,
}: PricingSectionProps) {
  const sortedPlans = [...plans].sort((a, b) => a.order - b.order);

  return (
    <section className="bg-gradient-to-b from-violet-700 via-purple-700 to-purple-800 py-16">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80">
            {eyebrow}
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {heading}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-white/70">{description}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-start">
          {sortedPlans.map((plan) => {
            const theme = THEME_CLASSES[plan.theme];
            return (
              <div
                key={plan.id}
                className={`relative flex flex-col rounded-3xl p-6 ${theme.card} ${
                  plan.theme !== "featured" ? "shadow-xl" : ""
                }`}
              >
                {plan.ribbonLabel && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-pink-500 to-orange-500 px-4 py-1.5 text-[10px] font-bold uppercase tracking-wide text-white shadow-md">
                    {plan.ribbonLabel}
                  </span>
                )}

                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-bold text-gray-900">{plan.name}</h3>
                  {plan.badge && (
                    <span
                      className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-bold ${theme.badge}`}
                    >
                      {plan.badge}
                    </span>
                  )}
                </div>

                <p className="mt-3">
                  <span className={`text-3xl font-extrabold ${theme.price}`}>{plan.price}</span>
                  <span className="ml-1 text-sm text-gray-500">{plan.priceSuffix}</span>
                </p>
                <p className="mt-1 text-xs text-gray-500">{plan.description}</p>

                <ul className="mt-5 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature.label} className="flex items-start gap-2 text-xs">
                      {feature.included ? (
                        <Check className={`mt-0.5 h-4 w-4 shrink-0 ${theme.check}`} aria-hidden="true" />
                      ) : (
                        <X className="mt-0.5 h-4 w-4 shrink-0 text-gray-300" aria-hidden="true" />
                      )}
                      <span className={feature.included ? "text-gray-700" : "text-gray-400"}>
                        {feature.label}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.ctaHref}
                  className={`mt-6 block rounded-full px-4 py-3 text-center text-sm font-semibold transition-colors ${theme.cta}`}
                >
                  {plan.ctaLabel}
                </a>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {trustNotes.map((note) => {
            const Icon = TRUST_ICON_MAP[note.icon];
            return (
              <span
                key={note.label}
                className="flex items-center gap-1.5 text-xs font-medium text-white/70"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                {note.label}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}