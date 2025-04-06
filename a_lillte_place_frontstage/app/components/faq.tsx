import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "人気のドリンクは何ですか？",
      answer:
        "一番人気は『アロマブレンドラテ』です。深みのあるエスプレッソとミルクのバランスが絶妙で、ほっと一息つける一杯です。",
    },
    {
      question: "アレルギー対応はしていますか？",
      answer:
        "一部ドリンクやスイーツにアレルギー対応のオプションをご用意しています。ご注文時にスタッフへお気軽にお声かけください。",
    },
    {
      question: "テイクアウトはできますか？",
      answer:
        "はい、全てのメニューでテイクアウトが可能です。混雑時はお時間をいただく場合がありますのでご了承ください。",
    },
    {
      question: "カフェスペースの予約はできますか？",
      answer:
        "基本的にはご予約なしでご利用いただけますが、団体様や貸切希望の場合は事前にお問い合わせください。",
    },
    {
      question: "Wi-Fiや電源は使えますか？",
      answer:
        "Wi-Fiは無料でご利用いただけます。電源は一部座席のみとなりますので、ご利用希望の際はスタッフまでお声かけください。",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          よくあるご質問
        </h2>
        <Accordion type="single" collapsible className="max-w-2xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
