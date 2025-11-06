import { Button } from "@/components/ui/button";
import { FileDown, BookOpen, Compass } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            The 2025 Digital Learning Guidance
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            The 2025 California Adult Education Digital Learning Guidance offers updated 
            strategies, examples, and frameworks for digital teaching and learning.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="gap-2">
              <BookOpen className="h-5 w-5" />
              Read Online
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <FileDown className="h-5 w-5" />
              Download PDF
            </Button>
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <a href="#key-resources">
                <Compass className="h-5 w-5" />
                Explore PD Resources
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
