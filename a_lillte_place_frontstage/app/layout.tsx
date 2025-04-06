import type { Metadata } from "next"
import { Noto_Serif_JP, Noto_Sans_JP } from "next/font/google"
import "./globals.css"
import type React from "react" // Import React

const notoSerif = Noto_Serif_JP({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

const notoSans = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Fermy - 奄美大島発、革新的な発酵ドリンク",
  description:
    "伝統の知恵と現代のテクノロジーが出会い、新しい発酵文化が生まれる。奄美大島の伝統飲料『ミキ』とヤギミルクを掛け合わせた、革新的な発酵ドリンク Fermy。",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={`${notoSerif.variable} ${notoSans.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}



import './globals.css'