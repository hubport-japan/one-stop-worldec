"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, Package, X } from "lucide-react";

const navLinks = [
  { href: "/#features", label: "3つのポイント" },
  { href: "/#how-to-use", label: "ご利用ステップ" },
  { href: "/#pricing", label: "料金プラン" },
  { href: "/#case-study", label: "お客様の声" },
  { href: "/faq", label: "よくあるご質問" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold text-sky-600">
              <Package />
              <span>まるなげ！</span>
            </Link>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors hover:text-sky-500 ${
                  pathname === link.href
                    ? "text-sky-600"
                    : "text-gray-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="bg-sky-500 hover:bg-sky-600 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5">
              <Link href="/contact">お問い合わせ</Link>
            </Button>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button onClick={() => setIsMenuOpen(!isMenuOpen)} variant="ghost" size="icon">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-sky-600 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="px-4 pb-4">
            <Button asChild className="w-full bg-sky-500 hover:bg-sky-600">
              <Link href="/contact">お問い合わせ</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}