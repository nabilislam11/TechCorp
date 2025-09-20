import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Palette, Settings, Code, Zap, ArrowRight } from "lucide-react";

const RefineCustomizeSection = () => {
  const customizationFeatures = [
    {
      icon: Palette,
      title: "Theme Customization",
      description: "Personalize colors, fonts, and visual elements to match your brand identity perfectly.",
      features: ["Color palette editor", "Typography controls", "Component theming"],
    },
    {
      icon: Settings,
      title: "Advanced Configuration",
      description: "Fine-tune every aspect of your platform with comprehensive configuration options.",
      features: ["Workflow automation", "Integration settings", "Performance optimization"],
    },
    {
      icon: Code,
      title: "Custom Development",
      description: "Extend functionality with custom code, APIs, and third-party integrations.",
      features: ["API customization", "Plugin development", "White-label solutions"],
    },
    {
      icon: Zap,
      title: "Real-time Preview",
      description: "See changes instantly with our live preview system and collaborative editing.",
      features: ["Live editing", "Version control", "Team collaboration"],
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-section-heading text-foreground">
            Refine & <span className="text-primary">Customize</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Tailor every aspect of your platform to meet your unique business requirements. 
            From visual customization to advanced integrations, make it truly yours.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {customizationFeatures.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="card-enterprise hover-lift group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-card-heading text-foreground group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <ul className="space-y-1">
                  {feature.features.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        {/* Interactive Demo Section */}
        <div className="bg-gradient-subtle rounded-xl p-8 text-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">
              Experience Live Customization
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Try our interactive demo and see how easy it is to customize your platform 
              in real-time with our visual editor and configuration tools.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-primary group">
                Launch Live Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="btn-secondary">
                View Gallery
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground mt-8">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>No code required</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Instant preview</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Team collaboration</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RefineCustomizeSection;