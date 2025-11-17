import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ShoppingCart, Search, User, Menu } from "lucide-react"

export function Header() {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Menu className="h-6 w-6 md:hidden" />
          <h1 className="text-xl font-bold">ModernStores</h1>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Button variant="ghost">Home</Button>
          <Button variant="ghost">Shop</Button>
          <Button variant="ghost">Categories</Button>
          <Button variant="ghost">Deals</Button>
        </nav>

        {/* Search Bar */}
        <div className="hidden md:flex items-center gap-2 flex-1 max-w-md mx-8">
          <Search className="h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search products..." 
            className="flex-1"
          />
        </div>

        {/* User Actions */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Search className="h-4 w-4 md:hidden" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-4 w-4" />
            <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
              3
            </span>
          </Button>
        </div>
      </div>
    </header>
  )
}