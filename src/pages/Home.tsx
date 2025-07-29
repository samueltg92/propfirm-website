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

const Home = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Flexible Trading Rules",
      description: "Trade with generous profit targets and manageable drawdown limits designed for your success."
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Comprehensive risk management system to protect your capital and maximize profit potential."
    },
    {
      icon: DollarSign,
      title: "Up to 90% Profit Share",
      description: "Keep up to 90% of your profits with our industry-leading profit sharing structure."
    },
    {
      icon: Clock,
      title: "No Time Limits",
      description: "Take your time to reach your targets with no pressure from artificial time constraints."
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Select Your Challenge",
      description: "Choose from our range of funded account challenges, starting from $10K to $200K."
    },
    {
      number: "02", 
      title: "Meet Evaluation Criteria",
      description: "Demonstrate your trading skills by meeting our profit targets and risk management rules."
    },
    {
      number: "03",
      title: "Manage Funded Account",
      description: "Receive your funded account and start trading with our capital backing your strategies."
    },
    {
      number: "04",
      title: "Access Profits Weekly",
      description: "Withdraw your profits weekly and scale your account up to $1 million based on performance."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with gradient overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/10"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "overlay"
          }}
        />
        
        {/* Content */}
        <div className="relative z-10 container px-4 text-center">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
            🏆 Premier Prop Trading Firm
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-poppins mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Trade With Our Capital,
            <br />
            Keep Your Profits
          </h1>
          
          <h3 className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto font-inter">
            Join thousands of successful traders who've scaled their accounts with Empire Funded. 
            Get funded up to $200K and keep up to 90% of your profits.
          </h3>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 text-lg px-8 py-6"
            >
              <a href="https://www.empirefundedcheckout.com" target="_blank" rel="noopener noreferrer">
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              asChild
              className="border-primary/20 hover:bg-primary/10 text-lg px-8 py-6"
            >
              <a href="#how-it-works">
                Learn How It Works
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">$200K</div>
              <div className="text-sm text-muted-foreground">Max Account Size</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">90%</div>
              <div className="text-sm text-muted-foreground">Profit Share</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">5,000+</div>
              <div className="text-sm text-muted-foreground">Funded Traders</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">Weekly</div>
              <div className="text-sm text-muted-foreground">Payouts</div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-card/50">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
              Why Choose Empire Funded?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We provide the most trader-friendly conditions in the industry with generous rules and maximum profit potential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-border/50 bg-card/50 hover:bg-card transition-all duration-300 hover:shadow-lg">
                <CardHeader className="text-center">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-poppins">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Get Funded */}
      <section id="how-it-works" className="py-20">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
              How to Get Funded in 4 Simple Steps
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our streamlined process gets you from evaluation to funded trader quickly and efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mb-6 text-2xl font-bold text-white">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold font-poppins mb-4">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent transform translate-x-8"></div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <a href="https://www.empirefundedcheckout.com" target="_blank" rel="noopener noreferrer">
                Start Your Journey Today
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA for Affiliates */}
      <section className="py-20 bg-gradient-to-r from-accent/10 to-primary/10">
        <div className="container px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Users className="h-16 w-16 text-accent mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
              We Reward Your Effort to Help Us Grow! 🚀
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join our affiliate program and earn generous commissions for every trader you refer. 
              Help others achieve their trading goals while building your own income stream.
            </p>
            <Button 
              size="lg" 
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <a href="/affiliates">
                Join Affiliate Program
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
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