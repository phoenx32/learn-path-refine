import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="w-full">
      {/* Top bar with logo and search */}
      <div className="bg-[hsl(var(--header-bg))] text-white">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img 
                src="https://otan.us/images/otan-logo.png" 
                alt="OTAN Logo" 
                className="h-12 w-auto"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div>
                <div className="font-bold text-xl">OTAN</div>
                <div className="text-xs opacity-90">Outreach and Technical Assistance Network</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative hidden md:flex items-center">
                <Input
                  type="search"
                  placeholder="Search..."
                  className="bg-white text-foreground w-64"
                />
                <Search className="absolute right-3 h-4 w-4 text-muted-foreground" />
              </div>
              <Button variant="ghost" className="text-white hover:bg-white/10">
                Join OTAN / Login
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation bar */}
      <nav className="bg-[hsl(var(--header-nav))] text-white">
        <div className="container mx-auto px-4">
          <ul className="flex items-center gap-6 py-3 text-sm">
            <li>
              <a href="/" className="hover:text-primary-foreground transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-primary-foreground transition-colors">
                Professional Development
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-primary-foreground transition-colors font-semibold">
                Resources
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-primary-foreground transition-colors">
                Stay Connected
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-primary-foreground transition-colors">
                Video Presentations
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="bg-secondary border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <a href="/" className="hover:text-primary transition-colors">Home</a>
            <span>/</span>
            <a href="/resources" className="hover:text-primary transition-colors">Resources</a>
            <span>/</span>
            <span className="text-foreground font-medium">Digital Learning Guidance</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
