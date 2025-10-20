"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { features, howToUseSteps, pricingPlans } from "@/lib/constants";

function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center text-white py-24 px-6 text-center"
      style={{ backgroundImage: "url('/images/hero-background.jpg')" }}
    >
      <div className="absolute inset-0 bg-sky-800 opacity-70"></div>
      <div className="relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold mb-4 text-shadow-lg"
        >
          海外仕入れから国内配送まで、海外物販はぜんぶおまかせ！
        </motion.h1>
        <p className="text-base md:text-xl mb-8 leading-relaxed text-shadow-md">
          <strong>まるなげ！ザ・ワールドEC</strong>（海外輸出入支援） は、<br />
          面倒な配送管理・利益計算・在庫管理をまるっとサポート。<br />
          面倒な手配や計算はもう必要なし！
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Button size="lg" className="bg-white text-sky-600 hover:bg-sky-50 font-semibold">
            🎁 無料で相談する
          </Button>
          <Button size="lg" variant="secondary" className="bg-transparent border border-white text-white hover:bg-white hover:text-sky-600">
            💡 料金プランを見る
          </Button>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-sky-700">まるなげ！が選ばれる3つのポイント</h2>
      <p className="text-base md:text-lg text-gray-600 mt-4 mb-12">事業を加速させる、シンプルで強力な機能</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <Card key={feature.id} className="border-none shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="relative h-48 w-full">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <CardContent className="py-10">
                <Icon className="w-10 h-10 text-sky-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-sky-700">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{feature.desc}</p>
                {feature.id === "feature-3" && (
                  <Button asChild variant="outline" size="sm">
                    <Link href="/listing-agency">
                      出品代行サービスを見る
                    </Link>
                  </Button>
                )}
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
    <section className="bg-sky-50 py-20 px-6">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-sky-700 mb-12">ご利用はカンタン4ステップ！</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {howToUseSteps.map((s) => (
          <Card key={s.id} className="text-center border-none shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
            <CardContent className="py-8">
              <div className="text-sky-600 font-bold mb-2">{s.step}</div>
              <h3 className="text-lg font-semibold mb-2 text-sky-700">{s.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-sky-700 mb-12">荷受手数料0円・国内配送手数料0円で、明朗会計！</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingPlans.map((p) => (
          <Card key={p.id} className="text-center border-none bg-gradient-to-br from-sky-50 to-sky-100 shadow-lg hover:shadow-2xl transition-all duration-300">
            <CardContent className="py-10">
              <h3 className="text-xl font-bold text-sky-600 mb-2">{p.plan}</h3>
              <p className="text-2xl font-semibold mb-3">{p.price}</p>
              <p className="text-gray-600 mb-3 leading-relaxed">{p.desc}</p>
              <p className="font-semibold text-gray-800 mb-1">配送管理手数料：{p.fee}</p>
              <p className="text-sm text-gray-500 mb-4">{p.sub}</p>
              <Button className="mt-2 bg-sky-500 text-white hover:bg-sky-600">このプランで始める</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="bg-gradient-to-r from-sky-600 to-sky-400 text-white text-center py-20 px-6">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">海外輸入を、もっとやさしく。</h2>
      <p className="mb-8 text-base md:text-lg leading-relaxed">むずかしいことはナシ！<br />管理・配送・損益計算まで、全部“まるなげ”しちゃおう。</p>
      <div className="flex justify-center gap-4 flex-wrap">
        <Button size="lg" className="bg-white text-sky-600 hover:bg-sky-50 font-semibold">無料相談する</Button>
        <Button size="lg" variant="secondary" className="border border-white text-white hover:bg-white hover:text-sky-600">資料をもらう</Button>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="bg-white text-gray-800">
        <HeroSection />
        <FeaturesSection />
        <HowToUseSection />
        <PricingSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}