import { Link } from "react-router-dom";
import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <img 
              src="https://empirefundedcheckout.com/wp-content/uploads/2025/06/Empire-Funded-White-Max-Schreuder.png" 
              alt="Empire Funded" 
              className="h-8 w-auto"
            />
            <p className="text-sm text-muted-foreground max-w-xs">
              Empire Funded is a premier prop trading firm providing traders with capital and support to achieve their financial goals.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-poppins">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/challenges" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Challenges
                </Link>
              </li>
              <li>
                <Link to="/trading-platform" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Trading Platform
                </Link>
              </li>
              <li>
                <Link to="/affiliates" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Affiliates
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-poppins">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/risk-disclosure" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Risk Disclosure
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-poppins">Follow Us</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://facebook.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2024 Empire Funded. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground mt-2 md:mt-0">
              Trading involves substantial risk and is not suitable for all investors.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;