import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function BrandStory() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center mb-16">
          <span className="text-green-800 font-medium tracking-wider">
            ABOUT CAFE AROMA
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
            伝統と革新が融合し、
            <br />
            新たなコーヒー体験が生まれる。
          </h2>
          <p className="text-gray-600 leading-relaxed">
            厳選された豆と匠の技が生み出す、一杯のコーヒー。
            地元の焙煎所との協力で、
            心温まる空間と上質な味わいを提供するため、Cafe Aromaは誕生しました。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="https://example.com/cafe-image.jpg"
              alt="温かみのあるカフェの内装"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">
              地域に根ざした伝統の味と、
              <br />
              先進技術が生み出すカフェ文化
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Cafe
              Aromaは、落ち着いた雰囲気の中で、伝統的なコーヒー文化を大切にしながら、
              最新の抽出技術で最高の一杯を提供します。こだわりの豆とバリスタの技が
              融合し、心に残るひとときをお届けします。
            </p>
            <p className="text-gray-600 leading-relaxed">
              一杯のコーヒーから生まれる笑顔と、共に過ごす時間を大切に、Cafe
              Aromaは 日々新しい価値を創造し続けています。
            </p>
            <Button variant="outline" className="mt-4">
              Cafe Aromaの物語
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
          <div className="text-center space-y-4">
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto">
              <span className="text-3xl">☕</span>
            </div>
            <h4 className="text-xl font-bold text-gray-900">厳選された豆</h4>
            <p className="text-gray-600">
              最高品質のコーヒー豆を厳選し、風味豊かな一杯を提供
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto">
              <span className="text-3xl">👩‍🍳</span>
            </div>
            <h4 className="text-xl font-bold text-gray-900">熟練の技</h4>
            <p className="text-gray-600">
              経験豊富なバリスタによる洗練された抽出技術
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto">
              <span className="text-3xl">❤️</span>
            </div>
            <h4 className="text-xl font-bold text-gray-900">心温まる空間</h4>
            <p className="text-gray-600">
              温かいおもてなしと居心地の良い雰囲気で、くつろぎのひとときを
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
