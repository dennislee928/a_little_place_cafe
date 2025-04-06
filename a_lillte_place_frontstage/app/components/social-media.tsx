import { Instagram, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SocialMedia() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Fermyコミュニティに参加しよう</h2>
        <p className="text-xl text-gray-600 mb-8">最新情報やキャンペーン、健康レシピをお届けします！</p>
        <div className="flex justify-center gap-4 mb-8">
          <Button variant="outline" className="flex items-center gap-2">
            <Instagram />
            Instagramをフォロー
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Twitter />
            Xをフォロー
          </Button>
        </div>
        <p className="text-gray-600 mb-4">#Fermy習慣 でシェアしてください！</p>
        <div className="max-w-2xl mx-auto">
          <input
            type="email"
            placeholder="メールアドレスを入力"
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <Button className="w-full">メルマガに登録</Button>
        </div>
      </div>
    </section>
  )
}

