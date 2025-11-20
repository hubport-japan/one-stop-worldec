"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, Package, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/#features", label: "3つのポイント" },
  { href: "/#how-to-use", label: "ご利用ステップ" },
  { href: "/#pricing", label: "料金プラン" },
  { href: "/#case-study", label: "お客様の声" },
  { href: "/faq", label: "よくあるご質問" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm border-white/20" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold text-sky-600 hover:opacity-80 transition-opacity">
              <Package className="w-8 h-8" />
              <span className="tracking-tight">まるなげ！</span>
            </Link>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-sky-500 relative group",
                  pathname === link.href ? "text-sky-600" : "text-gray-600"
                )}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-500 transition-all group-hover:w-full" />
              </Link>
            ))}
            <Button asChild className="bg-sky-500 hover:bg-sky-600 text-white shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 rounded-full px-6">
              <Link href="/contact">お問い合わせ</Link>
            </Button>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button onClick={() => setIsMenuOpen(!isMenuOpen)} variant="ghost" size="icon" className="text-gray-700">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-lg overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-sky-600 hover:bg-sky-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4">
                <Button asChild className="w-full bg-sky-500 hover:bg-sky-600 text-white rounded-full">
                  <Link href="/contact">お問い合わせ</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}