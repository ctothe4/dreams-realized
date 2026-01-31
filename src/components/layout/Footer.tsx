import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, Mail } from "lucide-react";

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="bg-charcoal text-secondary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-serif text-2xl font-bold text-primary-foreground mb-4">
              Alexander Sakala
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
              Matero Constituency • Building a movement, not a campaign. 
              Action before promise. Proof before politics.
            </p>
            <p className="documentary-caption mt-6 text-primary">
              Ti sebenza kuno — We're Working Here
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans font-semibold text-primary-foreground mb-4">
              Explore
            </h4>
            <nav className="flex flex-col gap-2">
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About Alexander
              </Link>
              <Link to="/movement" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                The Movement
              </Link>
              <Link to="/work" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Work in Motion
              </Link>
              <Link to="/media" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Media Hub
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans font-semibold text-primary-foreground mb-4">
              Connect
            </h4>
            <div className="flex gap-3 mb-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-muted/10 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
            <a
              href="mailto:contact@alexandersakala.com"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={16} />
              contact@alexandersakala.com
            </a>
          </div>
        </div>

        <div className="border-t border-muted/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Alexander Mumba Sakala. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Authorized by Alexander Sakala for Matero
          </p>
        </div>
      </div>
    </footer>
  );
}
