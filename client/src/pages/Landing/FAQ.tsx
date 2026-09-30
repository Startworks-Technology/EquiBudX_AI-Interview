export default function FAQ() {
  const faqs = [
    {
      q: "Who can join the bootcamp?",
      a: "Our bootcamps are designed for 3rd and 4th year degree students, as well as recent graduates who want to bridge the gap between academic knowledge and industry requirements to secure a high-paying job in tech."
    },
    {
      q: "Do you provide placement assistance?",
      a: "Yes! We offer 100% placement assistance. This includes resume building, LinkedIn optimization, AI-powered mock interviews, and direct referrals to our network of top tech partner companies."
    },
    {
      q: "Are the classes live or pre-recorded?",
      a: "Our curriculum features a highly effective hybrid model. You get structured, deep-dive on-demand modules that you can learn at your own pace, paired with 1:1 live expert mentorship to resolve your doubts instantly."
    },
    {
      q: "Do I get a certificate when I finish?",
      a: "Absolutely. Upon successful completion of all modules and the final capstone project, you will unlock a verified digital certificate that you can proudly showcase on your resume and LinkedIn."
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
