import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-green-800 font-medium tracking-wider">
              SPECIAL OFFER
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
              こだわりの一杯を、特別な価格で
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Cafe
              Aromaのスペシャルブレンドを今だけ限定価格でお楽しみいただけます。
              自分へのご褒美に、特別なひとときを。
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Aromaブレンドドリップバッグ（10袋）
                </h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold text-green-800">
                    ¥980
                  </span>
                  <span className="ml-2 text-gray-500 line-through">
                    ¥3,980
                  </span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    厳選されたスペシャルティコーヒー豆を使用
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    香り高く深みのある中深煎りブレンド
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    手軽に楽しめるドリップバッグタイプ
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    カフェ気分をご自宅で
                  </li>
                </ul>
                <Button
                  size="lg"
                  className="w-full bg-green-800 hover:bg-green-900 text-white"
                >
                  今すぐ注文する
                </Button>
                <p className="text-sm text-gray-500 mt-4 text-center">
                  ※ 初回限定75%OFF 通常価格¥3,980
                </p>
              </div>
              <div className="relative">
                <Image
                  src="https://example.com/cafe-dripbag.jpg"
                  alt="ドリップバッグコーヒー"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute top-4 right-4 bg-red-600 text-white font-bold py-2 px-4 rounded-full text-lg animate-pulse">
                  初回75%OFF
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              サブスクで毎月お届け
            </h3>
            <p className="text-gray-600 mb-6">
              毎月届く定期便ならさらに10%OFF。忙しい朝も、美味しい一杯でスタート。
              <br />
              解約はいつでもOK。安心してご利用いただけます。
            </p>
            <Button
              variant="outline"
              className="border-green-800 text-green-800 hover:bg-green-800 hover:text-white"
            >
              サブスクについて詳しく見る
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
