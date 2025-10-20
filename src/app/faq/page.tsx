"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { faqs } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

function FaqHeroSection() {
  return (
    <section className="bg-gray-50 py-20 px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-sky-800">
        よくあるご質問
      </h1>
      <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
        サービスに関するご不明点がございましたら、まずはこちらをご確認ください。
      </p>
    </section>
  );
}

function FaqListSection() {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">
      {faqs.map((category) => (
        <div key={category.category} className="mb-12">
          <h2 className="text-2xl font-bold text-sky-700 mb-6 border-b-2 border-sky-200 pb-2">
            {category.category}
          </h2>
          <div className="space-y-4">
            {category.items.map((item) => (
              <details key={item.id} className="p-4 border rounded-lg bg-white group">
                <summary className="font-semibold cursor-pointer list-none flex justify-between items-center">
                  {item.q}
                  <div className="text-sky-500 transform transition-transform duration-200 group-open:rotate-90">
                    <ArrowRight size={16} />
                  </div>
                </summary>
                <div className="mt-4 pt-4 border-t border-gray-200 text-gray-700 leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

function CtaSection() {
  return (
    <section className="bg-sky-50 py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-sky-700 mb-4">
          問題は解決しましたか？
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          こちらに記載のないご質問や、より詳しい情報が必要な場合は、
          <br />
          お気軽に無料相談フォームよりお問い合わせください。
        </p>
        <Button asChild size="lg" className="bg-sky-500 hover:bg-sky-600">
          <Link href="/contact">
            無料相談・お問い合わせ <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
}

export default function FaqPage() {
  return (
    <>
      <Header />
      <main>
        <FaqHeroSection />
        <FaqListSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}

