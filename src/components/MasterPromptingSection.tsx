import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, MessageSquare, Sparkles, Target, ArrowRight, Code2 } from "lucide-react";

const MasterPromptingSection = () => {
  const promptingFeatures = [
    {
      icon: Brain,
      title: "AI-Powered Intelligence",
      description: "Advanced AI models trained on enterprise data patterns for intelligent automation.",
      capabilities: ["Natural language processing", "Context understanding", "Predictive insights"],
      color: "bg-blue-500/10 text-blue-600",
    },
    {
      icon: MessageSquare,
      title: "Conversational Interface",
      description: "Interact with your systems using natural language commands and queries.",
      capabilities: ["Voice commands", "Chat integration", "Multi-language support"],
      color: "bg-green-500/10 text-green-600",
    },
    {
      icon: Sparkles,
      title: "Smart Automation",
      description: "Automate complex workflows with intelligent prompt-driven processes.",
      capabilities: ["Workflow automation", "Smart triggers", "Dynamic responses"],
      color: "bg-purple-500/10 text-purple-600",
    },
    {
      icon: Target,
      title: "Precision Targeting",
      description: "Create highly specific prompts for accurate results and optimal performance.",
      capabilities: ["Template library", "Prompt optimization", "Result refinement"],
      color: "bg-orange-500/10 text-orange-600",
    },
  ];

  const promptExamples = [
    {
      category: "Data Analysis",
      prompt: "Analyze Q4 sales trends and identify top performing products by region",
      result: "Generated comprehensive dashboard with actionable insights",
    },
    {
      category: "Content Creation",
      prompt: "Create a professional proposal for enterprise cloud migration",
      result: "Produced detailed 20-page proposal with timeline and cost analysis",
    },
    {
      category: "Process Automation",
      prompt: "Set up automated customer onboarding workflow with personalization",
      result: "Implemented multi-step process reducing onboarding time by 70%",
    },
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="section-container">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-section-heading text-foreground">
            Master <span className="text-primary">Prompting</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Harness the power of advanced AI with intelligent prompting. Create, automate, 
            and optimize business processes using natural language commands.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {promptingFeatures.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="card-enterprise hover-lift group relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="space-y-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${feature.color} group-hover:scale-110 transition-all duration-300`}>
                  <feature.icon className="h-6 w-6" />
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
                  {feature.capabilities.map((capability) => (
                    <li key={capability} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      {capability}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Card>
          ))}
        </div>

        {/* Interactive Examples */}
        <div className="bg-background rounded-xl border border-border p-8 mb-12">
          <div className="text-center space-y-4 mb-8">
            <h3 className="text-2xl font-bold text-foreground">Prompt Examples</h3>
            <p className="text-muted-foreground">
              See how natural language commands translate into powerful business actions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {promptExamples.map((example, index) => (
              <div 
                key={example.category} 
                className="space-y-4 p-4 rounded-lg border border-border hover:border-primary/30 transition-all duration-300 hover-lift"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center space-x-2">
                  <Code2 className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-primary">{example.category}</span>
                </div>
                
                <div className="space-y-3">
                  <div className="p-3 bg-muted rounded-lg">
                    <p className="text-sm text-foreground font-medium mb-1">Prompt:</p>
                    <p className="text-sm text-muted-foreground italic">"{example.prompt}"</p>
                  </div>
                  
                  <div className="p-3 bg-primary/5 rounded-lg border border-primary/20">
                    <p className="text-sm text-foreground font-medium mb-1">Result:</p>
                    <p className="text-sm text-muted-foreground">{example.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-primary rounded-xl p-8 text-center text-white">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold">
              Ready to Master AI Prompting?
            </h3>
            <p className="text-white/90 max-w-2xl mx-auto text-lg">
              Join thousands of professionals who are transforming their workflows 
              with intelligent automation and AI-powered prompting.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-primary hover:bg-white/90 hover:-translate-y-0.5 transition-all duration-300 font-semibold">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300">
                View Documentation
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-8 text-sm text-white/80 mt-8">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>30-day free trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>Expert support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MasterPromptingSection;