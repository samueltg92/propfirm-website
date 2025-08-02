import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Shield, 
  DollarSign, 
  Target, 
  Clock, 
  Users,
  ArrowRight,
  CheckCircle,
  Star
} from "lucide-react";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import tradingHeroBg from "@/assets/trading-hero-bg.png";

const Home = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Next-Day Payouts",
      description: "Lightning-fast payouts within 24 hours. No bureaucracy, just results.",
      badge: "Fast"
    },
    {
      icon: DollarSign,
      title: "Up to 90% Profit Split",
      description: "Industry-leading profit sharing. The more you earn, the more you keep.",
      badge: "Highest"
    },
    {
      icon: Target,
      title: "No Nonsense Rules",
      description: "Clear, trader-friendly rules. No hidden restrictions or surprise changes.",
      badge: "Fair"
    },
    {
      icon: Users,
      title: "Real Trader Support",
      description: "24/7 support from actual traders who understand your challenges.",
      badge: "Expert"
    }
  ];

  const payoutTickers = [
    { name: "Marcus Chen", amount: "$2,847.50", country: "Singapore", flag: "🇸🇬" },
    { name: "Sarah Johnson", amount: "$1,923.75", country: "Canada", flag: "🇨🇦" },
    { name: "Ahmed Hassan", amount: "$3,156.20", country: "UAE", flag: "🇦🇪" },
    { name: "Elena Rodriguez", amount: "$2,091.85", country: "Spain", flag: "🇪🇸" },
    { name: "James Williams", amount: "$1,764.30", country: "UK", flag: "🇬🇧" },
    { name: "Sofia Andersson", amount: "$2,523.45", country: "Sweden", flag: "🇸🇪" }
  ];

  const steps = [
    {
      number: "01",
      title: "Select Your Challenge",
      description: "Choose from our range of funding challenges. Start with as little as $10K or go big with $400K.",
      icon: Target
    },
    {
      number: "02", 
      title: "Meet Evaluation Criteria",
      description: "Hit your profit targets while managing risk. Clear rules, no surprises.",
      icon: TrendingUp
    },
    {
      number: "03",
      title: "Get Your Empire Funded Account",
      description: "Trade with our capital and keep up to 90% of profits. Build your trading empire.",
      icon: DollarSign
    },
    {
      number: "04",
      title: "Weekly Profit Withdrawals",
      description: "Request payouts weekly. Fast processing, reliable transfers worldwide.",
      icon: Clock
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Professional trading background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.08]" 
          style={{ backgroundImage: `url(${tradingHeroBg})` }}
        />
        {/* Enhanced overlay for optimal text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/98 via-background/95 to-background/98" />
        
        <div className="container px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8 text-center lg:text-left">
                {/* Badge */}
                <div className="inline-flex items-center gap-3 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2">
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-success">#1 Fastest Growing Prop Firm</span>
                </div>

                <div className="space-y-6">
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-poppins leading-tight">
                    We Don't Just Fund
                    <span className="block text-transparent bg-gradient-to-r from-primary to-primary-glow bg-clip-text">
                      Traders.
                    </span>
                    <span className="block text-2xl md:text-4xl lg:text-5xl mt-4">
                      We Build <span className="text-primary">Empires.</span>
                    </span>
                  </h1>
                  
                  <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
                    Join the firm that's flipping the script - with next-day payouts, no nonsense rules, and real trader support.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 animate-glow"
                    asChild
                  >
                    <a href="https://www.empirefundedcheckout.com" target="_blank" rel="noopener noreferrer">
                      Get Funded Now
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-primary/30 hover:bg-primary/10 px-8 py-4 text-lg text-primary hover:text-primary transition-all duration-300"
                    asChild
                  >
                    <Link to="/challenges">
                      View Challenges
                    </Link>
                  </Button>
                </div>

                {/* Payment Methods */}
                <div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
                  <span className="text-sm text-muted-foreground">Accepted:</span>
                  <div className="flex items-center gap-3 opacity-60">
                    <div className="w-8 h-5 bg-primary/20 rounded border border-primary/30 flex items-center justify-center">
                      <span className="text-xs text-primary font-bold">VISA</span>
                    </div>
                    <div className="w-8 h-5 bg-warning/20 rounded border border-warning/30 flex items-center justify-center">
                      <span className="text-xs text-warning font-bold">MC</span>
                    </div>
                    <div className="w-8 h-5 bg-secondary/20 rounded border border-secondary/30 flex items-center justify-center">
                      <span className="text-xs text-secondary font-bold">₿</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Content - Trading Dashboard Mockup */}
              <div className="relative lg:block hidden">
                <div className="relative">
                  {/* Main dashboard card */}
                  <div className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 shadow-2xl">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-card-foreground">You've been funded!</h3>
                        <p className="text-sm text-muted-foreground">9 mins ago</p>
                      </div>
                      <div className="w-12 h-12 bg-success/20 rounded-full flex items-center justify-center">
                        <DollarSign className="w-6 h-6 text-success" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-3xl font-bold text-success">$100,000</div>
                      <div className="text-sm text-muted-foreground">Amount (USD)</div>
                    </div>
                  </div>

                  {/* Floating payout notification */}
                  <div className="absolute -top-4 -right-4 bg-primary/90 backdrop-blur-sm text-primary-foreground rounded-xl p-4 shadow-xl animate-float">
                    <div className="text-sm font-medium">You've received a new payment!</div>
                    <div className="text-xs opacity-90">9 mins ago</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Payout Ticker */}
        <div className="absolute bottom-0 left-0 w-full bg-card/50 backdrop-blur-sm border-t border-border/50 py-4 overflow-hidden">
          <div className="animate-ticker flex items-center gap-12 whitespace-nowrap">
            {[...payoutTickers, ...payoutTickers].map((payout, index) => (
              <div key={index} className="flex items-center gap-4 text-sm">
                <div className="w-8 h-8 bg-success/20 rounded-full flex items-center justify-center">
                  <span className="text-xs">{payout.flag}</span>
                </div>
                <div>
                  <span className="text-success font-bold">{payout.amount}</span>
                  <span className="text-muted-foreground mx-2">|</span>
                  <span className="text-card-foreground">{payout.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gradient-to-b from-background to-card/30">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-5xl font-bold font-poppins mb-6">
                Industry-Leading <span className="text-primary">Features</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Built by traders, for traders. Every feature designed to maximize your success and minimize bureaucracy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="relative bg-card/60 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl group overflow-hidden animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary/20 text-primary text-xs font-bold px-2 py-1 rounded-full">
                      {feature.badge}
                    </span>
                  </div>
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300">
                      <feature.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 font-poppins text-card-foreground group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How to Get Funded */}
      <section id="how-it-works" className="py-20 bg-card/20">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-5xl font-bold font-poppins mb-6">
                <span className="text-foreground">Path to </span>
                <span className="text-transparent bg-gradient-to-r from-primary to-success bg-clip-text">
                  Empire Status
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                From evaluation to empire builder in four simple steps. No bureaucracy, just results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div 
                  key={index} 
                  className="relative group animate-slide-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Connection line */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/50 to-primary/20 translate-x-8 z-0"></div>
                  )}
                  
                  <div className="relative bg-card/60 backdrop-blur-sm border border-border/50 rounded-xl p-6 text-center hover:border-primary/50 transition-all duration-500 hover:shadow-2xl">
                    {/* Glowing step number */}
                    <div className="relative mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 border-2 border-primary/30 rounded-full flex items-center justify-center mx-auto relative group-hover:from-primary/30 group-hover:to-primary/20 group-hover:border-primary/50 transition-all duration-300">
                        <span className="text-2xl font-bold text-primary">{step.number}</span>
                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
                      </div>
                      
                      {/* Icon */}
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                          <step.icon className="w-4 h-4 text-primary-foreground" />
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4 font-poppins text-card-foreground group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA after steps */}
            <div className="text-center mt-16">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-primary-glow hover:from-primary-dark hover:to-primary text-primary-foreground px-12 py-4 text-lg font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 animate-glow"
                asChild
              >
                <a href="https://www.empirefundedcheckout.com" target="_blank" rel="noopener noreferrer">
                  Start Your Empire Today
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA for Affiliates */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-background to-success/10 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-30"></div>
        
        <div className="container px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="space-y-8 animate-fade-in">
              {/* Highlight badge */}
              <div className="inline-flex items-center gap-3 bg-warning/20 border border-warning/30 rounded-full px-6 py-3">
                <DollarSign className="w-5 h-5 text-warning" />
                <span className="text-warning font-bold">Earn Up to $500 Per Referral</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold font-poppins">
                <span className="text-foreground">We Reward Your Effort to </span>
                <span className="text-transparent bg-gradient-to-r from-warning to-primary bg-clip-text">
                  Help Us Grow!
                </span>
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Join our elite affiliate program and earn industry-leading commissions. Build your network, 
                create passive income streams, and grow alongside the fastest-growing prop firm.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-warning to-secondary hover:from-warning/90 hover:to-secondary/90 text-warning-foreground px-10 py-4 text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300"
                  asChild
                >
                  <Link to="/affiliates">
                    Join Affiliate Program
                  </Link>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-primary/30 text-primary hover:bg-primary/10 px-8 py-4 text-lg transition-all duration-300"
                  asChild
                >
                  <Link to="/challenges">
                    Learn More
                  </Link>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-warning mb-2">$500</div>
                  <div className="text-sm text-muted-foreground">Max Commission</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">24hrs</div>
                  <div className="text-sm text-muted-foreground">Payout Speed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-success mb-2">90%</div>
                  <div className="text-sm text-muted-foreground">Conversion Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary/5">
        <div className="container px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
            Ready to Start Trading with Our Capital?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of successful traders who trust Empire Funded with their trading career.
          </p>
          <Button 
            size="lg" 
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 text-lg px-8 py-6"
          >
            <a href="https://www.empirefundedcheckout.com" target="_blank" rel="noopener noreferrer">
              Get Funded Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Home;