const ClientsSection = () => {
  const clients = [
    { name: "Microsoft", logo: "MS" },
    { name: "Amazon", logo: "AM" },
    { name: "Google", logo: "GO" },
    { name: "Apple", logo: "AP" },
    { name: "Tesla", logo: "TE" },
    { name: "Netflix", logo: "NF" },
    { name: "Spotify", logo: "SP" },
    { name: "Adobe", logo: "AD" },
  ];

  const testimonials = [
    {
      quote: "This platform has transformed our operations. The scalability and reliability are exactly what we needed for our global infrastructure.",
      author: "Sarah Chen",
      title: "CTO, Global Tech Solutions",
      company: "Microsoft",
    },
    {
      quote: "The AI-powered analytics have given us insights we never had before. ROI was evident within the first quarter of implementation.",
      author: "Michael Rodriguez",
      title: "VP of Engineering",
      company: "Tesla",
    },
    {
      quote: "Outstanding support and enterprise-grade security. Perfect for our compliance requirements and global deployment needs.",
      author: "Emily Watson",
      title: "Chief Data Officer",
      company: "Netflix",
    },
  ];

  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-section-heading text-foreground">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-muted-foreground">
            Join thousands of companies that rely on our platform daily
          </p>
        </div>

        {/* Client Logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 mb-16">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex items-center justify-center p-6 border border-border rounded-lg hover:border-primary/50 transition-colors group"
            >
              <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <span className="text-lg font-bold text-muted-foreground group-hover:text-primary">
                  {client.logo}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-enterprise">
              <div className="space-y-4">
                <div className="flex items-center space-x-1 text-primary">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                <blockquote className="text-foreground italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="space-y-1">
                  <div className="font-semibold text-foreground">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.title}
                  </div>
                  <div className="text-sm text-primary font-medium">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;