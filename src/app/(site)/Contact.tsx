
import { MapPin, Clock, Phone, Navigation } from "lucide-react";

/**
 * Contact / Visit information.
 * DB'ye kolay aktarılabilecek sade veri yapısıdır.
 */
export interface VisitInfo {
  eyebrow: string;
  title: string;
  address: string;
  hours: string;
  phone: string;
  mapCtaLabel: string;
  mapHref: string;
  mapEmbedUrl: string;
}

export const DEFAULT_VISIT_INFO: VisitInfo = {
  eyebrow: "MUDANYA'DA KOLAY ULAŞIM",
  title: "Bizi Ziyaret Edin",
  address: "Mudanya Sahil Yolu Yakını, Mudanya / BURSA",
  hours: "Haftanın 7 Günü: 09:00 - 20:30",
  phone: "05XX XXX XX XX",
  mapCtaLabel: "Google Haritalar'da Yol Tarifi Al",
  mapHref: "https://maps.google.com/?q=Edi+Play",
  mapEmbedUrl:
     "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3040.431001154956!2d28.91023739678955!3d40.35496670000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca6df3c98eeb71%3A0xb7720c02f025e5fd!2sEdi%20Play!5e0!3m2!1str!2str!4v1788712410414!5m2!1str!2str",
};

export interface ContactSectionProps {
  visitInfo?: VisitInfo;
}

export default function ContactSection({
  visitInfo = DEFAULT_VISIT_INFO,
}: ContactSectionProps) {
  return (
    <section className="bg-gradient-to-b from-pink-50 to-orange-50 py-16 mb-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 overflow-hidden rounded-3xl bg-gradient-to-br from-pink-50 to-purple-50 shadow-sm lg:grid-cols-2">
          
          {/* SOL - GOOGLE MAPS */}
          <div className="relative min-h-[350px] lg:min-h-[500px]">
            <iframe
              src={visitInfo.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Edi Play konum haritası"
              className="absolute inset-0 h-full w-full"
            />
          </div>

          {/* SAĞ - İLETİŞİM BİLGİLERİ */}
          <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-12">
            
            {/* Başlık */}
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-fuchsia-500 text-white">
                <MapPin
                  className="h-5 w-5"
                  aria-hidden="true"
                />
              </span>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-wide text-pink-500">
                  {visitInfo.eyebrow}
                </p>

                <h2 className="text-xl font-bold text-gray-900">
                  {visitInfo.title}
                </h2>
              </div>
            </div>

            {/* Bilgiler */}
            <div className="mt-8 space-y-4">
              
              <InfoRow
                icon={MapPin}
                label="Adres"
                value={visitInfo.address}
              />

              <InfoRow
                icon={Clock}
                label="Çalışma Saatleri"
                value={visitInfo.hours}
              />

              <InfoRow
                icon={Phone}
                label="Telefon & WhatsApp"
                value={visitInfo.phone}
              />

            </div>

            {/* Yol Tarifi Butonu */}
            <a
              href={visitInfo.mapHref}
              target="_blank"
              rel="noreferrer"
              className="mt-8 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-md transition-opacity hover:opacity-90"
            >
              <Navigation
                className="h-4 w-4"
                aria-hidden="true"
              />

              {visitInfo.mapCtaLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof MapPin;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-4 rounded-2xl bg-white p-4 shadow-sm">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-pink-50">
        <Icon
          className="h-5 w-5 text-pink-500"
          aria-hidden="true"
        />
      </span>

      <div className="min-w-0">
        <p className="text-sm font-bold text-gray-800">
          {label}
        </p>

        <p className="mt-1 text-sm leading-relaxed text-gray-500">
          {value}
        </p>
      </div>
    </div>
  );
}