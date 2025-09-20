import { Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Products",
      links: [
        "Database Services",
        "Cloud Infrastructure",
        "AI & Machine Learning",
        "Analytics Platform",
        "Security Solutions",
        "Developer Tools",
      ],
    },
    {
      title: "Solutions",
      links: [
        "Enterprise",
        "Small Business",
        "Startups",
        "Government",
        "Healthcare",
        "Financial Services",
      ],
    },
    {
      title: "Resources",
      links: [
        "Documentation",
        "API Reference",
        "Tutorials",
        "Case Studies",
        "Webinars",
        "Blog",
      ],
    },
    {
      title: "Company",
      links: [
        "About Us",
        "Careers",
        "Press",
        "Partners",
        "Investors",
        "Contact",
      ],
    },
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "YouTube", icon: Youtube, href: "#" },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="section-container">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="text-3xl font-bold text-primary">TechCorp</div>
              <p className="text-background/80 leading-relaxed">
                Empowering enterprises with cutting-edge cloud solutions, 
                advanced analytics, and AI-powered platforms.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors group"
                      aria-label={social.name}
                    >
                      <Icon className="h-5 w-5 text-background group-hover:text-primary-foreground" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section) => (
              <div key={section.title} className="space-y-4">
                <h4 className="font-semibold text-lg text-background">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-background/80 hover:text-primary transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-background/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-background/80">
              © 2024 TechCorp. All rights reserved.
            </div>
            <div className="flex space-x-8 text-sm">
              <a
                href="#"
                className="text-background/80 hover:text-primary transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-background/80 hover:text-primary transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-background/80 hover:text-primary transition-colors"
              >
                Cookie Policy
              </a>
              <a
                href="#"
                className="text-background/80 hover:text-primary transition-colors"
              >
                Security
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;