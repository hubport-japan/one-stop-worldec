"use client";

import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight, MessageSquare } from "lucide-react";

function ContactHeroSection() {
  return (
    <section className="bg-gray-50 py-20 px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-sky-800">
        お問い合わせ・無料相談
      </h1>
      <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
        サービスに関するご質問、導入のご相談、資料請求など、
        <br />
        お気軽にお問い合わせください。
      </p>
    </section>
  );
}

function ContactFormSection() {
  const inputStyle = "w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition";

  return (
    <section className="py-20 px-6 max-w-3xl mx-auto">
      <form className="space-y-8">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            お名前 <span className="text-red-500">*</span>
          </label>
          <input type="text" id="name" required className={inputStyle} />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
            会社名・組織名
          </label>
          <input type="text" id="company" className={inputStyle} />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            メールアドレス <span className="text-red-500">*</span>
          </label>
          <input type="email" id="email" required className={inputStyle} />
        </div>

        <div>
          <p className="block text-sm font-medium text-gray-700 mb-2">
            お問い合わせ種別 <span className="text-red-500">*</span>
          </p>
          <div className="flex flex-wrap gap-4">
            <label className="flex items-center space-x-2">
              <input type="radio" name="inquiryType" value="consultation" className="text-sky-600 focus:ring-sky-500" defaultChecked />
              <span>無料相談</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="inquiryType" value="document" className="text-sky-600 focus:ring-sky-500" />
              <span>資料請求</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="inquiryType" value="other" className="text-sky-600 focus:ring-sky-500" />
              <span>その他</span>
            </label>
          </div>
        </div>

        <div>
          <label htmlFor="details" className="block text-sm font-medium text-gray-700 mb-2">
            お問い合わせ内容 <span className="text-red-500">*</span>
          </label>
          <textarea id="details" rows={6} required className={inputStyle}></textarea>
        </div>

        <div className="text-center">
          <p className="text-xs text-gray-500 mb-4">
            <a href="/privacy" target="_blank" className="underline hover:text-sky-600">プライバシーポリシー</a>に同意の上、送信してください。
          </p>
          <Button type="submit" size="lg" className="w-full md:w-auto bg-sky-500 hover:bg-sky-600">
            内容を送信する <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </form>
    </section>
  );
}

function OtherContactMethodsSection() {
  return (
    <section className="bg-sky-50 py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-sky-700 mb-4">
          チャットでもご相談いただけます
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          「まずは気軽に質問してみたい」という方は、
          <br />
          LINEやチャットサポートをご利用ください。
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Button size="lg" variant="outline" className="border-sky-500 text-sky-600 hover:bg-sky-100 hover:text-sky-700">
            <MessageSquare className="mr-2 h-5 w-5" />
            LINEで相談する
          </Button>
        </div>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactHeroSection />
        <ContactFormSection />
        <OtherContactMethodsSection />
      </main>
      <Footer />
    </>
  );
}

