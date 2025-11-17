import { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section className="container mx-auto px-4 py-12">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
    {products.map((product) => (
      <Card key={product.id} className="group cursor-pointer overflow-hidden border shadow-sm hover:shadow-md transition-all duration-300">
        <CardContent className="p-0">
          {/* Image Section */}
          <div className="relative overflow-hidden">
            <img 
              src={product.image} 
              alt={product.title}
              className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Content Section */}
          <div className="p-4 space-y-3">
            {/* Title */}
            <h3 className="font-semibold text-lg text-center group-hover:text-primary transition-colors">
              {product.title}
            </h3>

            {/* Description */}
            <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">
              {product.description}
            </p>

            {/* Price */}
            <p className="text-2xl font-bold text-foreground">
              Ksh {product.price}
            </p>

            {/* Button */}
            <Button variant="secondary" className="w-full">
              Add to Cart
            </Button>
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
</section>
  );
}
