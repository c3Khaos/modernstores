import { Button } from "@/components/ui/button"
import { ShoppingCart, Search, User, Menu } from "lucide-react"
import { Link } from "react-router-dom"

export function Header() {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <h1 className="text-xl font-bold hover:text-primary transition-colors">ModernStores</h1>
          </Link>
        </div>

        {/* Navigation - Hidden on mobile */}
        <nav className="hidden md:flex items-center gap-2">
          <Link to="/products">
            <Button variant="ghost" className="hover:bg-accent">Shop</Button>
          </Link>
          <Link to="/categories">
            <Button variant="ghost" className="hover:bg-accent">Categories</Button>
          </Link>
          <Link to="/deals">
            <Button variant="ghost" className="hover:bg-accent">Deals</Button>
          </Link>
          <Link to="/about">
            <Button variant="ghost" className="hover:bg-accent">About</Button>
          </Link>
        </nav>

       

        {/* User Actions */}
        <div className="flex items-center gap-2">
          
          {/* Search Icon - Mobile only */}
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Search className="h-4 w-4" />
          </Button>

          {/* User Account */}
          <Button variant="ghost" size="icon">
            <User className="h-4 w-4" />
          </Button>

          {/* Shopping Cart */}
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-4 w-4" />
            <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-medium">
              3
            </span>
          </Button>

          {/* Mobile Menu */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  )
}