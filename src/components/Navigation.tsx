import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    {
      title: "Products",
      items: ["Database", "Cloud Infrastructure", "Applications", "Analytics"],
    },
    {
      title: "Solutions",
      items: ["Enterprise", "Small Business", "Developers", "Startups"],
    },
    {
      title: "Resources",
      items: ["Documentation", "Tutorials", "Case Studies", "Blog"],
    },
    {
      title: "Customers",
      items: ["Success Stories", "Partner Network", "Support", "Community"],
    },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-primary">TechCorp</div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((menu) => (
              <DropdownMenu key={menu.title}>
                <DropdownMenuTrigger className="flex items-center space-x-1 text-foreground hover:text-primary outline-none transition-all duration-300 hover:-translate-y-0.5 px-3 py-2 rounded-md hover:bg-secondary/50">
                  <span className="font-medium">{menu.title}</span>
                  <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48 bg-popover border border-border shadow-enterprise-lg animate-scale-in">
                  {menu.items.map((item) => (
                    <DropdownMenuItem
                      key={item}
                      className="cursor-pointer hover:bg-secondary focus:bg-secondary transition-all duration-300 hover:translate-x-1 hover:text-primary"
                    >
                      {item}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              className="font-medium hover:-translate-y-0.5 transition-all duration-300"
            >
              Sign In
            </Button>
            <Button className="btn-primary">Contact Sales</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background animate-slide-down">
            <div className="py-4 space-y-4">
              {menuItems.map((menu, menuIndex) => (
                <div
                  key={menu.title}
                  className="space-y-2"
                  style={{ animationDelay: `${menuIndex * 100}ms` }}
                >
                  <div className="font-medium text-foreground px-4 py-2 hover:bg-secondary/50 rounded-md mx-2 cursor-pointer transition-all duration-300">
                    {menu.title}
                  </div>
                  {menu.items.map((item, itemIndex) => (
                    <div
                      key={item}
                      className="pl-8 pr-4 py-2 text-muted-foreground hover:text-foreground hover:bg-secondary/30 rounded-md mx-2 cursor-pointer transition-all duration-300 hover:translate-x-1"
                      style={{
                        animationDelay: `${menuIndex * 100 + itemIndex * 50}ms`,
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              ))}
              <div className="border-t border-border pt-4 px-4 space-y-3">
                <Button
                  variant="ghost"
                  className="w-full justify-start hover:-translate-y-0.5 transition-all duration-300"
                >
                  Sign In
                </Button>
                <Button className="btn-primary w-full">Contact Sales</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
