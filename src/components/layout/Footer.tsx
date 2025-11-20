import Link from "next/link";
import { Package } from "lucide-react";

const footerLinks = [
  { href: "/service", label: "サービス紹介" },
  { href: "/plan", label: "料金プラン" },
  { href: "/case-study", label: "導入事例" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "お問い合わせ" },
];

const legalLinks = [
  { href: "/terms", label: "利用規約" },
  { href: "/privacy", label: "プライバシーポリシー" },
  { href: "/company", label: "運営会社" },
]

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-white mb-4">
              <Package className="text-sky-500" />
              <span>まるなげ！</span>
            </Link>
            <p className="text-slate-400 leading-relaxed max-w-sm">
              海外仕入れから国内配送まで、物販ビジネスのすべてをサポート。<br />
              あなたのビジネスを次のステージへ。
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">サービス</h3>
            <ul className="space-y-3">
              {footerLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-sky-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">法的情報</h3>
            <ul className="space-y-3">
              {legalLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-sky-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>HUB PORT JAPAN © 2025 All Rights Reserved.</p>
          <div className="flex gap-6">
            {/* SNS Icons could go here */}
          </div>
        </div>
      </div>
    </footer>
  );
}