"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Package, Upload, Settings, BarChart3 } from "lucide-react";

const flowSteps = [
  {
    icon: Upload,
    step: "STEP 1",
    title: "売れ筋商品を選定・出品",
    desc: "豊富な販売データをもとに、売れやすい商品を出品。",
  },
  {
    icon: Settings,
    step: "STEP 2",
    title: "出品・在庫を自動化",
    desc: "専任スタッフ＋自動ツールで在庫更新や価格設定も自動。",
  },
  {
    icon: Package,
    step: "STEP 3",
    title: "注文が入ったら仕入れ",
    desc: "あなたは商品を仕入れるだけ！その後は自動で配送へ。",
  },
  {
    icon: BarChart3,
    step: "STEP 4",
    title: "売上データ共有",
    desc: "売上と損益はスプレッドシートで一括確認できます。",
  },
];

function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-sky-500 to-sky-400 text-white py-24 px-6 text-center md:text-left">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-5xl font-bold mb-4"
      >
        出品作業、まるごとプロにおまかせ！
      </motion.h1>
      <p className="text-lg md:text-xl mb-8 leading-relaxed">
        あなたは仕入れるだけ。出品・登録・価格設定まで、すべて代行。
        <br />
        忙しい方や副業初心者でも、手間ゼロでEC販売を始められます。
      </p>
      <div className="flex justify-center md:justify-start gap-4 flex-wrap">
        <Button asChild size="lg" className="bg-white text-sky-600 hover:bg-sky-50 font-semibold">
          <Link href="/contact">
            無料で相談する
          </Link>
        </Button>
        <Button asChild size="lg" variant="secondary" className="bg-transparent border border-white text-white hover:bg-white hover:text-sky-600">
          <Link href="/contact">
            オンライン相談を予約
          </Link>
        </Button>
      </div>
    </section>
  );
}

function OverviewSection() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto text-center md:text-left">
      <h2 className="text-3xl font-bold text-sky-700 mb-8">出品代行サービスとは？</h2>
      <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12">
        あなたに代わって商品登録・説明文作成・価格設定・在庫管理などを行うサービスです。
        <br />
        「まるなげ！ザ・ワールドEC」と連携して、<strong>仕入れ→出品→配送→売上管理</strong>までをワンストップで自動化します。
      </p>
      <div className="flex justify-center gap-6 text-gray-700">
        <span>✅ Amazon（提供中）</span>
        <span>🚀 eBay（準備中）</span>
        <span>🏪 Shopify（順次対応予定）</span>
      </div>
    </section>
  );
}

function FlowSection() {
  return (
    <section className="bg-sky-50 py-20 px-6 text-center md:text-left">
      <h2 className="text-3xl font-bold text-center text-sky-700 mb-12">出品代行の流れ（4ステップ）</h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-8">
        {flowSteps.map((f, i) => {
          const Icon = f.icon;
          return (
            <Card key={i} className="text-center border-none shadow-sm hover:shadow-md transition bg-white">
              <CardContent className="py-8">
                <Icon className="w-10 h-10 text-sky-500 mx-auto mb-4" />
                <div className="text-sky-600 font-bold mb-1">{f.step}</div>
                <h3 className="text-lg font-semibold mb-2 text-sky-700">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    { title: "完全連携型", desc: "出品代行で販売した商品は、「まるなげ！ザ・ワールドEC」の配送管理とシームレスにデータ連携。仕入れから出荷まで一気通貫。" },
    { title: "AI＋人力のハイブリッド運用", desc: "AIがタイトル・説明文を生成し、専任スタッフが品質チェック。スピードと精度を両立します。" },
    { title: "Amazon対応（順次拡大予定）", desc: "現在はAmazonに対応中。今後はeBayやShopifyなどの海外モールにも展開予定です。" },
    { title: "明朗会計の手数料制", desc: "固定費なしで、販売金額の5%のみ。売上があるときだけ費用が発生します。" },
  ];
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto text-center md:text-left">
      <h2 className="text-3xl font-bold text-center text-sky-700 mb-12">まるなげ出品代行の強み</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {features.map((feature, i) => (
          <Card key={i} className="shadow-sm border-none bg-white p-6">
            <CardContent>
              <h3 className="text-xl font-bold mb-2 text-sky-700">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function FaqSection() {
  const faqs = [
    { q: "出品モールを複数選べますか？", a: "現在は、Amazonのみのサービス提供となります。<br />今後、eBayやShopifyなどの海外モールに順次展開予定です。" },
    { q: "商品画像や説明文はどうなりますか？", a: "AIで自動生成し、専任スタッフが最終チェックを行います。" },
    { q: "出品数に制限はありますか？", a: "特に上限はありません。販売規模に合わせて柔軟に対応します。" },
  ];
  return (
    <section className="bg-gray-50 py-20 px-6 text-center md:text-left">
      <h2 className="text-3xl font-bold text-center text-sky-700 mb-10">よくある質問</h2>
      <div className="max-w-3xl mx-auto space-y-6 text-left">
        {faqs.map((faq, i) => (
          <Card key={i} className="p-6 border-none shadow-sm bg-white">
            <h3 className="font-semibold text-sky-700 mb-2">Q. {faq.q}</h3>
            <p className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: faq.a }} />
          </Card>
        ))}
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="bg-sky-500 text-white text-center md:text-left py-20 px-6">
      <h2 className="text-3xl font-bold mb-4">出品の手間、ぜんぶプロにまるなげ！</h2>
      <p className="mb-8 text-lg leading-relaxed">
        登録・在庫・価格設定・説明文作成まで、全部まとめて代行！
        <br />
        あなたは仕入れるだけでOKです。
      </p>
      <div className="flex justify-center md:justify-start gap-4 flex-wrap">
        <Button asChild size="lg" className="bg-white text-sky-600 hover:bg-sky-50 font-semibold">
          <Link href="/contact">無料相談する</Link>
        </Button>
        <Button asChild size="lg" variant="secondary" className="border border-white text-white hover:bg-white hover:text-sky-600">
          <Link href="/contact">オンライン相談を予約</Link>
        </Button>
      </div>
    </section>
  );
}

export default function ListingAgencyPage() {
  return (
    <>
      <Header />
      <main className="bg-white text-gray-800">
        <HeroSection />
        <OverviewSection />
        <FlowSection />
        <FeaturesSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
