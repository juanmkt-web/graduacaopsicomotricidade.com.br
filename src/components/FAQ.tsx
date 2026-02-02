import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Qual a duração da Graduação EAD?",
    answer:
      "A duração varia conforme o curso e as diretrizes do MEC. Você estuda 100% online, com flexibilidade para conciliar sua rotina.",
  },
  {
    question: "O diploma de Graduação EAD é reconhecido pelo MEC?",
    answer:
      "Sim! A FASUL é uma Instituição com nota 5 no MEC, a nota máxima de avaliação. O diploma EAD tem a mesma validade de um curso presencial e é reconhecido em todo o Brasil.",
  },
  {
    question: "Como funcionam as aulas e avaliações?",
    answer:
      "As aulas acontecem na plataforma online, com conteúdos, atividades e avaliações conforme o calendário acadêmico. Você conta com suporte para tirar dúvidas sempre que precisar.",
  },
  {
    question: "Há suporte acadêmico durante o curso?",
    answer:
      "Sim. Nossa equipe acompanha sua jornada, com tutoria e orientação ao longo do curso para garantir seu melhor aproveitamento.",
  },
  {
    question: "Qual o valor do investimento?",
    answer:
      "Temos mensalidades acessíveis a partir de R$ 139,00/mês. Consulte as condições e formas de pagamento disponíveis.",
  },
];

const FAQ = () => {
  return (
    <section className="pt-4 pb-10 md:pt-8 md:pb-20 bg-white">
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-6 sm:mb-10 md:mb-12 text-center">
            <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              PERGUNTAS <span className="gradient-text">FREQUENTES</span>
            </h2>
            <p className="text-gray-600 text-xs sm:text-base md:text-lg px-2">
              Tire suas dúvidas sobre as Graduações EAD da FASUL
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-200 rounded-xl px-4 sm:px-5 md:px-6 data-[state=open]:border-cyan-500 data-[state=open]:shadow-[0_0_20px_rgba(6,182,212,0.1)] transition-all"
              >
                <AccordionTrigger className="text-left text-gray-900 font-medium text-sm sm:text-base md:text-lg hover:no-underline py-4 sm:py-5 md:py-6 hover:text-cyan-600 transition-colors">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-xs sm:text-sm md:text-base pb-4 sm:pb-5 md:pb-6">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
