import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Challenges", href: "/challenges" },
    { name: "Trading Platform", href: "/trading-platform" },
    { name: "Affiliates", href: "/affiliates" },
    { name: "FAQs", href: "/faqs" },
    { name: "Contact Us", href: "/contact" }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src="https://empirefundedcheckout.com/wp-content/uploads/2025/06/Empire-Funded-White-Max-Schreuder.png" 
            alt="Empire Funded" 
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium mx-auto">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="transition-colors hover:text-primary text-foreground/60 hover:text-foreground"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button 
            variant="outline" 
            asChild
            className="border-border hover:bg-muted"
          >
            <a 
              href="https://www.youtube.com/watch?v=oaK1XKTGEDI" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Dashboard
            </a>
          </Button>
          <Button 
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <a 
              href="https://www.empirefundedcheckout.com" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Get Started
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col space-y-4 px-4 py-6 bg-card border-t border-border">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-foreground/60 hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex flex-col space-y-2 pt-4">
              <Button variant="outline" asChild>
                <a 
                  href="https://www.youtube.com/watch?v=oaK1XKTGEDI" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Dashboard
                </a>
              </Button>
              <Button asChild>
                <a 
                  href="https://www.empirefundedcheckout.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Get Started
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;