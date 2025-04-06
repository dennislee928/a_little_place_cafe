import Image from "next/image"
import { Star } from "lucide-react"

export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-green-800 font-medium tracking-wider">VOICE</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">Fermyを愛用する方々の声</h2>
          <p className="text-gray-600 leading-relaxed">
            毎日の健康習慣として取り入れていただいている方々から、 たくさんの喜びの声をいただいています。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KZxMVixr7qeQLP1cObvOpD5bHHv6o1.png"
              alt="Fermyを飲む女性"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-8">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <blockquote className="text-xl text-gray-900 font-medium italic">
              "毎朝の習慣として飲み始めて3ヶ月。お通じが良くなり、
              肌の調子も良くなってきました。自然な甘みで飲みやすいので、 続けやすいのが良いですね。"
            </blockquote>
            <div>
              <p className="font-bold text-gray-900">佐藤 美咲さん（32歳）</p>
              <p className="text-gray-600">会社員 / 愛用歴3ヶ月</p>
            </div>
          </div>
        </div>

        {/* 追加のレビュー */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              comment: "ジムの後に飲んでいます。スッキリして体が軽く感じます。",
              name: "田中 健一",
              role: "フィットネストレーナー",
              period: "愛用歴6ヶ月",
            },
            {
              comment: "腸内環境が気になっていましたが、飲み始めてから調子が良くなりました。",
              name: "山田 優子",
              role: "栄養士",
              period: "愛用歴1年",
            },
            {
              comment: "朝食代わりに飲んでいます。手軽に栄養が取れて便利です。",
              name: "鈴木 美穂",
              role: "フリーランス",
              period: "愛用歴2ヶ月",
            },
          ].map((review, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
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
  )
}

