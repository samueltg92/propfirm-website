import Layout from "@/components/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQs = () => {
  const generalFAQs = [
    {
      question: "What is Empire Funded?",
      answer: "Empire Funded is a proprietary trading firm that provides capital to skilled traders. We offer evaluation challenges where successful traders can earn funded accounts to trade with our capital and share in the profits."
    },
    {
      question: "How does the evaluation process work?",
      answer: "Our evaluation process consists of two phases: the Challenge Phase and the Verification Phase. You must meet specific profit targets and risk management rules in each phase to qualify for a funded account."
    },
    {
      question: "What is the profit split?",
      answer: "We offer up to 90% profit split for funded traders. You keep up to 90% of the profits you generate, while we take a small percentage to cover our costs and risk."
    },
    {
      question: "How often are profits paid out?",
      answer: "Profits are paid out weekly for funded accounts. You can request a payout once you've met the minimum payout requirements and held your account for the required time period."
    },
    {
      question: "What markets can I trade?",
      answer: "You can trade Forex pairs, indices, commodities, and select cryptocurrencies. We provide access to over 100 trading instruments across global markets."
    },
    {
      question: "Is there a time limit for challenges?",
      answer: "Yes, our challenges have time limits. The standard challenge has a 30-day time limit, while some advanced challenges may have different timeframes. Check your specific challenge rules for details."
    }
  ];

  const challengeFAQs = [
    {
      question: "What are the profit targets for challenges?",
      answer: "Profit targets vary by challenge size. Typically, Phase 1 requires 8% profit target and Phase 2 requires 5% profit target. Specific targets are detailed in your challenge dashboard."
    },
    {
      question: "What is the maximum daily loss rule?",
      answer: "The maximum daily loss is typically 5% of the initial account balance. This rule helps ensure proper risk management and protects both you and our capital."
    },
    {
      question: "Can I hold positions overnight?",
      answer: "Yes, you can hold positions overnight and over weekends. However, be mindful of swap charges and market gaps that may affect your positions."
    },
    {
      question: "What happens if I fail a challenge?",
      answer: "If you don't meet the requirements within the time limit or violate risk management rules, the challenge will be terminated. You can purchase a new challenge with a discount to try again."
    },
    {
      question: "Can I trade during news events?",
      answer: "Yes, you can trade during news events. However, be aware of increased volatility and potential slippage during high-impact news releases."
    },
    {
      question: "What is the minimum trading period?",
      answer: "You must trade for a minimum number of days (typically 5-10 trading days) to complete each phase. This ensures you demonstrate consistency over time."
    }
  ];

  const platformFAQs = [
    {
      question: "Which trading platform do you use?",
      answer: "We use MetaTrader 5 (MT5), the industry-leading trading platform. MT5 offers advanced charting tools, expert advisors, and reliable execution."
    },
    {
      question: "Can I use Expert Advisors (EAs)?",
      answer: "Yes, Expert Advisors are allowed on our platform. However, certain high-frequency and arbitrage strategies may be restricted. Please review our EA guidelines."
    },
    {
      question: "What are your trading hours?",
      answer: "Our platform follows standard market hours: Forex markets are open 24/5 from Sunday 5 PM EST to Friday 5 PM EST. Other markets have specific hours based on their exchanges."
    },
    {
      question: "Do you provide real-time data?",
      answer: "Yes, we provide real-time market data from top-tier liquidity providers. You'll have access to accurate pricing and fast execution speeds."
    },
    {
      question: "Can I use mobile trading?",
      answer: "Absolutely! MT5 mobile apps are available for iOS and Android devices. You can manage your positions and monitor the markets from anywhere."
    },
    {
      question: "What is your execution speed?",
      answer: "Our servers provide ultra-fast execution with average speeds under 50ms. We use institutional-grade infrastructure for reliable order processing."
    }
  ];

  const affiliateFAQs = [
    {
      question: "How much commission do affiliates earn?",
      answer: "Affiliates can earn up to 15% commission on each successful referral. Commission rates may vary based on performance tiers and special promotions."
    },
    {
      question: "When do affiliates get paid?",
      answer: "Affiliate commissions are paid weekly every Friday. There's a minimum payout threshold of $100 to ensure efficient payment processing."
    },
    {
      question: "What marketing materials are provided?",
      answer: "We provide comprehensive marketing materials including banners, landing pages, email templates, and social media content. All materials are professionally designed and conversion-optimized."
    },
    {
      question: "Can I track my affiliate performance?",
      answer: "Yes, our affiliate dashboard provides real-time tracking of clicks, conversions, and earnings. You'll have full transparency into your referral performance."
    },
    {
      question: "Are there any promotion restrictions?",
      answer: "We allow most ethical promotion methods including content marketing, social media, and paid advertising. Spam, misleading claims, and trademark violations are prohibited."
    },
    {
      question: "How long do affiliate cookies last?",
      answer: "Our affiliate cookies have a 30-day lifetime. If someone clicks your link and purchases within 30 days, you'll receive credit for the referral."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-background via-background/90 to-primary/5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzMzQxNTUiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaDR6bTAtMzBWMGgtMnY0aC00djJoNHY0aDJWNmg0VjRoLTR6TTYgMzR2LTRINHY0SDB2Mmg0djRoMnYtNGg0di0ySDZ6TTYgNFYwSDR2NEgwdjJoNHY0aDJWNmg0VjRINnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find answers to the most common questions about Empire Funded, our challenges, and trading platform
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="general" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-4 mb-12 bg-card border border-border backdrop-blur-sm">
              <TabsTrigger value="general" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-foreground hover:text-primary">
                General
              </TabsTrigger>
              <TabsTrigger value="challenges" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-foreground hover:text-primary">
                Challenges
              </TabsTrigger>
              <TabsTrigger value="platform" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-foreground hover:text-primary">
                Platform
              </TabsTrigger>
              <TabsTrigger value="affiliates" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-foreground hover:text-primary">
                Affiliates
              </TabsTrigger>
            </TabsList>

            <TabsContent value="general">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold mb-8 text-center text-primary">General Questions</h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {generalFAQs.map((faq, index) => (
                    <AccordionItem key={index} value={`general-${index}`} className="bg-card border border-border rounded-lg px-6">
                      <AccordionTrigger className="text-left text-foreground hover:text-primary font-medium">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-card-foreground pt-2 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </TabsContent>

            <TabsContent value="challenges">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold mb-8 text-center text-primary">Challenge Questions</h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {challengeFAQs.map((faq, index) => (
                    <AccordionItem key={index} value={`challenge-${index}`} className="bg-card border border-border rounded-lg px-6">
                      <AccordionTrigger className="text-left text-foreground hover:text-primary font-medium">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-card-foreground pt-2 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </TabsContent>

            <TabsContent value="platform">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold mb-8 text-center text-primary">Trading Platform</h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {platformFAQs.map((faq, index) => (
                    <AccordionItem key={index} value={`platform-${index}`} className="bg-card border border-border rounded-lg px-6">
                      <AccordionTrigger className="text-left text-foreground hover:text-primary font-medium">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-card-foreground pt-2 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </TabsContent>

            <TabsContent value="affiliates">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold mb-8 text-center text-primary">Affiliate Program</h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {affiliateFAQs.map((faq, index) => (
                    <AccordionItem key={index} value={`affiliate-${index}`} className="bg-card border border-border rounded-lg px-6">
                      <AccordionTrigger className="text-left text-foreground hover:text-primary font-medium">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-card-foreground pt-2 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default FAQs;