"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { howToUseSteps, supportFeatures } from "@/lib/constants";
import { ArrowRight, Calculator, Truck, Globe2 } from "lucide-react";

function ServiceHeroSection() {
  return (
    <section className="bg-sky-50 py-20 px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-sky-800">
        サービス紹介
      </h1>
      <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
        面倒な海外輸入の作業をすべて自動化。
        <br />
        「まるなげ！ザ・ワールドEC」があなたのビジネスを強力にサポートします。
      </p>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    {
      id: "feature-1",
      icon: Calculator,
      title: "損益も自動でパッと見える！",
      desc: "注文・配送・経費を自動計算。利益がどれくらい出ているか、すぐにチェックできます。",
    },
    {
      id: "feature-2",
      icon: Truck,
      title: "荷受けからお届けまで全部おまかせ！",
      desc: "海外→日本までの配送をワンストップで管理。荷受手数料も国内手数料も0円です。",
    },
    {
      id: "feature-3",
      icon: Globe2,
      title: "仕入れも出品も“ほぼ自動化”",
      desc: "提携の出品代行サービスと組み合わせれば、まるで自動販売機のように動きます。",
    },
  ];

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-sky-700 mb-12">
        まるなげ！が選ばれる3つのポイント
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <Card key={feature.id} className="shadow-sm border-none hover:shadow-lg transition">
              <CardContent className="py-10 text-center">
                <Icon className="w-10 h-10 text-sky-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-sky-700">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

function HowToUseSection() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <h2 className="text-3xl font-bold text-center text-sky-700 mb-12">
        ご利用はカンタン4ステップ！
      </h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-8">
        {howToUseSteps.map((s) => (
          <Card key={s.id} className="text-center border-none shadow-sm bg-white hover:shadow-md transition">
            <CardContent className="py-8">
              <div className="text-sky-600 font-bold mb-2">{s.step}</div>
              <h3 className="text-lg font-semibold mb-2 text-sky-700">{s.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="text-center mt-12">
        <Button asChild variant="outline">
          <Link href="/how-to-use">
            詳しい使い方を見る <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}

function SupportSection() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-sky-700 mb-12">
        手厚いサポート体制
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {supportFeatures.map((feature) => {
          const Icon = feature.icon;
          return (
            <Card key={feature.id} className="shadow-sm border-none hover:shadow-lg transition">
              <CardContent className="py-10 text-center">
                <Icon className="w-10 h-10 text-sky-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-sky-700">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="bg-sky-500 text-white text-center py-20 px-6">
      <h2 className="text-3xl font-bold mb-4">
        さあ、まるなげでビジネスを加速させよう
      </h2>
      <p className="mb-8 text-lg leading-relaxed">
        あなたに最適なプランをご提案します。
        <br />
        まずは料金プランをご確認ください。
      </p>
      <div className="flex justify-center gap-4 flex-wrap">
        <Button asChild size="lg" className="bg-white text-sky-600 hover:bg-sky-50 font-semibold">
          <Link href="/#pricing">
            料金プランを見る <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
}

export default function ServicePage() {
  return (
    <>
      <Header />
      <main>
        <ServiceHeroSection />
        <FeaturesSection />
        <HowToUseSection />
        <SupportSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
