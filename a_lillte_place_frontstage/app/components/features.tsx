import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function Features() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-green-800 font-medium tracking-wider">
            FEATURES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
            カフェアロマが選ばれる
            <br />
            4つのこだわり
          </h2>
          <p className="text-gray-600 leading-relaxed">
            一杯のコーヒーに、心地よさと驚きを。素材、空間、技術——全てにこだわったカフェ体験をご提供します。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
              alt="バリスタがコーヒーを淹れている様子"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
          </div>
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">
                プロのバリスタによる一杯
              </h3>
              <p className="text-gray-600 leading-relaxed">
                熟練のバリスタが、一杯ずつ丁寧に抽出。豆の個性を最大限に引き出した、香り高いコーヒーをお届けします。
              </p>
            </div>
            <ul className="space-y-4">
              {[
                "スペシャルティグレードの豆を使用",
                "抽出温度と時間を徹底管理",
                "メニューごとに異なる焙煎プロファイル",
                "テイスティングと改良を重ねた独自レシピ",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-800 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6">
              <Image
                src="https://images.unsplash.com/photo-1523292562811-8fa7962a78c8"
                alt="カフェラテとスイーツ"
                fill
                className="object-cover"
              />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">
              季節限定メニュー
            </h4>
            <p className="text-gray-600">
              旬の素材を使ったドリンクやスイーツを、季節ごとにご用意しています。
            </p>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6">
              <Image
                src="https://images.unsplash.com/photo-1613145991743-36b7b54d9f1e"
                alt="ナチュラルなカフェの内装"
                fill
                className="object-cover"
              />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">
              居心地の良い空間
            </h4>
            <p className="text-gray-600">
              木の温もりを感じるナチュラルなインテリア。ひとりでも、誰かとでも落ち着いて過ごせる空間です。
            </p>
          </div>

          <div className="relative lg:col-span-1 md:col-span-2 lg:mt-0 md:mt-8">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6">
              <Image
                src="https://images.unsplash.com/photo-1587574293340-b3b6e98a35de"
                alt="農園で収穫されるコーヒー豆"
                fill
                className="object-cover"
              />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">
              産地へのこだわり
            </h4>
            <p className="text-gray-600">
              信頼できる農園から直接仕入れたコーヒー豆。生産者とのつながりを大切にしています。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
