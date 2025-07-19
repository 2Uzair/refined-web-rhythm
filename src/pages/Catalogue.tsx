import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const Catalogue = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Sample catalogue items - in a real app, this would come from a database
  const catalogueItems = [
    {
      id: 1,
      name: "Crystal Chandeliers",
      description: "Elegant crystal chandeliers to add sophistication to any venue",
      price: "$150/day",
      category: "Lighting",
      image: "/api/placeholder/400/300"
    },
    {
      id: 2,
      name: "Gold Chiavari Chairs",
      description: "Luxurious gold chairs perfect for upscale events",
      price: "$8/chair",
      category: "Seating",
      image: "/api/placeholder/400/300"
    },
    {
      id: 3,
      name: "Vintage Table Settings",
      description: "Complete vintage-style table settings for intimate dining",
      price: "$25/setting",
      category: "Tableware",
      image: "/api/placeholder/400/300"
    },
    {
      id: 4,
      name: "LED Dance Floor",
      description: "Interactive LED dance floor to light up your celebration",
      price: "$300/day",
      category: "Entertainment",
      image: "/api/placeholder/400/300"
    },
    {
      id: 5,
      name: "Floral Centerpieces",
      description: "Bespoke floral arrangements for table centerpieces",
      price: "$45/piece",
      category: "Decor",
      image: "/api/placeholder/400/300"
    },
    {
      id: 6,
      name: "Photo Booth Props",
      description: "Fun and elegant photo booth props for memorable photos",
      price: "$80/day",
      category: "Entertainment",
      image: "/api/placeholder/400/300"
    }
  ];

  const filteredItems = catalogueItems.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = [...new Set(catalogueItems.map(item => item.category))];

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-prestige text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Catalogue
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover our extensive collection of premium hire items, carefully selected 
            to make your event truly exceptional.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search items or categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
              All
            </Badge>
            {categories.map((category) => (
              <Badge 
                key={category}
                variant="outline" 
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Catalogue Grid */}
        <div className="grid-products mb-12">
          {filteredItems.map((item) => (
            <Card key={item.id} className="card-elegant overflow-hidden">
              <div className="aspect-square bg-muted">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <Badge variant="secondary">{item.category}</Badge>
                </div>
                <p className="text-muted-foreground mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-primary text-lg">{item.price}</span>
                  <Button size="sm" className="btn-hero">
                    Enquire Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-primary text-primary-foreground">
            <CardContent className="p-8">
              <h3 className="font-prestige text-2xl font-bold mb-4">
                Can't Find What You're Looking For?
              </h3>
              <p className="mb-6">
                We have an extensive inventory beyond what's shown here. 
                Contact us for custom requests and bespoke solutions.
              </p>
              <Button variant="secondary" size="lg" className="btn-elegant">
                Contact Us Today
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Catalogue;