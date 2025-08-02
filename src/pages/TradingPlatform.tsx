import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Zap, Shield, Globe, TrendingUp, Clock, Smartphone, HeadphonesIcon } from "lucide-react";

const TradingPlatform = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-background via-background/90 to-primary/5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzMzQxNTUiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaDR6bTAtMzBWMGgtMnY0aC00djJoNHY0aDJWNmg0VjRoLTR6TTYgMzR2LTRINHY0SDB2Mmg0djRoMnYtNGg0di0ySDZ6TTYgNFYwSDR2NEgwdjJoNHY0aDJWNmg0VjRINnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="mb-8">
            {/* Platform Logo Placeholder */}
            <div className="mx-auto w-32 h-16 bg-gradient-to-r from-primary to-primary-glow rounded-lg flex items-center justify-center mb-6">
              <span className="text-white font-bold text-xl">MT5</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Trade on a World-Class Platform
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Experience professional trading with MetaTrader 5 - the industry's most advanced and trusted platform. 
            Access global markets with lightning-fast execution and institutional-grade tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="gradient">
              Start Trading Now
            </Button>
            <Button variant="outline" size="lg">
              Download Platform
            </Button>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">Platform Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional trading tools designed for serious traders and funded account managers
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: BarChart3,
                title: "Advanced Charting",
                description: "Professional charts with 80+ technical indicators and multiple timeframes"
              },
              {
                icon: Zap,
                title: "Fast Execution",
                description: "Ultra-low latency execution with institutional-grade servers"
              },
              {
                icon: Shield,
                title: "Secure Trading",
                description: "Bank-level security with encrypted connections and data protection"
              },
              {
                icon: Globe,
                title: "Global Markets",
                description: "Access to Forex, indices, commodities, and cryptocurrency markets"
              },
              {
                icon: TrendingUp,
                title: "Real-time Data",
                description: "Live market data and instant price updates from top liquidity providers"
              },
              {
                icon: Clock,
                title: "24/5 Trading",
                description: "Trade around the clock during market hours with continuous support"
              },
              {
                icon: Smartphone,
                title: "Mobile Trading",
                description: "Full-featured mobile apps for iOS and Android devices"
              },
              {
                icon: HeadphonesIcon,
                title: "Expert Support",
                description: "Dedicated technical support and platform training resources"
              }
            ].map((feature, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 group hover:shadow-elegant">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg text-primary">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-muted-foreground text-sm">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Specifications */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-primary">Technical Specifications</h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Execution Speed",
                    description: "Orders executed in under 50ms with no requotes"
                  },
                  {
                    title: "Spreads",
                    description: "Competitive spreads starting from 0.0 pips on major pairs"
                  },
                  {
                    title: "Leverage",
                    description: "Up to 1:100 leverage on funded accounts"
                  },
                  {
                    title: "Trading Instruments",
                    description: "100+ instruments including Forex, indices, and commodities"
                  },
                  {
                    title: "Minimum Trade Size",
                    description: "0.01 lots with precise position sizing"
                  },
                  {
                    title: "Order Types",
                    description: "Market, limit, stop, and advanced order types supported"
                  }
                ].map((spec, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-primary mb-1">{spec.title}</h3>
                      <p className="text-muted-foreground">{spec.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary/5 to-secondary/20 rounded-2xl p-8">
              <div className="bg-card/80 backdrop-blur-sm rounded-xl p-6 border border-primary/20">
                <h3 className="text-2xl font-bold mb-6 text-primary">Platform Downloads</h3>
                <div className="space-y-4">
                  <Button variant="gradient" className="w-full justify-start">
                    <Smartphone className="w-5 h-5 mr-3" />
                    Download for Windows
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Smartphone className="w-5 h-5 mr-3" />
                    Download for Mac
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Smartphone className="w-5 h-5 mr-3" />
                    Download Mobile App
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Globe className="w-5 h-5 mr-3" />
                    Web Platform
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-background to-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-primary">Ready to Experience Professional Trading?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of successful traders using our advanced platform to manage funded accounts
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="gradient">
              Get Your Funded Account
            </Button>
            <Button variant="outline" size="lg">
              Try Demo Account
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TradingPlatform;