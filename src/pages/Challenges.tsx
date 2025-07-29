import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, DollarSign, Target, TrendingUp, Shield } from "lucide-react";
import Layout from "@/components/Layout";

const Challenges = () => {
  // Mock data - In production, this would come from WooCommerce API
  const challenges = [
    {
      id: 1,
      name: "$10K Challenge",
      price: "$89",
      originalPrice: "$149",
      accountSize: "$10,000",
      profitTarget: "$800",
      maxDrawdown: "$800",
      dailyDrawdown: "$400",
      tradingDays: "No minimum",
      payouts: "Bi-weekly",
      profitSplit: "80%",
      popular: false
    },
    {
      id: 2, 
      name: "$25K Challenge",
      price: "$179",
      originalPrice: "$249", 
      accountSize: "$25,000",
      profitTarget: "$2,000",
      maxDrawdown: "$2,000",
      dailyDrawdown: "$1,000", 
      tradingDays: "No minimum",
      payouts: "Bi-weekly",
      profitSplit: "80%",
      popular: true
    },
    {
      id: 3,
      name: "$50K Challenge", 
      price: "$329",
      originalPrice: "$449",
      accountSize: "$50,000",
      profitTarget: "$4,000", 
      maxDrawdown: "$4,000",
      dailyDrawdown: "$2,000",
      tradingDays: "No minimum", 
      payouts: "Weekly",
      profitSplit: "85%",
      popular: false
    },
    {
      id: 4,
      name: "$100K Challenge",
      price: "$549",
      originalPrice: "$749",
      accountSize: "$100,000", 
      profitTarget: "$8,000",
      maxDrawdown: "$8,000",
      dailyDrawdown: "$4,000",
      tradingDays: "No minimum",
      payouts: "Weekly", 
      profitSplit: "90%",
      popular: false
    },
    {
      id: 5,
      name: "$200K Challenge",
      price: "$989", 
      originalPrice: "$1,299",
      accountSize: "$200,000",
      profitTarget: "$16,000",
      maxDrawdown: "$16,000", 
      dailyDrawdown: "$8,000",
      tradingDays: "No minimum",
      payouts: "Weekly",
      profitSplit: "90%",
      popular: false
    }
  ];

  const features = [
    "No time limits on challenges",
    "Trade all major forex pairs", 
    "Expert Advisors (EAs) allowed",
    "News trading permitted",
    "Weekend holding allowed",
    "Scaling plan up to $1M",
    "24/7 customer support",
    "MetaTrader 4 & 5 platforms"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-primary/5">
        <div className="container px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
            Choose Your Trading Challenge
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Select the perfect account size for your trading strategy. All challenges include our generous profit sharing and flexible trading rules.
          </p>
          
          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
            {features.slice(0, 4).map((feature, index) => (
              <div key={index} className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Check className="h-4 w-4 text-primary flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge Selector */}
      <section className="py-20">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {challenges.map((challenge) => (
              <Card 
                key={challenge.id} 
                className={`relative border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg ${
                  challenge.popular ? 'ring-2 ring-primary/20 shadow-lg' : ''
                }`}
              >
                {challenge.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-poppins">{challenge.name}</CardTitle>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-primary">{challenge.price}</div>
                    <div className="text-sm text-muted-foreground line-through">{challenge.originalPrice}</div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Account Size</span>
                      <span className="font-semibold">{challenge.accountSize}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Profit Target</span>
                      <span className="font-semibold text-primary">{challenge.profitTarget}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Max Drawdown</span>
                      <span className="font-semibold">{challenge.maxDrawdown}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Daily Drawdown</span>
                      <span className="font-semibold">{challenge.dailyDrawdown}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Trading Days</span>
                      <span className="font-semibold">{challenge.tradingDays}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Payouts</span>
                      <span className="font-semibold">{challenge.payouts}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Profit Split</span>
                      <span className="font-semibold text-accent">{challenge.profitSplit}</span>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
                    asChild
                  >
                    <a 
                      href="https://www.empirefundedcheckout.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Buy Challenge
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Additional Features */}
          <div className="bg-card rounded-lg p-8 border border-border/50">
            <h3 className="text-2xl font-bold font-poppins mb-6 text-center">
              What's Included in Every Challenge
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Have Questions */}
      <section className="py-20 bg-primary/5">
        <div className="container px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
            Have Questions About Our Challenges?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our support team is here to help you choose the right challenge for your trading goals.
          </p>
          <Button 
            size="lg" 
            variant="outline"
            asChild
            className="border-primary/20 hover:bg-primary/10"
          >
            <a href="mailto:support@empirefunded.com">
              Contact Support Team
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Challenges;