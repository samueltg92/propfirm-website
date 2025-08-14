import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Check, DollarSign, Target, TrendingUp, Shield, Flame, Rocket } from "lucide-react";
import Layout from "@/components/Layout";
import { useState } from "react";
import { usePageTracking } from "@/hooks/useTracking";
import { trackingEvents } from "@/lib/tracking";

const Challenges = () => {
  // Track page view
  usePageTracking('Challenges');

  const [selectedTier, setSelectedTier] = useState('basic');

  // Challenge data for different tiers
  const challengeData = {
    basic: [
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
        payouts: "Monthly",
        profitSplit: "70%",
        popular: false,
        features: ["Basic support", "Standard tools", "Monthly reports"]
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
        payouts: "Monthly",
        profitSplit: "70%",
        popular: true,
        features: ["Basic support", "Standard tools", "Monthly reports"]
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
        payouts: "Monthly",
        profitSplit: "75%",
        popular: false,
        features: ["Basic support", "Standard tools", "Monthly reports"]
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
        payouts: "Monthly", 
        profitSplit: "75%",
        popular: false,
        features: ["Basic support", "Standard tools", "Monthly reports"]
      }
    ],
    pro: [
      {
        id: 1,
        name: "$10K Pro Challenge",
        price: "$129",
        originalPrice: "$199",
        accountSize: "$10,000",
        profitTarget: "$800",
        maxDrawdown: "$1,000",
        dailyDrawdown: "$500",
        tradingDays: "No minimum",
        payouts: "Bi-weekly",
        profitSplit: "80%",
        popular: false,
        features: ["Priority support", "Advanced analytics", "Bi-weekly reports", "EA allowed"]
      },
      {
        id: 2, 
        name: "$25K Pro Challenge",
        price: "$249",
        originalPrice: "$349", 
        accountSize: "$25,000",
        profitTarget: "$2,000",
        maxDrawdown: "$2,500",
        dailyDrawdown: "$1,250", 
        tradingDays: "No minimum",
        payouts: "Bi-weekly",
        profitSplit: "80%",
        popular: true,
        features: ["Priority support", "Advanced analytics", "Bi-weekly reports", "EA allowed"]
      },
      {
        id: 3,
        name: "$50K Pro Challenge", 
        price: "$449",
        originalPrice: "$599",
        accountSize: "$50,000",
        profitTarget: "$4,000", 
        maxDrawdown: "$5,000",
        dailyDrawdown: "$2,500",
        tradingDays: "No minimum", 
        payouts: "Weekly",
        profitSplit: "85%",
        popular: false,
        features: ["Priority support", "Advanced analytics", "Weekly reports", "EA allowed"]
      },
      {
        id: 4,
        name: "$100K Pro Challenge",
        price: "$749",
        originalPrice: "$999",
        accountSize: "$100,000", 
        profitTarget: "$8,000",
        maxDrawdown: "$10,000",
        dailyDrawdown: "$5,000",
        tradingDays: "No minimum",
        payouts: "Weekly", 
        profitSplit: "85%",
        popular: false,
        features: ["Priority support", "Advanced analytics", "Weekly reports", "EA allowed"]
      }
    ],
    advanced: [
      {
        id: 1,
        name: "$10K Elite Challenge",
        price: "$199",
        originalPrice: "$299",
        accountSize: "$10,000",
        profitTarget: "$800",
        maxDrawdown: "$1,200",
        dailyDrawdown: "$600",
        tradingDays: "No minimum",
        payouts: "Daily",
        profitSplit: "90%",
        popular: false,
        features: ["24/7 VIP support", "Premium tools", "Real-time analytics", "Custom strategies", "1-on-1 coaching"]
      },
      {
        id: 2, 
        name: "$25K Elite Challenge",
        price: "$399",
        originalPrice: "$549", 
        accountSize: "$25,000",
        profitTarget: "$2,000",
        maxDrawdown: "$3,000",
        dailyDrawdown: "$1,500", 
        tradingDays: "No minimum",
        payouts: "Daily",
        profitSplit: "90%",
        popular: true,
        features: ["24/7 VIP support", "Premium tools", "Real-time analytics", "Custom strategies", "1-on-1 coaching"]
      },
      {
        id: 3,
        name: "$50K Elite Challenge", 
        price: "$699",
        originalPrice: "$899",
        accountSize: "$50,000",
        profitTarget: "$4,000", 
        maxDrawdown: "$6,000",
        dailyDrawdown: "$3,000",
        tradingDays: "No minimum", 
        payouts: "Daily",
        profitSplit: "90%",
        popular: false,
        features: ["24/7 VIP support", "Premium tools", "Real-time analytics", "Custom strategies", "1-on-1 coaching"]
      },
      {
        id: 4,
        name: "$100K Elite Challenge",
        price: "$1,199",
        originalPrice: "$1,599",
        accountSize: "$100,000", 
        profitTarget: "$8,000",
        maxDrawdown: "$12,000",
        dailyDrawdown: "$6,000",
        tradingDays: "No minimum",
        payouts: "Daily", 
        profitSplit: "90%",
        popular: false,
        features: ["24/7 VIP support", "Premium tools", "Real-time analytics", "Custom strategies", "1-on-1 coaching"]
      }
    ]
  };

  const currentChallenges = challengeData[selectedTier];

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

      {/* Challenge Tabs and Carousel */}
      <section className="py-20">
        <div className="container px-4">
          <Tabs value={selectedTier} onValueChange={setSelectedTier} className="w-full">
            {/* Tier Selection Tabs */}
            <div className="flex justify-center mb-12">
              <TabsList className="grid w-full max-w-md grid-cols-3 bg-card/50 backdrop-blur-sm border border-primary/20">
                <TabsTrigger 
                  value="basic" 
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-foreground hover:text-primary transition-all duration-300"
                >
                  Basic
                </TabsTrigger>
                <TabsTrigger 
                  value="pro" 
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-foreground hover:text-primary transition-all duration-300"
                >
                  Pro
                </TabsTrigger>
                <TabsTrigger 
                  value="advanced" 
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-foreground hover:text-primary transition-all duration-300"
                >
                  Advanced
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Challenge Carousel for each tier */}
            <TabsContent value={selectedTier} className="mt-8">
              <div className="max-w-6xl mx-auto">
                <Carousel className="w-full" opts={{ align: "start", loop: true }}>
                  <CarouselContent className="-ml-2 md:-ml-4">
                    {currentChallenges.map((challenge) => (
                      <CarouselItem key={challenge.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                        <Card 
                          className={`relative group bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-2 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,255,255,0.1)] hover:border-primary/30 hover:-translate-y-2 h-full ${
                            challenge.popular 
                              ? 'border-primary/40 shadow-[0_15px_35px_rgba(0,255,255,0.15)] scale-105' 
                              : 'border-border/40 hover:border-primary/50'
                          }`}
                        >
                          {challenge.popular && (
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                              <Badge className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-4 py-2 text-sm font-bold shadow-lg flex items-center space-x-2">
                                <Flame className="h-4 w-4" />
                                <span>Most Popular</span>
                              </Badge>
                            </div>
                          )}
                          
                          {/* Card Header */}
                          <CardHeader className="text-center pb-6 pt-8 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-50"></div>
                            <div className="relative z-10">
                              <div className="flex justify-center mb-4">
                                <div className="p-3 rounded-full bg-primary/10 border border-primary/20">
                                  <DollarSign className="h-8 w-8 text-primary" />
                                </div>
                              </div>
                              <CardTitle className="text-2xl font-bold font-poppins mb-4 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                                {challenge.name}
                              </CardTitle>
                              <div className="space-y-2">
                                <div className="text-4xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                  {challenge.price}
                                </div>
                                <div className="text-lg text-muted-foreground line-through opacity-75">
                                  {challenge.originalPrice}
                                </div>
                                <div className="inline-block px-3 py-1 bg-success/10 text-success text-sm font-semibold rounded-full border border-success/20">
                                  Save {Math.round((1 - parseInt(challenge.price.replace('$', '').replace(',', '')) / parseInt(challenge.originalPrice.replace('$', '').replace(',', ''))) * 100)}%
                                </div>
                              </div>
                            </div>
                          </CardHeader>
                          
                          {/* Card Content */}
                          <CardContent className="space-y-6 px-6 pb-6">
                            {/* Key Metrics Grid */}
                            <div className="grid grid-cols-2 gap-4 mb-6">
                              <div className="text-center p-3 bg-muted/30 rounded-lg border border-border/50">
                                <div className="text-xs text-muted-foreground mb-1">Account Size</div>
                                <div className="font-bold text-lg">{challenge.accountSize}</div>
                              </div>
                              <div className="text-center p-3 bg-primary/5 rounded-lg border border-primary/20">
                                <div className="text-xs text-muted-foreground mb-1">Profit Target</div>
                                <div className="font-bold text-lg text-primary">{challenge.profitTarget}</div>
                              </div>
                            </div>

                            {/* Features List */}
                            <div className="space-y-2 bg-muted/20 rounded-lg p-4 border border-border/30">
                              {challenge.features.map((feature, index) => (
                                <div key={index} className="flex items-center space-x-2">
                                  <Check className="h-4 w-4 text-success flex-shrink-0" />
                                  <span className="text-sm text-card-foreground">{feature}</span>
                                </div>
                              ))}
                            </div>

                            {/* Detailed Stats */}
                            <div className="space-y-3 bg-muted/20 rounded-lg p-4 border border-border/30">
                              <div className="flex justify-between items-center py-2 border-b border-border/20">
                                <div className="flex items-center space-x-2">
                                  <Shield className="h-4 w-4 text-muted-foreground" />
                                  <span className="text-sm text-muted-foreground">Max Drawdown</span>
                                </div>
                                <span className="font-semibold text-sm">{challenge.maxDrawdown}</span>
                              </div>
                              <div className="flex justify-between items-center py-2 border-b border-border/20">
                                <div className="flex items-center space-x-2">
                                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                                  <span className="text-sm text-muted-foreground">Daily Drawdown</span>
                                </div>
                                <span className="font-semibold text-sm">{challenge.dailyDrawdown}</span>
                              </div>
                              <div className="flex justify-between items-center py-2 border-b border-border/20">
                                <span className="text-sm text-muted-foreground">Payouts</span>
                                <span className="font-semibold text-sm">{challenge.payouts}</span>
                              </div>
                              <div className="flex justify-between items-center py-2">
                                <span className="text-sm text-muted-foreground">Profit Split</span>
                                <div className="flex items-center space-x-2">
                                  <span className="font-bold text-lg bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                                    {challenge.profitSplit}
                                  </span>
                                  <div className="px-2 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                                    YOU KEEP
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            {/* CTA Button */}
                            <Button 
                              className="w-full h-12 bg-gradient-to-r from-primary to-accent text-primary-foreground hover:from-accent hover:to-secondary font-bold text-lg shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105 border border-primary/20"
                              asChild
                            >
                              <a 
                                href="https://www.empirefundedcheckout.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="group-hover:animate-pulse flex items-center justify-center space-x-2"
                                onClick={() => trackingEvents.challengeClick(challenge.name, challenge.price)}
                              >
                                <Rocket className="h-5 w-5" />
                                <span>Start Challenge Now</span>
                              </a>
                            </Button>
                            
                            {/* Trust Indicators */}
                            <div className="flex justify-center space-x-4 text-xs text-muted-foreground pt-2">
                              <div className="flex items-center space-x-1">
                                <Check className="h-3 w-3 text-success" />
                                <span>Instant Setup</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Check className="h-3 w-3 text-success" />
                                <span>24/7 Support</span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="border-primary/20 hover:bg-primary/10" />
                  <CarouselNext className="border-primary/20 hover:bg-primary/10" />
                </Carousel>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Tier Comparison */}
      <section className="py-20 bg-gradient-to-b from-background to-primary/5">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
              Compare Challenge Tiers
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose the tier that matches your trading experience and goals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                tier: "Basic",
                price: "From $89",
                description: "Perfect for new traders starting their funded journey",
                features: ["Monthly payouts", "70-75% profit split", "Basic support", "Standard tools"],
                color: "secondary"
              },
              {
                tier: "Pro", 
                price: "From $129",
                description: "Ideal for experienced traders seeking better conditions",
                features: ["Bi-weekly/Weekly payouts", "80-85% profit split", "Priority support", "Advanced analytics"],
                color: "primary",
                popular: true
              },
              {
                tier: "Advanced",
                price: "From $199", 
                description: "Elite tier for professional traders demanding the best",
                features: ["Daily payouts", "90% profit split", "24/7 VIP support", "Premium tools", "1-on-1 coaching"],
                color: "accent"
              }
            ].map((tier, index) => (
              <Card key={index} className={`text-center bg-card/50 backdrop-blur-sm border-2 transition-all duration-300 hover:scale-105 ${
                tier.popular ? 'border-primary/40 shadow-elegant' : 'border-border/40 hover:border-primary/30'
              }`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-4 py-2">
                      Recommended
                    </Badge>
                  </div>
                )}
                <CardHeader className="pb-4 pt-8">
                  <CardTitle className="text-2xl font-bold text-primary mb-2">{tier.tier}</CardTitle>
                  <div className="text-3xl font-bold text-foreground mb-4">{tier.price}</div>
                  <CardDescription className="text-muted-foreground">{tier.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-success flex-shrink-0" />
                      <span className="text-sm text-card-foreground">{feature}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Additional Features */}
        <div className="container px-4 mt-12">
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