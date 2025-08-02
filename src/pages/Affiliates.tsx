import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { DollarSign, Users, TrendingUp, Shield, Zap, Globe } from "lucide-react";

const Affiliates = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-background via-background/90 to-primary/5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzMzQxNTUiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaDR6bTAtMzBWMGgtMnY0aC00djJoNHY0aDJWNmg0VjRoLTR6TTYgMzR2LTRINHY0SDB2Mmg0djRoMnYtNGg0di0ySDZ6TTYgNFYwSDR2NEgwdjJoNHY0aDJWNmg0VjRINnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Join Our Affiliate Program
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Earn competitive commissions by referring traders to Empire Funded. 
            Turn your network into a profitable partnership.
          </p>
          <Button size="lg" variant="gradient">
            Join Now
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">Why Partner With Us?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of successful affiliates earning substantial commissions with our industry-leading program
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: DollarSign,
                title: "High Commissions",
                description: "Earn up to 15% commission on every successful referral with no caps on earnings"
              },
              {
                icon: TrendingUp,
                title: "Performance Bonuses",
                description: "Additional bonuses for top performers and milestone achievements"
              },
              {
                icon: Users,
                title: "Dedicated Support",
                description: "Personal affiliate manager and 24/7 support for all your needs"
              },
              {
                icon: Shield,
                title: "Reliable Tracking",
                description: "Advanced tracking system with real-time reporting and transparent metrics"
              },
              {
                icon: Zap,
                title: "Fast Payouts",
                description: "Weekly payouts with multiple payment methods available"
              },
              {
                icon: Globe,
                title: "Global Reach",
                description: "Promote worldwide with multi-language support and localized content"
              }
            ].map((benefit, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 group hover:shadow-elegant">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-primary">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-muted-foreground">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">How It Works</h2>
            <p className="text-lg text-muted-foreground">
              Start earning in three simple steps
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "01",
                title: "Sign Up",
                description: "Register for our affiliate program and get approved within 24 hours"
              },
              {
                step: "02",
                title: "Share Your Link",
                description: "Promote Empire Funded using your unique tracking link and marketing materials"
              },
              {
                step: "03",
                title: "Earn Commissions",
                description: "Get paid weekly for every successful trader you refer to our platform"
              }
            ].map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="mx-auto w-20 h-20 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mb-6 text-2xl font-bold text-white shadow-elegant">
                  {step.step}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-primary">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
                {index < 2 && (
                  <div className="hidden md:block absolute top-10 left-[calc(100%+1rem)] w-8 h-0.5 bg-gradient-to-r from-primary to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliate FAQ */}
      <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">Affiliate Program FAQ</h2>
            <p className="text-lg text-muted-foreground">
              Common questions about our affiliate program
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "How much commission can I earn?",
                  answer: "You can earn up to 15% commission on every successful referral. There are no caps on your earnings, and we offer performance bonuses for top affiliates."
                },
                {
                  question: "When do I get paid?",
                  answer: "Payments are processed weekly every Friday. We support multiple payment methods including bank transfer, PayPal, and cryptocurrency."
                },
                {
                  question: "What marketing materials do you provide?",
                  answer: "We provide a comprehensive marketing toolkit including banners, landing pages, email templates, and social media content. All materials are professionally designed and optimized for conversions."
                },
                {
                  question: "Is there a minimum payout threshold?",
                  answer: "Yes, the minimum payout threshold is $100. Once you reach this amount, payments are processed automatically every week."
                },
                {
                  question: "Can I track my referrals and earnings?",
                  answer: "Absolutely! Our affiliate dashboard provides real-time tracking of clicks, conversions, and earnings. You'll have full transparency into your performance."
                },
                {
                  question: "Are there any restrictions on promotion methods?",
                  answer: "We allow most ethical promotion methods including social media, content marketing, and paid advertising. Spam and misleading practices are strictly prohibited."
                }
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-card/50 backdrop-blur-sm border-primary/20 rounded-lg px-6">
                  <AccordionTrigger className="text-left text-primary hover:text-primary-glow">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-background to-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-primary">Ready to Start Earning?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our affiliate program today and start earning commissions from your referrals
          </p>
          <Button size="lg" variant="gradient">
            Join Our Affiliate Program
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Affiliates;