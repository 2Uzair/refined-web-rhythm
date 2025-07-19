import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Eye } from 'lucide-react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Sample gallery items - in a real app, this would come from a database
  const galleryItems = [
    {
      id: 1,
      title: "Elegant Wedding Reception",
      category: "Weddings",
      image: "/api/placeholder/400/300",
      description: "A stunning wedding reception with crystal chandeliers and gold accents"
    },
    {
      id: 2,
      title: "Corporate Gala Event",
      category: "Corporate",
      image: "/api/placeholder/400/300",
      description: "Professional corporate event with modern lighting and sleek design"
    },
    {
      id: 3,
      title: "Birthday Celebration",
      category: "Private Parties",
      image: "/api/placeholder/400/300",
      description: "Vibrant birthday party setup with colorful decorations"
    },
    {
      id: 4,
      title: "Garden Party Setup",
      category: "Outdoor Events",
      image: "/api/placeholder/400/300",
      description: "Beautiful outdoor garden party with natural elements"
    },
    {
      id: 5,
      title: "Luxury Anniversary Dinner",
      category: "Private Parties",
      image: "/api/placeholder/400/300",
      description: "Intimate anniversary dinner with romantic lighting"
    },
    {
      id: 6,
      title: "Charity Fundraiser",
      category: "Corporate",
      image: "/api/placeholder/400/300",
      description: "Elegant fundraising event with sophisticated decor"
    },
    {
      id: 7,
      title: "Beach Wedding Ceremony",
      category: "Weddings",
      image: "/api/placeholder/400/300",
      description: "Romantic beach wedding with coastal-themed decorations"
    },
    {
      id: 8,
      title: "Product Launch Event",
      category: "Corporate",
      image: "/api/placeholder/400/300",
      description: "Modern product launch with interactive displays"
    }
  ];

  const categories = ['All', ...new Set(galleryItems.map(item => item.category))];

  const filteredItems = selectedCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-prestige text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Gallery
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our portfolio of stunning events and see how we transform 
            visions into unforgettable experiences.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className="cursor-pointer px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid-gallery mb-12">
          {filteredItems.map((item) => (
            <Card key={item.id} className="card-elegant overflow-hidden group">
              <div className="relative aspect-square bg-muted overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="secondary" size="sm" className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <Eye className="h-4 w-4 mr-2" />
                    View Details
                  </Button>
                </div>
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-white/90 text-primary">
                    {item.category}
                  </Badge>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-secondary text-secondary-foreground">
            <div className="p-8">
              <h3 className="font-prestige text-2xl font-bold mb-4">
                Ready to Create Your Own Memorable Event?
              </h3>
              <p className="mb-6">
                Let's work together to bring your vision to life. Contact us to discuss 
                your event requirements and see how we can make it extraordinary.
              </p>
              <Button variant="outline" size="lg" className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">
                Start Planning Today
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Gallery;