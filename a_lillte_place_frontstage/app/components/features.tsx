import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function Features() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-green-800 font-medium tracking-wider">FEATURES</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
            伝統と科学が証明する、
            <br />
            Fermyの4つの特徴
          </h2>
          <p className="text-gray-600 leading-relaxed">
            奄美大島の伝統的な発酵技術と最新の研究成果を組み合わせることで、
            より効果的で飲みやすい発酵ドリンクが誕生しました。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GbYQwUVU7qAINjv4Z5H8OlhqsoT3sK.png"
              alt="乳酸菌の電子顕微鏡写真"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply" />
          </div>
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">特許取得の発酵技術</h3>
              <p className="text-gray-600 leading-relaxed">
                独自の低温発酵プロセスにより、有用な乳酸菌を最大限に活性化。
                科学的な研究に基づき、腸内環境を整える最適な発酵環境を実現しました。
              </p>
            </div>
            <ul className="space-y-4">
              {[
                "生きた乳酸菌を100億個以上配合",
                "特許取得の低温発酵製法",
                "腸内環境改善効果を確認",
                "研究機関との共同研究実績",
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
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NyQbxH7hgpo48PWQccxxwnvpUSE8fI.png"
                alt="Fermyの飲用イメージ"
                fill
                className="object-cover"
              />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">飲みやすい味わい</h4>
            <p className="text-gray-600">ほのかな甘みと爽やかな後味。毎日続けやすい、 やさしい味わいに仕上げました。</p>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-uvTlVqL6zdl3rxG3ValUpgRBIBKT0z.png"
                alt="奄美大島の自然"
                fill
                className="object-cover"
              />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">厳選された原材料</h4>
            <p className="text-gray-600">
              奄美大島の豊かな自然が育んだ原料を使用。 添加物・砂糖は一切使用していません。
            </p>
          </div>

          <div className="relative lg:col-span-1 md:col-span-2 lg:mt-0 md:mt-8">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-fmxw27mFWpKqjlfYZppsqTfJsFNryU.png"
                alt="奄美大島の夕景"
                fill
                className="object-cover"
              />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">伝統の知恵</h4>
            <p className="text-gray-600">何世代にもわたって受け継がれてきた 発酵の技術と知恵を現代に活かしています。</p>
          </div>
        </div>
      </div>
    </section>
  )
}

