"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { caseStudies } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

function CaseStudyHeroSection() {
  return (
    <section className="bg-gray-50 py-20 px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-sky-800">
        導入事例
      </h1>
      <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
        「まるなげ！ザ・ワールドEC」を導入し、
        <br />
        ビジネスを加速させたお客様の声をご紹介します。
      </p>
    </section>
  );
}

function CaseStudyListSection() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
        {caseStudies.map((study) => (
          <Card key={study.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="bg-gray-200 h-48 flex items-center justify-center">
              {/* TODO: Imageコンポーネントに差し替え */}
              <span className="text-gray-500">画像プレースホルダー</span>
            </div>
            <CardContent className="p-6">
              <p className="font-semibold text-sky-700 mb-2">{study.user}</p>
              <p className="text-sm text-gray-600 mb-4 h-20">「{study.quote}」</p>
              <div className="bg-sky-50 p-4 rounded-lg text-center mb-4">
                <p className="text-sm text-gray-500 line-through">{study.before}</p>
                <p className="font-bold text-sky-600 text-lg">{study.after}</p>
              </div>
              <div className="text-center">
                <span className="inline-block bg-yellow-300 text-yellow-800 text-sm font-bold px-3 py-1 rounded-full">
                  {study.result}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="bg-sky-500 text-white text-center py-20 px-6">
      <h2 className="text-3xl font-bold mb-4">次は、あなたの番です</h2>
      <p className="mb-8 text-lg leading-relaxed">
        面倒な作業はまるなげして、ビジネスの成長に集中しませんか？
        <br />
        まずは無料相談で、あなたの課題をお聞かせください。
      </p>
      <div className="flex justify-center gap-4 flex-wrap">
        <Button asChild size="lg" className="bg-white text-sky-600 hover:bg-sky-50 font-semibold">
          <Link href="/contact">
            無料で相談してみる <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
}

export default function CaseStudyPage() {
  return (
    <>
      <Header />
      <main>
        <CaseStudyHeroSection />
        <CaseStudyListSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
