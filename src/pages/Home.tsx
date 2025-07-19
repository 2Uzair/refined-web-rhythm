import Hero from '@/components/Hero';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Calendar, Users, Sparkles, Award } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <Calendar className="h-8 w-8 text-primary" />,
      title: "Event Planning",
      description: "Complete event planning services for any occasion"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Professional Team",
      description: "Experienced professionals dedicated to your perfect event"
    },
    {
      icon: <Sparkles className="h-8 w-8 text-primary" />,
      title: "Premium Products",
      description: "High-quality hire items for elegant celebrations"
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Award Winning",
      description: "Recognized for excellence in event services"
    }
  ];

  return (
    <div>
      <Hero />
      
      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-prestige text-4xl md:text-5xl font-bold text-primary mb-6">
              About Prestige Party & Co.
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We specialize in creating extraordinary events through premium hire services and 
              meticulous attention to detail. From intimate gatherings to grand celebrations, 
              we provide everything you need to make your event unforgettable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-elegant text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-prestige text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Create Your Perfect Event?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Browse our extensive catalogue of premium hire items or view our gallery 
            of stunning events we've helped create.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="btn-elegant">
              <Link to="/catalogue">Browse Catalogue</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;