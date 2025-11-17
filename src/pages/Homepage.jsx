import { Header } from "@/components/layout/Header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import  {Input} from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Star, Truck, Shield, Clock } from "lucide-react"

export function Homepage() {
  const featuredProducts = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: "$299.99",
      image: "/api/placeholder/300/300",
      rating: 4.5,
      isNew: true
    },
    {
      id: 2,
      name: "Smart Watch",
      price: "$199.99",
      image: "/api/placeholder/300/300",
      rating: 4.2,
      isNew: false
    },
    {
      id: 3,
      name: "Camera Lens",
      price: "$449.99",
      image: "/api/placeholder/300/300",
      rating: 4.8,
      isNew: true
    },
    {
      id: 4,
      name: "Gaming Keyboard",
      price: "$129.99",
      image: "/api/placeholder/300/300",
      rating: 4.3,
      isNew: false
    }
  ]

  const features = [
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Free Shipping",
      description: "On orders over $50"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Secure Payment",
      description: "100% secure payment"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "24/7 Support",
      description: "Dedicated support"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-2xl">
            <Badge variant="secondary" className="mb-4">Summer Sale</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              New Collection 2025
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Discover our latest products with up to 50% off. Limited time offer!
            </p>
            <div className="flex gap-4">
              <Button size="lg" variant="secondary">
                Shop Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4 text-primary">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
            <p className="text-muted-foreground text-lg">
              Check out our most popular products
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group cursor-pointer">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.isNew && (
                      <Badge className="absolute top-2 left-2">New</Badge>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">{product.name}</h3>
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating) 
                              ? "fill-yellow-400 text-yellow-400" 
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                      <span className="text-sm text-muted-foreground ml-2">
                        ({product.rating})
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold">{product.price}</span>
                      <Button size="sm">Add to Cart</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View All Products <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-lg mb-8 opacity-90">
            Get the latest updates on new products and upcoming sales
          </p>
          <div className="flex max-w-md mx-auto gap-2">
            <Input 
              placeholder="Enter your email" 
              className="flex-1 bg-background text-foreground"
            />
            <Button variant="secondary">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  )
}