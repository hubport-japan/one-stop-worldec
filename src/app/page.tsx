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
import { Check, Minus, ArrowRight, Globe, Truck, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 overflow-hidden bg-gradient-to-b from-sky-50 to-white">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] bg-sky-100/50 rounded-full blur-3xl" />
        <div className="absolute top-[20%] -left-[10%] w-[50%] h-[50%] bg-blue-100/50 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <motion.div
            className="flex-1 text-center md:text-left"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-block mb-4 px-4 py-1.5 rounded-full bg-sky-100 text-sky-700 font-semibold text-sm">
              🚀 海外物販を、もっと自由に、もっと簡単に
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-extrabold mb-6 text-slate-900 tracking-tight leading-tight"
            >
              海外仕入れから<br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600">
                国内配送までぜんぶおまかせ
              </span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl mb-10 leading-relaxed text-slate-600 max-w-2xl mx-auto md:mx-0"
            >
              「まるなげ！ザ・ワールドEC」は、面倒な配送管理・利益計算・在庫管理をワンストップで代行。<br className="hidden md:block" />
              あなたは「売れる商品」を見つけるだけ。あとは私たちが動きます。
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <Button asChild size="lg" className="h-14 px-8 text-lg bg-sky-600 hover:bg-sky-700 text-white shadow-lg hover:shadow-xl transition-all rounded-full">
                <Link href="/contact">
                  無料で相談する <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 px-8 text-lg border-2 border-slate-200 hover:border-sky-200 hover:bg-sky-50 text-slate-700 rounded-full">
                <Link href="/#pricing">
                  料金プランを見る
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex-1 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-6 border border-slate-100 transform rotate-2 hover:rotate-0 transition-transform duration-500">
              {/* Placeholder for a dashboard or app screenshot */}
              <div className="aspect-[4/3] bg-slate-100 rounded-lg overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center text-slate-300">
                  <Image src="/images/feature-illust-01.png" alt="Dashboard" width={600} height={450} className="object-cover" />
                </div>
              </div>
              <div className="mt-4 flex gap-4">
                <div className="h-2 w-1/3 bg-slate-100 rounded-full" />
                <div className="h-2 w-1/4 bg-slate-100 rounded-full" />
              </div>
            </div>
            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-8 -right-8 bg-white p-4 rounded-xl shadow-xl border border-slate-50 z-20"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-lg text-green-600">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">利益率改善</p>
                  <p className="text-lg font-bold text-slate-800">+125%</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    {
      id: 1,
      icon: BarChart3,
      title: "損益も自動でパッと見える",
      desc: "注文データ、配送状況、経費情報を一元管理。利益とコストを可視化して、どんぶり勘定から脱却しましょう。",
      color: "bg-blue-100 text-blue-600",
    },
    {
      id: 2,
      icon: Truck,
      title: "荷受けからお届けまで全部おまかせ",
      desc: "海外倉庫での荷受け、まとめ発送、国内配送までを一括代行。面倒な手続きは一切不要です。",
      color: "bg-sky-100 text-sky-600",
    },
    {
      id: 3,
      icon: Globe,
      title: "仕入れも出品も“ほぼ自動化”",
      desc: "提携サービスと連携し、出品・在庫更新・価格設定を自動化。あなたは「仕入れ」に専念できます。",
      color: "bg-indigo-100 text-indigo-600",
    },
  ];

  return (
    <section id="features" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            まるなげ！が選ばれる理由
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            「仕入れ」「物流」「在庫」「出荷」「利益管理」。<br />
            複雑な工程をシンプルにする、3つの強力な機能。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-shadow border border-slate-100"
            >
              <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowToUseSection() {
  return (
    <section id="how-to-use" className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-16">
          ご利用はカンタン4ステップ
        </h2>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-700 -z-10" />

          {howToUseSteps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative flex flex-col items-center"
              >
                <div className="w-24 h-24 bg-slate-800 rounded-full border-4 border-slate-700 flex items-center justify-center mb-6 shadow-xl z-10">
                  <Icon className="w-10 h-10 text-sky-400" />
                </div>
                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 w-full hover:bg-slate-800 transition-colors">
                  <div className="text-sky-400 font-bold mb-2 text-sm tracking-wider">{s.step}</div>
                  <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-sky-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            あなたにぴったりの料金プラン
          </h2>
          <p className="text-slate-600 text-lg">
            荷受・国内配送料はいつでも0円。シンプルで分かりやすい料金体系です。
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="p-6 text-left text-slate-500 font-medium w-1/4">機能・サービス</th>
                  {pricingPlans.map((p) => (
                    <th key={p.id} className="p-6 w-1/4">
                      <div className="text-xl font-bold text-slate-900 mb-1">{p.plan}</div>
                      {p.id === "plan-pro" && <span className="bg-sky-100 text-sky-700 text-xs px-2 py-1 rounded-full ml-2">おすすめ</span>}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {planDetails.features.map((category) => (
                  <React.Fragment key={category.category}>
                    <tr className="bg-slate-50/50">
                      <td colSpan={4} className="p-4 text-sm font-bold text-slate-700 pl-6">
                        {category.category}
                      </td>
                    </tr>
                    {category.items.map((item) => (
                      <tr key={item.name} className="hover:bg-slate-50 transition-colors">
                        <td className="p-4 pl-6 text-slate-600 font-medium">{item.name}</td>
                        {item.values.map((value, index) => (
                          <td key={index} className="p-4 text-center">
                            {value === "✓" ? (
                              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                                <Check className="w-5 h-5 text-green-600" />
                              </div>
                            ) : value === "-" ? (
                              <Minus className="w-5 h-5 text-slate-300 mx-auto" />
                            ) : (
                              <span className="font-semibold text-slate-700">{value}</span>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td className="p-6"></td>
                  {pricingPlans.map((p) => (
                    <td key={p.id} className="p-6">
                      <Button asChild className={`w-full h-12 rounded-xl font-bold ${p.id === "plan-pro" ? 'bg-sky-600 hover:bg-sky-700 text-white shadow-lg' : 'bg-slate-100 hover:bg-slate-200 text-slate-900'}`}>
                        <Link href="/contact">このプランで始める</Link>
                      </Button>
                    </td>
                  ))}
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

function CaseStudiesSection() {
  return (
    <section id="case-study" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            導入事例
          </h2>
          <p className="text-slate-600 text-lg">
            「まるなげ！」でビジネスを加速させたお客様の声
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full flex flex-col overflow-hidden hover:shadow-xl transition-all duration-300 border-slate-200">
                <div className="relative h-56 bg-slate-100">
                  <Image
                    src={study.image}
                    alt={study.user}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <p className="text-white font-bold text-lg">{study.user}</p>
                  </div>
                </div>
                <CardContent className="p-8 flex-grow flex flex-col">
                  <div className="mb-6">
                    <p className="text-lg font-medium text-slate-800 italic">" {study.quote} "</p>
                  </div>
                  <div className="mt-auto space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500">導入前</span>
                      <span className="text-slate-500 line-through">{study.before}</span>
                    </div>
                    <div className="flex items-center justify-between text-lg font-bold text-sky-600 bg-sky-50 p-3 rounded-lg">
                      <span>導入後</span>
                      <span>{study.after}</span>
                    </div>
                    <div className="text-center pt-2">
                      <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-bold px-3 py-1 rounded-full border border-yellow-200">
                        {study.result}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="py-24 px-6 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-sky-500/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
          さあ、あなたも「まるなげ」で<br />
          ビジネスを加速させませんか？
        </h2>
        <p className="text-lg md:text-xl text-slate-300 mb-12 leading-relaxed">
          面倒な作業はすべて私たちにお任せください。<br />
          まずは無料相談から、あなたのビジネスの可能性を広げましょう。
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Button asChild size="lg" className="h-16 px-10 text-xl bg-sky-500 hover:bg-sky-600 text-white shadow-lg hover:shadow-sky-500/25 rounded-full transition-all transform hover:scale-105">
            <Link href="/contact">
              無料で相談する
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="h-16 px-10 text-xl bg-transparent border-2 border-slate-600 text-white hover:bg-slate-800 hover:border-slate-500 rounded-full transition-all">
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
      <main className="min-h-screen">
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