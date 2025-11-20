"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { pricingPlans, planDetails } from "@/lib/constants";
import { Check, Minus } from "lucide-react";

function PlanHeroSection() {
  return (
    <section className="bg-sky-50 py-20 px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-sky-800">
        料金プラン
      </h1>
      <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
        あなたのビジネス規模に合わせた最適なプランを。
        <br />
        荷受・国内配送料はいつでも0円。シンプルで分かりやすい料金体系です。
      </p>
    </section>
  );
}

function PlanComparisonSection() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-sky-700 mb-12">
        機能比較
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px] border-collapse text-center">
          <thead>
            <tr>
              <th className="w-1/4 p-4"></th>
              {pricingPlans.map((p) => (
                <th key={p.id} className="w-1/4 p-4 border-b-2 border-sky-200">
                  <h3 className="text-xl font-bold text-sky-600">{p.plan}</h3>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {planDetails.features.map((category) => (
              <React.Fragment key={category.category}>
                <tr>
                  <td
                    colSpan={4}
                    className="text-left font-bold bg-gray-100 p-3 text-gray-700"
                  >
                    {category.category}
                  </td>
                </tr>
                {category.items.map((item) => (
                  <tr key={item.name} className="border-b border-gray-200">
                    <td className="text-left p-4 font-medium text-gray-800">
                      {item.name}
                    </td>
                    {item.values.map((value, index) => (
                      <td key={index} className="p-4 text-gray-600">
                        {value === "✓" ? (
                          <Check className="mx-auto text-green-500" />
                        ) : value === "-" ? (
                          <Minus className="mx-auto text-gray-400" />
                        ) : (
                          <span className="font-semibold">{value}</span>
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
              <td></td>
              {pricingPlans.map((p) => (
                <td key={p.id} className="p-6">
                  <Button className="w-full bg-sky-500 hover:bg-sky-600">
                    このプランで始める
                  </Button>
                </td>
              ))}
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  );
}

function SimulationSection() {
  return (
    <section className="bg-sky-50 py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-sky-700 mb-4">
          どれくらいお得になる？損益シミュレーション
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          簡単な情報を入力するだけで、まるなげ！導入後のコスト削減効果や利益アップ額をシミュレーションできます。
        </p>
        <Button size="lg" className="bg-sky-500 hover:bg-sky-600">
          今すぐシミュレーションを試す
        </Button>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="py-20 px-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-sky-700 mb-12">
        料金に関するよくある質問
      </h2>
      <div className="space-y-4">
        {/* FAQ項目は後で追加 */}
        <details className="p-4 border rounded-lg">
          <summary className="font-semibold cursor-pointer">
            月の途中で契約した場合、料金はどうなりますか？
          </summary>
          <p className="mt-2 text-gray-600">
            月額料金は日割り計算となりますので、ご安心ください。
          </p>
        </details>
        <div className="text-center mt-8">
          <Button variant="outline">その他の質問を見る</Button>
        </div>
      </div>
    </section>
  );
}

export default function PlanPage() {
  return (
    <>
      <Header />
      <main>
        <PlanHeroSection />
        <PlanComparisonSection />
        <SimulationSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}