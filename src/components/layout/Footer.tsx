import Link from "next/link";

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
]

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex justify-center flex-wrap gap-x-6 gap-y-2 mb-6 text-sm">
          {footerLinks.map(link => <Link key={link.href} href={link.href} className="hover:underline">{link.label}</Link>)}
        </div>
        <p className="mb-6">HUB PORT JAPAN © 2025 All Rights Reserved.</p>
        <div className="flex justify-center gap-6 text-xs">
          {legalLinks.map(link => <Link key={link.href} href={link.href} className="hover:underline">{link.label}</Link>)}
        </div>
        {/* TODO: Add SNS Icons (X, LINE, Instagram) */}
      </div>
    </footer>
  );
}