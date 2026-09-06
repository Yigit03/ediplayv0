"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

/**
 * `order` decides render position and `defaultOpen` decides which panel is
 * expanded on load — both plain data fields, so an admin panel can manage
 * question order and the "featured" open question without touching this file.
 */

export interface FaqItem {
  id: string;
  order: number;
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export const DEFAULT_FAQ_ITEMS: FaqItem[] = [
  {
    id: "socks",
    order: 1,
    question: "Çorap zorunluluğu var mı?",
    answer:
      "Evet, hijyen ve kaymayı önleme amacıyla oyun alanına girişlerde çocukların ve refakat eden velilerin kaydırmaz tabanlı çorap giymesi zorunludur. Yanınızda getirebilir veya resepsiyonumuzdan temin edebilirsiniz.",
    defaultOpen: true,
  },
  {
    id: "leave-child",
    order: 2,
    question: "Çocuğumu bırakıp alışverişe veya işe gidebilir miyim?",
    answer:
      "Güvenlik politikamız gereği çocuklar oyun alanında refakatsiz bırakılamaz. Ebeveyn veya belirlediğiniz bir yetişkin refakatçinin tesis içinde bulunması gerekmektedir.",
  },
  {
    id: "outside-cake",
    order: 3,
    question: "Doğum günü için dışarıdan pasta getirebilir miyiz?",
    answer:
      "Evet, doğum günü paketlerinde dışarıdan pasta getirebilirsiniz. Dilerseniz kesim servisi ve tabak-çatal takımını bizden temin edebilirsiniz.",
  },
];

export interface FaqSectionProps {
  eyebrow?: string;
  heading?: string;
  items?: FaqItem[];
}

export default function FaqSection({
  eyebrow = "AKLINIZA TAKILANLAR",
  heading = "Sıkça Sorulan Sorular",
  items = DEFAULT_FAQ_ITEMS,
}: FaqSectionProps) {
  const sortedItems = [...items].sort((a, b) => a.order - b.order);
  const [openId, setOpenId] = useState<string | null>(
    sortedItems.find((item) => item.defaultOpen)?.id ?? null
  );

  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-wide text-purple-600">
            {eyebrow}
          </span>
          <h2 className="mt-1 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {heading}
          </h2>
        </div>

        <div className="mt-8 space-y-3">
          {sortedItems.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-colors ${
                  isOpen ? "border-transparent bg-white shadow-sm" : "border-gray-200 bg-white"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-sm font-bold text-gray-900">{item.question}</span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-gray-400 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>
                {isOpen && (
                  <p className="px-5 pb-4 text-xs leading-relaxed text-gray-500">
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}