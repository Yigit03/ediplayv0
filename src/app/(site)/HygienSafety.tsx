import { ShieldCheck, Droplets, UserCheck, Lock, BadgeCheck, PlusCircle } from "lucide-react";

interface StandardCard {
  icon: typeof Droplets;
  iconBg: string;
  cardBg: string;
  title: string;
  description: string;
}

const STANDARD_CARDS: StandardCard[] = [
  {
    icon: Droplets,
    iconBg: "bg-sky-500",
    cardBg: "bg-sky-50",
    title: "Günlük Ozon & Buharlı Temizlik",
    description:
      "Her akşam kapanıştan sonra tüm toplar, tüneller ve minderler çocuk sağlığına uygun antibakteriyel buharla dezenfekte edilir.",
  },
  {
    icon: UserCheck,
    iconBg: "bg-pink-500",
    cardBg: "bg-pink-50",
    title: "Eğitimli Oyun Abaları",
    description:
      "Oyun alanının içinde her an çocukları gözlemleyen, minik kazaları önleyen ve oyun kuran güler yüzlü ekip arkadaşlarımız mevcuttur.",
  },
  {
    icon: Lock,
    iconBg: "bg-purple-600",
    cardBg: "bg-purple-50",
    title: "Güvenlikli Giriş & Çıkış Kapısı",
    description:
      "Çocukların kapıdan tek başına çıkmasını engelleyen ebeveyn kontrollü manyetik emniyet kilidi bulunmaktadır.",
  },
  {
    icon: BadgeCheck,
    iconBg: "bg-orange-500",
    cardBg: "bg-orange-50",
    title: "Sertifikalı Yumuşak Zemin",
    description:
      "Açık uçda veya sert köşe barındırmayan, EN-1176 Avrupa standartlarına uygun yüksek yoğunluklu sünger kaplamalar.",
  },
];

export default function HygieneSafetySection() {
  return (
    <section className="bg-gradient-to-br from-sky-50 via-white to-purple-50 py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="rounded-3xl bg-white p-6 shadow-xl shadow-purple-100/60 sm:p-10">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-600">
            <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
            ANNELERİN İÇİNİ RAHATLATAN STANDARTLAR
          </span>

          <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Edi Play&apos;de Hijyen ve Güvenlik Birinci Öncelik
          </h2>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-gray-500">
            Çocuklarınız güvenle koşup oynarken sizler de kafemizde huzur
            içinde kahvenizi yudumlayabilirsiniz.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STANDARD_CARDS.map(({ icon: Icon, iconBg, cardBg, title, description }) => (
              <div key={title} className={`rounded-2xl p-5 ${cardBg}`}>
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-xl text-white ${iconBg}`}
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-sm font-bold text-gray-900">{title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-gray-500">
                  {description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-col items-start justify-between gap-3 rounded-2xl bg-gradient-to-r from-purple-50 to-pink-50 p-4 sm:flex-row sm:items-center">
            <p className="flex items-center gap-2 text-xs font-medium text-gray-700 sm:text-sm">
              <PlusCircle className="h-5 w-5 shrink-0 text-purple-600" aria-hidden="true" />
              İlk yardım sertifikalı personelimiz ve çocuk hijyen kitlerimiz
              her an hazırdır.
            </p>
            <a
              href="tel:05XXXXXXXXX"
              className="shrink-0 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-500 px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition-opacity hover:opacity-90 sm:text-sm"
            >
              Bilgi Al: 0(5XX) XXX XX XX
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}