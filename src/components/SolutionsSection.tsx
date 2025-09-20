import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import cloudImage from "@/assets/cloud-solutions.jpg";
import databaseImage from "@/assets/database-analytics.jpg";
import aiImage from "@/assets/ai-solutions.jpg";

const SolutionsSection = () => {
  const solutions = [
    {
      title: "Cloud Infrastructure",
      description: "Scalable, secure, and reliable cloud infrastructure that grows with your business. Deploy applications globally with enterprise-grade performance and security.",
      features: ["Auto-scaling capabilities", "Global content delivery", "99.99% uptime guarantee"],
      image: cloudImage,
      reverse: false,
    },
    {
      title: "Database & Analytics",
      description: "Advanced database solutions with real-time analytics and machine learning capabilities. Make data-driven decisions with powerful insights and visualization tools.",
      features: ["Real-time data processing", "Advanced query optimization", "Integrated ML models"],
      image: databaseImage,
      reverse: true,
    },
    {
      title: "AI-Powered Solutions",
      description: "Harness the power of artificial intelligence to automate processes, gain insights, and enhance customer experiences with our enterprise AI platform.",
      features: ["Natural language processing", "Predictive analytics", "Automated workflows"],
      image: aiImage,
      reverse: false,
    },
  ];

  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-section-heading text-foreground">
            Comprehensive Enterprise Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to modernize your business operations and drive innovation
          </p>
        </div>

        <div className="space-y-24">
          {solutions.map((solution, index) => (
            <div
              key={solution.title}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                solution.reverse ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Content */}
              <div className={`space-y-6 ${solution.reverse ? "lg:col-start-2" : ""}`}>
                <div className="space-y-4">
                  <h3 className="text-card-heading text-foreground">
                    {solution.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {solution.description}
                  </p>
                </div>

                <ul className="space-y-3">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="outline" className="btn-secondary group">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Image */}
              <div className={`${solution.reverse ? "lg:col-start-1" : ""}`}>
                <div className="relative rounded-xl overflow-hidden shadow-enterprise-lg">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;