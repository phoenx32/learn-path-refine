import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FileDown, BookOpen, Archive, ChevronDown } from "lucide-react";

const chapters = [
  { number: 1, title: "Introduction" },
  { number: 2, title: "Ensuring Equity and Access" },
  { number: 3, title: "Foundations of Adult Education and Digital Learning" },
  { number: 4, title: "Digital Learning Tools" },
  { number: 5, title: "Adopting Models that Work" },
  { number: 6, title: "Data-Driven Instruction and Digital Assessments" },
  { number: 7, title: "Fostering Healthy, Equitable, and Inclusive Digital Communities" },
  { number: 8, title: "Artificial Intelligence" },
];

const HeroSection = () => {
  return (
    <section className="bg-muted py-16">
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
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="lg" className="gap-2">
                  <BookOpen className="h-5 w-5" />
                  Read Online
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-[400px]">
                {chapters.map((chapter) => (
                  <DropdownMenuItem key={chapter.number} asChild>
                    <a href={`#chapter-${chapter.number}`} className="cursor-pointer">
                      Chapter {chapter.number}: {chapter.title}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Button size="lg" variant="outline" className="gap-2">
              <FileDown className="h-5 w-5" />
              Download PDF
            </Button>
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <a href="#">
                <Archive className="h-5 w-5" />
                View 2022 Version
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
