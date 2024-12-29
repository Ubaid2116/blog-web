import {
  Github,
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full py-12 border-t relative z-10 bg-background/80 backdrop-blur-sm">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-gradient text-2xl font-bold tracking-tighter">
              Cubex BLOG
            </h3>
            <p className="text-muted-foreground">
              Your premier destination for insightful tech articles, programming
              tutorials, and industry news. Join our community of passionate
              developers and tech enthusiasts.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                ukubaid74@gmail.com
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                +92 (317) 2077696
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                123 Tech Street, Silicon Valley, CA
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 ml-0 md:ml-14">
            <h4 className="text-lg font-semibold">Explore</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/blog"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center space-x-2"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>Latest Articles</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/categories"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center space-x-2"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>Categories</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/authors"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center space-x-2"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>Our Authors</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center space-x-2"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>Resources</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Resources</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/newsletter"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center space-x-2"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent"></span>
                  <span>Newsletter</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center space-x-2"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent"></span>
                  <span>Tech Events</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contribute"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center space-x-2"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent"></span>
                  <span>Write for Us</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center space-x-2"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent"></span>
                  <span>FAQs</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect With Us</h4>
            <p className="text-muted-foreground">
              Follow us on social media for the latest updates and tech
              insights.
            </p>
            <div className="grid grid-cols-3 gap-4">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:contact@cubexblog.com"
                className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} Cubex BLOG. All rights reserved.
              <Link href="/privacy" className="hover:text-primary ml-4">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary ml-4">
                Terms of Service
              </Link>
            </p>
            <p className="text-sm text-muted-foreground text-center md:text-right">
              Made with ❤️ by Ubaid
            </p>
          </div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-radial from-accent/10 via-transparent to-transparent animate-spin-slow" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-radial from-primary/10 via-transparent to-transparent animate-spin-slow" />
      </div>
    </footer>
  );
};

export default Footer;
