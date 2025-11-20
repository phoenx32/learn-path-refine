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
    <section className="bg-muted py-20 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            The 2025 Digital Learning Guidance
          </h1>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            The 2025 California Adult Education Digital Learning Guidance offers updated 
            strategies, examples, and frameworks for digital teaching and learning.
          </p>
          
          {/* Elevated CTA Card */}
          <div className="bg-background shadow-xl rounded-xl p-8 md:p-10 max-w-2xl mx-auto">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="lg" className="gap-2 h-14 px-10 text-base mb-4 w-full md:w-auto">
                  <BookOpen className="h-5 w-5" />
                  Read Online
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-[400px]">
                {chapters.map((chapter) => (
                  <DropdownMenuItem key={chapter.number} asChild>
                    <a href={`#chapter-${chapter.number}`} className="cursor-pointer">
                      Chapter {chapter.number}: {chapter.title}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto">
                <FileDown className="h-5 w-5" />
                Download PDF
              </Button>
              <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto" asChild>
                <a href="#">
                  <Archive className="h-5 w-5" />
                  View 2022 Version
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
