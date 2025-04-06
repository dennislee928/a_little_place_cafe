import Image from "next/image";
import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-green-800 font-medium tracking-wider">
            VOICE
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
            お客様の声
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Cafe Aroma
            に訪れたお客様から、たくさんの嬉しいお言葉をいただいています。
            居心地の良さ、こだわりの一杯、ぜひ体感してみてください。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1605478371448-4ef1f6b9449b"
              alt="カフェでくつろぐお客様"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-8">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <blockquote className="text-xl text-gray-900 font-medium italic">
              "落ち着いた雰囲気で、まるで自分のリビングのようにくつろげます。
              季節限定のラテも毎回楽しみで、友人とのおしゃべりタイムがもっと特別なものに。"
            </blockquote>
            <div>
              <p className="font-bold text-gray-900">佐藤 美咲さん（32歳）</p>
              <p className="text-gray-600">会社員 / 月に2〜3回利用</p>
            </div>
          </div>
        </div>

        {/* Additional Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              comment:
                "モーニングのコーヒーとクロワッサンが最高です。毎週通ってます！",
              name: "田中 健一",
              role: "営業職",
              period: "週1利用",
            },
            {
              comment:
                "コーヒーもスイーツも美味しくて、勉強や仕事にも最適な空間です。",
              name: "山田 優子",
              role: "大学生",
              period: "週3〜4利用",
            },
            {
              comment: "テイクアウトも便利で、昼休みによく利用しています。",
              name: "鈴木 美穂",
              role: "フリーランス",
              period: "平日利用",
            },
          ].map((review, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6">"{review.comment}"</p>
              <div>
                <p className="font-bold text-gray-900">{review.name}</p>
                <p className="text-sm text-gray-600">
                  {review.role} / {review.period}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
