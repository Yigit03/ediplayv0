import Image from "next/image";
import HeroPlayground from "@/src/assets/HeroPlayground.png";
import PrivateToAge from "@/src/assets/PrivateToAge.png";
import MomDadCafe from "@/src/assets/MomDadCafe.png";
import { Star, Ticket, Compass, Sun, Heart, ClipboardCheck } from "lucide-react";

const TRUST_BADGES = [
  { icon: Sun, label: "Günlük UV & Ozon Hijyeni" },
  { icon: Heart, label: "1 Yaş Bebek - 10 Yaş Çocuk" },
  { icon: ClipboardCheck, label: "Ebeveyn Girişi Ücretsiz" },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-14 lg:grid-cols-2 lg:px-8 lg:py-20">
        {/* Left: copy */}
        <div>
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <span className="flex items-center gap-1.5 font-medium text-gray-700">
              <span className="flex text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" aria-hidden="true" />
                ))}
              </span>
              Mudanya Annelerinin 1 Numaralı Tercihi
            </span>
            <span className="flex items-center gap-1.5 font-medium text-emerald-600">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Bugün Açık 09:00 - 20:00
            </span>
          </div>

          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl">
            Mudanya&apos;nın{" "}
            <span className="relative inline-block text-pink-500">
              İlk ve Tek
              <svg
                viewBox="0 0 200 12"
                className="absolute -bottom-1 left-0 h-3 w-full text-pink-400"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M2 8 C 30 -2, 60 14, 100 6 C 140 -2, 170 14, 198 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            Çocuk Eğlence Dünyası!
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-600">
            <span className="font-semibold text-pink-500">Edi Play</span>,
            çocukların güvenle koşup eğleneceği yumuşak zeminli macera
            labirentleri, trambolinler ve atölyelerle donatıldı. Ebeveynler
            için lezzetli taze kahveler ve huzur dolu cafe köşesi sizleri
            bekliyor!
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#rezervasyon"
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-200 transition-opacity hover:opacity-90"
            >
              <Ticket className="h-4 w-4" aria-hidden="true" />
              Giriş &amp; Doğum Günü Rezervasyonu
            </a>
            <a
              href="#oyun-alanlari"
              className="flex items-center gap-2 rounded-full border border-purple-200 bg-white px-6 py-3 text-sm font-semibold text-purple-600 transition-colors hover:bg-purple-50"
            >
              <Compass className="h-4 w-4" aria-hidden="true" />
              Oyun Alanlarını Keşfet
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {TRUST_BADGES.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3.5 py-2 text-xs font-medium text-gray-600"
              >
                <Icon className="h-3.5 w-3 text-pink-500" aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Right: image with floating detail cards */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-purple-200">
            <Image
              src={HeroPlayground}
              alt="Edi Play iç mekan çocuk oyun alanı"
              width={640}
              height={480}
              className="h-full w-full object-cover"
              priority
            />
            
            <span className="absolute left-4 top-4 flex flex-row items-center justify-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-gray-800 backdrop-blur">
                <span className="relative flex h-4 w-4 items-center justify-center"> 
                    {/* Dalga */} <span className="absolute h-4 w-4 animate-ping rounded-full bg-purple-500 opacity-60" /> 
                    {/* Top */} <span className="relative h-3 w-3 rounded-full bg-purple-600 shadow-sm" /> 
                </span>
                <span>
                    Top Havuzu &amp; Tüp Kaydırak
                </span>
            </span>
          </div>

          {/* Top-right testimonial card */}
          <div className="absolute -top-6 right-2 flex items-center gap-3 rounded-2xl bg-white p-3 shadow-xl sm:right-4">
            <Image
              src={MomDadCafe}
              alt=""
              width={40}
              height={40}
              className="h-10 w-10 rounded-full object-cover"
            />
            <div className="pr-1 text-xs leading-snug">
              <p className="font-bold text-gray-800">Anne &amp; Baba Cafe</p>
              <p className="text-gray-500">Sıcak Kahve &amp; Wi-Fi</p>
              <p className="font-semibold text-emerald-600">Giriş Ücretsiz</p>
            </div>
          </div>

          {/* Bottom safety card */}
          <div className="absolute -bottom-6 left-4 right-4 flex items-center justify-between gap-3 rounded-2xl bg-white p-4 shadow-xl sm:left-10 sm:right-10">
            <div className="flex items-center gap-2 text-xs">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                ✓
              </span>
              <div className="leading-snug">
                <p className="font-bold text-gray-800">
                  Yumuşak Koruma &amp; Güvenli Zemin
                </p>
                <p className="text-gray-500">Darbe Emici Kaplama</p>
              </div>
            </div>
            <span className="shrink-0 rounded-full bg-pink-100 px-2.5 py-1 text-[11px] font-semibold text-pink-600">
              0-10 Yaş
            </span>
          </div>

          {/* Bottom-left age group card */}
          <div className="absolute -bottom-2 left-0 flex -translate-x-1/4 translate-y-full items-center gap-2.5 rounded-2xl bg-white p-3 shadow-xl sm:translate-x-0">
            <Image
              src={PrivateToAge}
              alt=""
              width={36}
              height={36}
              className="h-9 w-9 rounded-full object-cover"
            />
            <div className="text-xs leading-snug">
              <p className="font-semibold text-pink-500">1-3 Yaş Özel</p>
              <p className="font-bold text-gray-800">Duyusal Bloklar</p>
              <a href="#guvenlik-hijyen" className="font-medium text-emerald-600">
                Güvenli Oyun →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}