import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-image.jpg';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Elegant event setup"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="font-prestige text-5xl md:text-7xl font-bold mb-6 fade-in-up">
          <span className="block">Prestige</span>
          <span className="font-poppins text-secondary text-4xl md:text-5xl">
            Party & Co.
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-white/90 fade-in-delay">
          Creating unforgettable events with elegant style and premium hire services
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-delay-2">
          <Button asChild size="lg" className="btn-hero">
            <Link to="/catalogue">View Our Catalogue</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
            <Link to="/gallery">See Our Work</Link>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-12 bg-white/50 rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;