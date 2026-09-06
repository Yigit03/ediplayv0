import { PartyPopper, ShieldCheck, Smile, Coffee, type LucideIcon } from "lucide-react";

interface FeatureCard {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  description: string;
  className: string;
}

const FEATURE_CARDS: FeatureCard[] = [
  {
    icon: PartyPopper,
    eyebrow: "Mudanya'nın İlk & Teki",
    title: "Eğlence Parkı",
    description:
      "Geniş, ferah ve her yaş grubuna özel ayrılmış macera parkurları.",
    className: "bg-gradient-to-br from-pink-500 to-pink-600",
  },
  {
    icon: ShieldCheck,
    eyebrow: "%100 Hijyenik & Güvenli",
    title: "Yumuşak Koruma",
    description:
      "Darbe emici sünger kaplamalar, toksik madde içermeyen malzemeler.",
    className: "bg-gradient-to-br from-purple-600 to-purple-700",
  },
  {
    icon: Smile,
    eyebrow: "Miniklere Ayrı Dünya",
    title: "1-3 Yaş Özel Alan",
    description:
      "Büyük çocuk çarpışması olmadan bebeklere duyusal keşif bahçesi.",
    className: "bg-gradient-to-br from-sky-500 to-sky-600",
  },
  {
    icon: Coffee,
    eyebrow: "Velilere Konfor",
    title: "Edi Cafe Lounge",
    description:
      "Taze kahveler, pasta çeşitleri ve çocuğu izleme camı ile dinlenme keyfi.",
    className: "bg-gradient-to-br from-orange-500 to-orange-600",
  },
];

export default function FeatureCards() {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-4 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {FEATURE_CARDS.map(({ icon: Icon, eyebrow, title, description, className }) => (
          <div
            key={title}
            className={`rounded-4xl p-6 text-white shadow-lg ${className}`}
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/20">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <p className="mt-4 text-[10px] font-semibold uppercase tracking-wide text-white/80">
              {eyebrow}
            </p>
            <h3 className="mt-1 text-xl font-bold">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/85">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}