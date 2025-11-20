import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const notoSansJP = Noto_Sans_JP({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "まるなげ！ザ・ワールドEC | 海外物販の仕入れから配送まで完全サポート",
  description: "海外仕入れ、物流、在庫管理、出荷までをワンストップで代行。個人・法人問わず、物販ビジネスの面倒な作業を「まるなげ」して、売上アップに専念できます。",
  keywords: ["海外物販", "輸出入代行", "物流代行", "在庫管理", "ECサポート"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        inter.variable,
        notoSansJP.variable
      )}>
        {children}
      </body>
    </html>
  );
}