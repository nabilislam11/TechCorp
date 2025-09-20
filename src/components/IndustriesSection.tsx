import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const IndustriesSection = () => {
  const industries = [
    {
      name: "Financial Services",
      description: "Secure, compliant solutions for banking, insurance, and fintech",
      gradient: "from-blue-600 to-blue-800",
    },
    {
      name: "Healthcare",
      description: "HIPAA-compliant infrastructure for patient care and medical research",
      gradient: "from-green-600 to-green-800",
    },
    {
      name: "Retail & E-commerce",
      description: "Scalable platforms for omnichannel customer experiences",
      gradient: "from-purple-600 to-purple-800",
    },
    {
      name: "Manufacturing",
      description: "IoT-enabled solutions for smart factories and supply chain optimization",
      gradient: "from-orange-600 to-orange-800",
    },
    {
      name: "Government",
      description: "Secure, compliant solutions for public sector digital transformation",
      gradient: "from-gray-600 to-gray-800",
    },
    {
      name: "Education",
      description: "Collaborative platforms for modern learning and campus management",
      gradient: "from-indigo-600 to-indigo-800",
    },
  ];

  return (
    <section className="section-padding bg-muted">
      <div className="section-container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-section-heading text-foreground">
            Industry-Specific Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tailored solutions designed for the unique challenges of your industry
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-foreground/90 to-foreground text-background p-8 hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <div className="relative z-10 space-y-4">
                <h3 className="text-xl font-semibold">{industry.name}</h3>
                <p className="text-background/80 leading-relaxed">
                  {industry.description}
                </p>
                <Button 
                  variant="ghost" 
                  className="p-0 h-auto text-background hover:text-background/80 font-medium group-hover:translate-x-1 transition-transform"
                >
                  Explore Solutions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              {/* Decorative background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-background rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-background rounded-full translate-y-12 -translate-x-12"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;