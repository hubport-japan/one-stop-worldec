"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { howToUseSteps, pricingPlans, planDetails, caseStudies } from "@/lib/constants";
import { Check, Minus } from "lucide-react";

function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-sky-50 to-sky-200 py-20 md:py-24 px-6 text-left overflow-hidden">
      <div className="absolute -left-16 -top-16 w-64 h-64 bg-sky-200 rounded-full opacity-50"></div>
      <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-sky-200 rounded-full opacity-50"></div>
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-extrabold mb-4 text-sky-800"
          style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.1)" }}
        >
          海外仕入れから国内配送まで、海外物販はぜんぶおまかせ！
        </motion.h1>
        <p className="text-md md:text-xl mb-10 leading-relaxed text-sky-700">
          <strong>まるなげ！ザ・ワールドEC</strong>（海外輸出入支援） は、<br />
          面倒な配送管理・利益計算・在庫管理をまるっとサポート。<br />
          面倒な手配や計算はもう必要なし！
        </p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex gap-4 flex-wrap"
        >
          <Button asChild size="lg" className="bg-sky-500 text-white hover:bg-sky-600 font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
            <Link href="/contact">
              🎁 無料ではじめる
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="bg-white/50 border-sky-300 text-sky-600 hover:bg-white font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
            <Link href="/#pricing">
              💡 料金プラン
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section id="features" className="bg-white py-12 md:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-sky-700 mb-2">
            まるなげ！が選ばれる理由
          </h2>
          <p className="text-gray-600 text-md md:text-lg max-w-2xl mx-auto text-left">
            海外物販を成功させるためには、「仕入れ」「物流」「在庫」「出荷」「利益管理」など、複数の工程を効率よく回すことが鍵です。<br />
            しかし、これらすべてを個人や少人数で管理するのは大変…。<br />
            そこで「まるなげ！ザ・ワールドEC」は、３つの主要なサポートを柱に、あなたの物販ビジネスを“シンプルで強い仕組み”に変えます。
          </p>
        </div>

        <div className="space-y-16 md:space-y-20">
          {[
            {
              id: 1,
              image: "/images/feature-illust-01.png",
              title: "損益も自動でパッと見える！",
              desc: "注文データ、配送状況、経費情報――これらを別々に管理していませんか？\nまるなげ！では、自動取得されたデータをひとつの管理シートに統合。どれくらい利益が出ているのか、どこにコストがかかっているのか、“見えなかった部分”を可視化します。",
              note: "💡 Pro／Bizプランでは、さらに「損益シミュレーション機能」も付属。仕入れ前に利益を仮算出して、安心して商品を動かせます。",
            },
            {
              id: 2,
              image: "/images/feature-illust-02.png",
              title: "荷受けからお届けまで全部おまかせ！",
              desc: "仕入れた商品が海外から届き、国内のお客様に手元に届くまでには、多くの手配が必要です。\nでも「まるなげ！」なら、米国などの海外倉庫での荷受け → まとめ発送 → 国内指定住所への配送までを一括で行います。",
              note: "🚀 「荷受手数料0円」「国内配送手数料0円」でコストも明確。さらに、お急ぎ便オプションで国内着荷を当日発送できるケースもご用意しています。",
            },
            {
              id: 3,
              image: "/images/feature-illust-03.png",
              title: "仕入れも出品も“ほぼ自動化”",
              desc: "物販での成功は「仕入れる→出品する→販売する」のサイクルを高速に回せるかにかかっています。\nまるなげ！では、提携の出品代行サービスと連携して、出品作業・在庫更新・価格設定などの業務を自動化。\nつまり、あなたは「仕入れ」に専念するだけで、あとはシステムと運用チームが“まるで自動販売機”のように動く物販構造をサポートします。",
              note: (
                <Button asChild variant="outline" className="mt-4 text-sky-600 border-sky-300 hover:bg-sky-100">
                  <Link href="/listing-agency">出品代行サービスを見る</Link>
                </Button>
              ),
            },
          ].map((feature, index) => (
            <div key={feature.id} className={`py-12 px-6 ${index % 2 !== 0 ? 'bg-sky-50' : 'bg-white'}`}>
              <div className={`md:flex md:items-center md:gap-8 max-w-6xl mx-auto ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:w-3/5 mb-8 md:mb-0">
                  <Image src={feature.image} alt={feature.title} width={500} height={375} className="mx-auto rounded-lg shadow-2xl" />
                </div>
                <div className={`text-left md:w-1/2 md:relative ${index % 2 !== 0 ? 'md:ml-0 md:-mr-12' : 'md:-ml-12'}`}>
                  <div className="md:shadow-xl md:bg-white md:rounded-lg p-6 md:p-8">
                    <h3 className="text-2xl font-bold text-sky-700 mb-4">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4 whitespace-pre-line">{feature.desc}</p>
                    <div className="text-md text-gray-500">{feature.note}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 max-w-4xl mx-auto text-center bg-gradient-to-r from-sky-500 to-blue-500 text-white p-10 md:p-12 rounded-2xl shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.2)' }}>
            🎯 会社員の方、専業主婦の方、物販初心者も、みんなまるなげ！
          </h3>
          <p className="text-sky-50 leading-relaxed text-center text-md md:text-lg">
            一人で商品を探して、物流を手配して、計算して…<br />
            そんな負担から解放されたい方へ。<br />
            「まるなげ！ザ・ワールドEC」で、海外仕入れから国内お届けまで、ぜんぶおまかせ。<br />
            さあ、あなたの物販ビジネスを次のステージへ。
          </p>
        </div>
      </div>
    </section>
  );
}

function HowToUseSection() {
  return (
    <section id="how-to-use" className="bg-sky-50 py-20 md:py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-sky-700 mb-4">
          ご利用はカンタン4ステップ！
        </h2>
        <p className="text-gray-600 text-md md:text-lg mb-16">
          お申し込み後、すぐにサービスをご利用いただけます。
        </p>
        <div className="relative grid md:grid-cols-4 gap-8 md:gap-0">
          {howToUseSteps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={s.id} className="relative flex flex-col items-center px-4">
                <div className="relative z-10 flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-white rounded-full shadow-lg border-4 border-sky-100">
                  <Icon className="w-10 h-10 md:w-12 md:h-12 text-sky-500" />
                </div>
                <div className="mt-4">
                  <div className="text-sky-600 font-bold mb-2">{s.step}</div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2 text-sky-800">{s.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
                {i < howToUseSteps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-1 bg-sky-200" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="pricing" className="bg-white py-20 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-sky-700 mb-4">
            あなたにぴったりの料金プラン
          </h2>
          <p className="text-gray-600 text-md md:text-lg">
            荷受・国内配送料はいつでも0円。シンプルで分かりやすい料金体系です。
          </p>
        </div>

        <div className="overflow-x-auto rounded-lg shadow-lg border border-gray-200">
          <table className="w-full min-w-[700px] border-collapse text-center bg-white">
            <thead>
              <tr className="bg-sky-50">
                <th className="w-1/4 p-4 md:p-6 text-left font-semibold text-sky-800">機能</th>
                {pricingPlans.map((p) => (
                  <th key={p.id} className="w-1/4 p-4 md:p-6 border-l border-gray-200">
                    <h3 className="text-xl font-bold text-sky-600">{p.plan}</h3>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {planDetails.features.map((category) => (
                <React.Fragment key={category.category}>
                  <tr>
                    <td colSpan={4} className="text-left font-bold bg-gray-100 p-3 text-gray-700 border-t border-gray-200">
                      {category.category}
                    </td>
                  </tr>
                  {category.items.map((item) => (
                    <tr key={item.name} className="border-t border-gray-200">
                      <td className="text-left p-3 md:p-4 font-medium text-gray-800">{item.name}</td>
                      {item.values.map((value, index) => (
                        <td key={index} className="p-3 md:p-4 text-gray-600 border-l border-gray-200">
                          {value === "✓" ? (
                            <Check className="mx-auto text-green-500" />
                          ) : value === "-" ? (
                            <Minus className="mx-auto text-gray-400" />
                          ) : (
                            <span className="font-semibold text-sm md:text-base">{value}</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-gray-50">
                <td></td>
                {pricingPlans.map((p) => (
                  <td key={p.id} className="p-4 md:p-6 border-l border-gray-200">
                    <Button asChild className="w-full bg-sky-500 hover:bg-sky-600">
                      <Link href="/contact">このプランで始める</Link>
                    </Button>
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </section>
  );
}

function CaseStudiesSection() {
  return (
    <section id="case-study" className="bg-sky-50 py-20 md:py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-sky-700 mb-2">
            お客様の声・導入事例
          </h2>
          <p className="text-gray-600 text-md md:text-lg">
            「まるなげ！」でビジネスを加速させたお客様の声をご紹介します。
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <Card key={study.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="relative h-48 w-full bg-gray-200">
                <Image
                  src={study.image}
                  alt={study.user}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <CardContent className="p-6 flex-grow flex flex-col">
                <p className="font-semibold text-sky-700 mb-2">{study.user}</p>
                <p className="text-sm text-gray-600 mb-4 flex-grow">「{study.quote}」</p>
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
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="relative bg-white py-20 md:py-24 px-6 overflow-hidden">
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-sky-200 rounded-full opacity-50"></div>
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-sky-200 rounded-full opacity-50"></div>
      <div className="relative max-w-4xl mx-auto text-center bg-sky-50/60 backdrop-blur-sm p-10 md:p-12 rounded-2xl shadow-lg border border-white">
        <h2 className="text-2xl md:text-4xl font-bold text-sky-800 mb-4">
          さあ、あなたも「まるなげ」でビジネスを加速させませんか？
        </h2>
        <p className="text-md md:text-lg text-gray-600 mb-10 leading-relaxed">
          面倒な作業はすべておまかせ。
          <br />
          今すぐ無料登録して、海外物販の新しいステージへ。
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Button asChild size="lg" className="bg-sky-500 text-white hover:bg-sky-600 font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
            <Link href="/contact">
              無料で相談する
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="bg-white/50 border-sky-300 text-sky-600 hover:bg-white font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
            <Link href="/#pricing">料金プランを見る</Link>
          </Button>
        </div>
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
        <CaseStudiesSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}