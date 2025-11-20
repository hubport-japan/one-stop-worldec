"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { howToUseDetails, operationFaqs } from "@/lib/constants";
import { ArrowRight, CheckCircle2, Download, Video } from "lucide-react";

function HowToUseHeroSection() {
  return (
    <section className="bg-gray-50 py-20 px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-sky-800">
        ご利用方法
      </h1>
      <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
        たった4つのステップで、面倒な海外輸入が驚くほどシンプルに。
        <br />
        登録から運用までの流れを詳しくご説明します。
      </p>
    </section>
  );
}

function DetailedStepsSection() {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <div className="space-y-20">
        {howToUseDetails.map((item, index) => (
          <div
            key={item.id}
            className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="md:w-1/2 w-full">
              <div className="text-sky-500 font-bold mb-2">{item.step}</div>
              <h2 className="text-3xl font-bold text-sky-700 mb-4">{item.title}</h2>
              <p className="text-gray-600 leading-relaxed mb-6">{item.desc}</p>
              <ul className="space-y-2">
                {item.points.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 w-full bg-gray-100 rounded-lg h-64 flex items-center justify-center">
              {/* TODO: Imageコンポーネントに差し替え */}
              <span className="text-gray-400">図解イメージ {index + 1}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function TutorialSection() {
  return (
    <section className="bg-sky-50 py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-sky-700 mb-4">
          動画とマニュアルで完全サポート
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          実際の操作画面を見ながら学べるチュートリアル動画や、
          <br />
          いつでも確認できるPDFマニュアルをご用意しています。
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Button size="lg" variant="outline" className="border-sky-500 text-sky-600 hover:bg-sky-100 hover:text-sky-700">
            <Video className="mr-2 h-5 w-5" />
            チュートリアル動画を見る
          </Button>
          <Button size="lg" variant="outline" className="border-gray-300">
            <Download className="mr-2 h-5 w-5" />
            PDFマニュアルをDL
          </Button>
        </div>
      </div>
    </section>
  );
}

function OperationFaqSection() {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-center text-sky-700 mb-12">
        よくある操作のご質問
      </h2>
      <div className="space-y-4">
        {operationFaqs.map((item) => (
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
      <div className="text-center mt-12">
        <Button asChild variant="outline">
          <Link href="/faq">
            その他のFAQを見る <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="bg-sky-500 text-white text-center py-20 px-6">
      <h2 className="text-3xl font-bold mb-4">準備はできましたか？</h2>
      <p className="mb-8 text-lg leading-relaxed">
        今すぐ無料登録して、面倒な作業から解放されましょう。
        <br />
        ご不明な点があれば、いつでも専門スタッフがサポートします。
      </p>
      <div className="flex justify-center gap-4 flex-wrap">
        <Button asChild size="lg" className="bg-white text-sky-600 hover:bg-sky-50 font-semibold">
          <Link href="/contact">
            無料で登録・相談する <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
}

export default function HowToUsePage() {
  return (
    <>
      <Header />
      <main>
        <HowToUseHeroSection />
        <DetailedStepsSection />
        <TutorialSection />
        <OperationFaqSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}

