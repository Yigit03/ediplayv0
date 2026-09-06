import Image from "next/image";
import {Image as ImageIcon,ArrowRight,} from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import type { StaticImageData } from "next/image";
import MomDadCafe from "@/src/assets/MomDadCafe.png";
import Trambolin from "@/src/assets/trambolin.jpg";
import Events from "@/src/assets/events.jpg"
import PrivateToAge from "@/src/assets/PrivateToAge.png"
import HeroPlayground from "@/src/assets/HeroPlayground.png"
/**
 * ----------------------------------------------------------------------------
 * DATA CONTRACT
 * ----------------------------------------------------------------------------
 * This shape is intentionally DB-friendly:
 * - Plain strings/arrays only (no components/functions) so it can be the exact
 *   JSON a future `gallery_posts` table / admin-panel form would produce.
 * - `badgeTheme` is a closed set of keys (not raw hex/Tailwind classes) so an
 *   editor in the admin panel can offer a color picker without risking broken
 *   class names reaching the DB.
 * - `order` decides render position, so re-ordering in the admin panel is just
 *   an UPDATE on an integer column, not a code change.
 *
 * When this becomes DB-backed, the parent Server Component will do:
 *   const posts = await getGalleryPosts();
 *   <HappyMomentsSection posts={posts} />
 * and nothing inside this file needs to change.
 * ----------------------------------------------------------------------------
 */

export type BadgeTheme = "pink" | "orange" | "purple" | "sky";

export interface GalleryBadge {
  label: string;
  theme: BadgeTheme;
}

export interface GalleryPost {
  id: string;
  order: number;
  /** "large" renders as the big collage tile, "small" as a single-photo tile. */
  size: "large" | "small";
  /** Large tiles use several thumbnails to form a collage; small tiles use images[0] only. */
  images: StaticImageData[];
  badges: GalleryBadge[];
  title: string;
  description?: string;
  href?: string;
}

const BADGE_THEME_CLASSES: Record<BadgeTheme, string> = {
  pink: "bg-pink-500 text-white",
  orange: "bg-orange-500 text-white",
  purple: "bg-purple-600 text-white",
  sky: "bg-sky-500 text-white",
};

export const DEFAULT_GALLERY_POSTS: GalleryPost[] = [
  {
    id: "special-days",
    order: 1,
    size: "large",
    images: [
      MomDadCafe,
      Events,
      PrivateToAge,
      Trambolin,
      HeroPlayground,
      MomDadCafe,
      Events,
      PrivateToAge,
    ],
    badges: [
      { label: "Mudanya'da Eğlence", theme: "pink" },
      { label: "Doğum Günü & Kahvaltı", theme: "orange" },
    ],
    title: "Özel Günler & Temalı Etkinlikler",
    description:
      "Zafer Bayramı atölyeleri, Stitch maskot buluşmaları, doğum günleri ve 1. yıl kutlamalarımız.",
    href: "#galeri",
  },
  {
    id: "slides-tunnels",
    order: 2,
    size: "small",
    images: [PrivateToAge],
    badges: [{ label: "Top Havuzu & Tırmanma", theme: "purple" }],
    title: "Neşeli Kaydıraklar ve Tüneller",
    href: "#galeri",
  },
  {
    id: "sensory-steps",
    order: 3,
    size: "small",
    images: [Events],
    badges: [{ label: "1-3 Yaş Güvenli Oyun", theme: "sky" }],
    title: "Duyusal Bloklar & İlk Adımlar",
    href: "#galeri",
  },
];

interface HappyMomentsSectionProps {
  posts?: GalleryPost[];
  instagramHandle?: string;
  instagramNote?: string;
}

export default function HappyMomentsSection({
  posts = DEFAULT_GALLERY_POSTS,
  instagramHandle = "@ediplaymudanya",
  instagramNote = "Haftalık sürpriz atölyeler ve indirimli saatler sosyal medya hesabımızda paylaşılıyor!",
}: HappyMomentsSectionProps) {
  const sortedPosts = [...posts].sort((a, b) => a.order - b.order);
  const largePost = sortedPosts.find((post) => post.size === "large");
  const smallPosts = sortedPosts.filter((post) => post.size === "small");

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-pink-50 px-3 py-1 text-xs font-semibold text-pink-600">
            <ImageIcon className="h-3.5 w-3.5" aria-hidden="true" />
            NEŞELİ KARELER
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Edi Play&apos;de Günlük Mutluluk Anları
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-gray-500">
            Mudanya&apos;daki merkezimizden kahvaltı etkinlikleri, 30 Ağustos
            kutlamaları, 1. yaş doğum günleri ve serbest oyun anları.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:grid-rows-2">
          {largePost && <GalleryTile post={largePost} className="lg:row-span-2" />}
          {smallPosts.map((post) => (
            <GalleryTile key={post.id} post={post} />
          ))}
        </div>

        <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-2xl bg-gradient-to-r from-pink-50 via-orange-50 to-pink-50 p-4 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 via-pink-500 to-orange-400 text-white">
              <FaInstagram className="h-5 w-5" aria-hidden="true" />
            </span>
            <div className="text-xs sm:text-sm">
              <p className="font-semibold text-gray-800">
                Bizi Instagram&apos;da Takip Edin:{" "}
                <span className="text-pink-600">{instagramHandle}</span>
              </p>
              <p className="mt-0.5 text-gray-500">{instagramNote}</p>
            </div>
          </div>
          <a
            href={`https://instagram.com/${instagramHandle.replace("@", "")}`}
            target="_blank"
            rel="noreferrer"
            className="flex shrink-0 items-center gap-1.5 rounded-full border border-pink-200 bg-white px-5 py-2 text-xs font-semibold text-pink-600 transition-colors hover:bg-pink-50 sm:text-sm"
          >
            Takip Et
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

function GalleryTile({ post, className = "" }: { post: GalleryPost; className?: string }) {
  const isLarge = post.size === "large";

  return (
    <a
      href={post.href ?? "#"}
      className={`group relative block overflow-hidden rounded-2xl shadow-md ${
        isLarge ? "min-h-[22rem]" : "min-h-[10.5rem]"
      } ${className}`}
    >
      {isLarge ? (
        <div className="grid h-full grid-cols-4 grid-rows-2">
          {post.images.slice(0, 8).map((src, i) => (
            <div key={i} className="relative">
              <Image
                src={src}
                alt=""
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      ) : (
        <Image
          src={post.images[0]}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
        <div className="flex flex-wrap gap-1.5">
          {post.badges.map((badge) => (
            <span
              key={badge.label}
              className={`rounded-full px-2.5 py-1 text-[10px] font-bold ${BADGE_THEME_CLASSES[badge.theme]}`}
            >
              {badge.label}
            </span>
          ))}
        </div>
        <h3 className={`mt-2 font-extrabold text-white ${isLarge ? "text-xl" : "text-sm"}`}>
          {post.title}
        </h3>
        {post.description && (
          <p className="mt-1 max-w-md text-xs leading-relaxed text-white/80">
            {post.description}
          </p>
        )}
      </div>
    </a>
  );
}