import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function BrandStory() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center mb-16">
          <span className="text-green-800 font-medium tracking-wider">ABOUT FERMY</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
            伝統と革新が出会い、
            <br />
            新しい発酵文化が生まれる。
          </h2>
          <p className="text-gray-600 leading-relaxed">
            奄美大島に古くから伝わる発酵飲料「ミキ」。 その知恵と現代のテクノロジーを組み合わせることで、
            より多くの人々に健康をお届けしたい。 そんな想いから Fermy は誕生しました。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-uvTlVqL6zdl3rxG3ValUpgRBIBKT0z.png"
              alt="奄美大島の豊かな自然"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">
              奄美大島の豊かな自然が育む、
              <br />
              伝統の発酵文化
            </h3>
            <p className="text-gray-600 leading-relaxed">
              写真のような美しい自然に囲まれた奄美大島。 温暖な気候と豊かな環境に恵まれたこの地で、
              古来より島民の健康を支えてきた発酵飲料「ミキ」は、 その土地の恵みと先人の知恵が結晶化したものです。
            </p>
            <p className="text-gray-600 leading-relaxed">
              Fermyは、この伝統的な発酵技術に着目。 最新の研究により、その健康効果が科学的にも
              証明されつつある「ミキ」の可能性を、 現代のライフスタイルに合わせて進化させました。
            </p>
            <Button variant="outline" className="mt-4">
              Fermyの開発ストーリー
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
          <div className="text-center space-y-4">
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto">
              <span className="text-3xl">🌱</span>
            </div>
            <h4 className="text-xl font-bold text-gray-900">自然との調和</h4>
            <p className="text-gray-600">奄美大島の自然環境に配慮した 原料調達と製造プロセス</p>
          </div>
          <div className="text-center space-y-4">
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto">
              <span className="text-3xl">🔬</span>
            </div>
            <h4 className="text-xl font-bold text-gray-900">科学的アプローチ</h4>
            <p className="text-gray-600">伝統的な発酵技術と 最新の研究成果の融合</p>
          </div>
          <div className="text-center space-y-4">
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto">
              <span className="text-3xl">💫</span>
            </div>
            <h4 className="text-xl font-bold text-gray-900">未来への継承</h4>
            <p className="text-gray-600">伝統文化の価値を 次世代に伝えていく使命</p>
          </div>
        </div>
      </div>
    </section>
  )
}

