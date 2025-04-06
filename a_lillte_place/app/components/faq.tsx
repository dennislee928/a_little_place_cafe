import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQ() {
  const faqs = [
    {
      question: "Fermyはどんな味ですか？",
      answer: "ほのかな甘みと発酵の爽やかさで飲みやすいです！自然な風味を楽しめます。",
    },
    {
      question: "乳アレルギーでも飲めますか？",
      answer: "牛乳アレルギーの方でも飲める可能性がありますが、個人差があるため、医師にご相談ください。",
    },
    {
      question: "保存方法・賞味期限は？",
      answer: "冷蔵保存で約14日間です。開封後はお早めに召し上がりください。",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">よくある質問</h2>
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
  )
}

