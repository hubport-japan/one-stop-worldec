import { Button } from "@/components/ui/button";
import Link from "next/link";

const navLinks = [
  { href: "/service", label: "サービス紹介" },
  { href: "/plan", label: "料金プラン" },
  { href: "/case-study", label: "導入事例" },
  { href: "/faq", label: "FAQ" },
  { href: "/blog", label: "ブログ" },
];

export function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 w-full border-b">
      <div className="container h-16 flex items-center justify-between mx-auto px-6">
        <Link href="/" className="font-bold text-lg text-sky-700">
          まるなげ！ザ・ワールドEC
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-gray-600 hover:text-sky-600 transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>
        <Button asChild className="bg-sky-500 hover:bg-sky-600 text-white">
          <Link href="/contact">無料相談はこちら</Link>
        </Button>
      </div>
    </header>
  );
}