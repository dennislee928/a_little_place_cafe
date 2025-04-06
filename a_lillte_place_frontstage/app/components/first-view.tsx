import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function FirstView() {
  return (
    <section className="min-h-screen pt-24 relative overflow-hidden bg-[#FAF6F3]">
      <div className="absolute inset-0 bg-gradient-to-br from-green-100/30 to-transparent" />

      <div className="container mx-auto px-4 pt-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10 space-y-8">
            <div className="inline-block bg-green-100 px-4 py-2 rounded-full">
              <span className="text-green-800 font-medium tracking-wider text-sm">
                あなたの街の、小さな癒し空間
              </span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-gray-900">
              <span className="block">一杯のコーヒーが、</span>
              <span className="block text-green-800">
                心と暮らしを豊かにする。
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
              自家焙煎の豆を使い、バリスタが丁寧に淹れる一杯。
              <br />
              Cafe
              Aromaでは、季節ごとのドリンクと手作りスイーツを、心地よい空間とともにお届けします。
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-green-800 hover:bg-green-900 text-white px-8 rounded-full"
              >
                メニューを見る
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-green-800 text-green-800 hover:bg-green-800 hover:text-white rounded-full"
              >
                カフェについて
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div>
                <div className="text-3xl font-bold text-green-800 mb-2">
                  4.9★
                </div>
                <p className="text-sm text-gray-600 leading-snug">
                  レビュー平均評価
                </p>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-800 mb-2">
                  100%
                </div>
                <p className="text-sm text-gray-600 leading-snug">
                  スペシャルティ豆使用
                </p>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-800 mb-2">
                  80%
                </div>
                <p className="text-sm text-gray-600 leading-snug">リピート率</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-square max-w-md mx-auto">
              <Image
                src="https://images.unsplash.com/photo-1511920170033-f8396924c348"
                alt="カフェの看板ドリンク"
                fill
                className="object-contain transform hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute top-1/4 -right-1/4 w-72 h-72 bg-green-200/30 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 -left-1/4 w-72 h-72 bg-yellow-100/30 rounded-full blur-3xl" />

            {/* Product badges */}
            <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
              <span className="text-green-800 font-medium">季節限定</span>
            </div>
            <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
              <span className="text-green-800 font-medium">自家焙煎</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-gray-600">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-green-800 to-transparent" />
        </div>
      </div>
    </section>
  );
}
