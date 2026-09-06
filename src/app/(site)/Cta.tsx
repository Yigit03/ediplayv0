import { Phone } from "lucide-react";

export interface CtaSectionProps {
  eyebrow?: string;
  heading?: string;
  description?: string;
  phoneLabel?: string;
  phoneHref?: string;
}

export default function CtaSection({
  eyebrow = "Bugün Neşeli Bir Gün Olsun",
  heading = "Çocuğunuza Neşe, Kendinize Keyifli Bir Kahve Molası Hediye Edin!",
  description = "Mudanya'nın merkezindeki Edi Play Çocuk Oyun Alanı & Cafe'de yerinizi ayırtın.",
  phoneLabel = "Rezervasyon: 05XX XXX XX XX",
  phoneHref = "tel:05XXXXXXXXX",
}: CtaSectionProps) {
  return (
    <section className="bg-white px-4 pb-16 lg:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-r from-pink-500 via-purple-600 to-orange-500 px-6 py-10 sm:px-10">
        <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <span className="inline-flex rounded-full bg-white/20 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
              {eyebrow}
            </span>
            <h2 className="mt-3 text-2xl font-extrabold leading-tight text-white sm:text-3xl">
              {heading}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/85">{description}</p>
          </div>

          <a
            href={phoneHref}
            className="flex shrink-0 items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-gray-900 shadow-lg transition-transform hover:scale-105"
          >
            <Phone className="h-4 w-4 text-pink-500" aria-hidden="true" />
            {phoneLabel}
          </a>
        </div>
      </div>
    </section>
  );
}