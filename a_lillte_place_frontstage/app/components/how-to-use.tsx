import Image from "next/image";

export default function HowToUse() {
  const usages = [
    {
      title: "モーニングコーヒーに",
      description: "出勤前や朝の読書タイムにぴったりの一杯",
      image: "/cafe-morning.jpg", // Replace with your actual morning drink image
    },
    {
      title: "午後のひと息",
      description: "スイーツと一緒に楽しむ癒しのカフェ時間",
      image: "/cafe-afternoon.jpg", // Replace with your afternoon café vibe photo
    },
    {
      title: "テイクアウトで公園へ",
      description: "お気に入りのドリンクを片手に散歩や外ランチ",
      image: "/cafe-takeout.jpg", // Replace with image of takeout cup / customer outside
    },
  ];

  return (
    <section id="how-to-use" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Cafe Aroma の楽しみ方
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {usages.map((usage, index) => (
            <div key={index} className="text-center">
              <div className="relative w-full h-64 mb-4 overflow-hidden rounded-lg">
                <Image
                  src={usage.image || "/placeholder.svg"}
                  alt={usage.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {usage.title}
              </h3>
              <p className="text-gray-600">{usage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
