export default function FAQ() {
  const faqs = [
    {
      q: "Do I get a certificate when I finish?",
      a: "Yes! Once you pass the final MCQ assignment for a course, you will unlock a verified digital certificate that you can link on your resume or LinkedIn."
    },
    {
      q: "Are the tests hard?",
      a: "They are designed to mimic actual technical screening rounds from top tech companies. If you pay attention during the course modules, you will be well prepared."
    },
    {
      q: "Can my college pay for me?",
      a: "Absolutely. We have a College Admin portal. If your college is partnered with EquiBudX, your access is completely free."
    }
  ];

  return (
    <section className="py-24 px-6 lg:px-12 bg-background">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-16">Frequently Asked Questions</h2>
        
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-foreground mb-3">{faq.q}</h3>
              <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
