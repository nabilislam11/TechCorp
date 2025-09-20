import { 
  Shield, 
  Zap, 
  Globe, 
  BarChart3, 
  Lock, 
  Headphones, 
  Cpu, 
  Smartphone 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const FeaturesGrid = () => {
  const features = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security with end-to-end encryption, compliance certifications, and advanced threat protection.",
      link: "Security Features",
    },
    {
      icon: Zap,
      title: "Lightning Performance",
      description: "Optimized infrastructure delivering sub-second response times and 99.99% uptime across all services.",
      link: "Performance Metrics",
    },
    {
      icon: Globe,
      title: "Global Scale",
      description: "Deploy across 200+ edge locations worldwide with automatic load balancing and geographic redundancy.",
      link: "Global Infrastructure",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Real-time insights with customizable dashboards, predictive analytics, and automated reporting.",
      link: "Analytics Platform",
    },
    {
      icon: Lock,
      title: "Compliance Ready",
      description: "Meet regulatory requirements with SOC 2, HIPAA, GDPR, and industry-specific compliance frameworks.",
      link: "Compliance Center",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Dedicated enterprise support with guaranteed response times and dedicated customer success managers.",
      link: "Support Options",
    },
    {
      icon: Cpu,
      title: "AI Integration",
      description: "Built-in machine learning capabilities with pre-trained models and custom AI development tools.",
      link: "AI Solutions",
    },
    {
      icon: Smartphone,
      title: "Mobile-First",
      description: "Native mobile apps and responsive web interfaces designed for productivity on any device.",
      link: "Mobile Platform",
    },
  ];

  return (
    <section className="section-padding bg-muted">
      <div className="section-container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-section-heading text-foreground">
            Why Leading Enterprises Choose Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trusted by Fortune 500 companies for mission-critical applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="card-enterprise group">
                <div className="space-y-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    className="p-0 h-auto text-primary hover:text-primary-hover font-medium text-sm"
                  >
                    {feature.link} →
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;