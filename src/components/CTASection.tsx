import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding bg-gradient-primary">
      <div className="section-container">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <div className="space-y-4">
            <h2 className="text-section-heading text-primary-foreground">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Join thousands of enterprises already leveraging our platform to drive innovation, 
              reduce costs, and accelerate growth. Start your digital transformation today.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-background text-primary hover:bg-background/90 px-8 py-4 text-lg font-semibold group"
              size="lg"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-4 text-lg font-semibold"
              size="lg"
            >
              Contact Sales
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-8 text-primary-foreground/80">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary-foreground/80 rounded-full"></div>
              <span>30-day free trial</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary-foreground/80 rounded-full"></div>
              <span>No setup fees</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary-foreground/80 rounded-full"></div>
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;