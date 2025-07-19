import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data to a server
    toast({
      title: "Message Sent!",
      description: "Thank you for your enquiry. We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      content: "(555) 123-4567",
      description: "Call us during business hours"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      content: "hello@prestigeparty.com",
      description: "Send us an email anytime"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Address",
      content: "123 Event Street, Party City, PC 12345",
      description: "Visit our showroom by appointment"
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Business Hours",
      content: "Mon-Fri: 9AM-6PM, Sat: 10AM-4PM",
      description: "Closed Sundays"
    }
  ];

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-prestige text-4xl md:text-5xl font-bold text-primary mb-6">
            Contact Us
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to start planning your perfect event? Get in touch with our team 
            to discuss your requirements and receive a personalized quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="card-elegant">
            <CardHeader>
              <CardTitle className="font-prestige text-2xl">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your event requirements, date, guest count, and any specific needs..."
                    className="mt-1"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full btn-hero">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="card-elegant">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{info.title}</h3>
                      <p className="text-primary font-medium mb-1">{info.content}</p>
                      <p className="text-muted-foreground text-sm">{info.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Map Placeholder */}
            <Card className="card-elegant overflow-hidden">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Interactive Map</p>
                  <p className="text-sm text-muted-foreground">123 Event Street, Party City</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="font-prestige text-3xl font-bold text-center text-primary mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="card-elegant">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">How far in advance should I book?</h3>
                <p className="text-muted-foreground">
                  We recommend booking 4-6 weeks in advance for most events, though we can often 
                  accommodate shorter notice for smaller gatherings.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-elegant">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">Do you provide setup and breakdown?</h3>
                <p className="text-muted-foreground">
                  Yes! All our hire packages include professional setup and breakdown services 
                  to ensure your event runs smoothly.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-elegant">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">What areas do you serve?</h3>
                <p className="text-muted-foreground">
                  We service the greater metropolitan area within a 50-mile radius. 
                  Contact us for specific location availability.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-elegant">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">Can I customize my package?</h3>
                <p className="text-muted-foreground">
                  Absolutely! We specialize in creating bespoke packages tailored to your 
                  specific event needs and budget.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;