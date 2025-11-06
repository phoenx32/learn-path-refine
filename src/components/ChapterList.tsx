import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const chapters = [
  { number: 1, title: "Introduction" },
  { number: 2, title: "Ensuring Equity and Access" },
  { number: 3, title: "Foundations of Adult Education and Digital Learning" },
  { number: 4, title: "Designing Flexible Learning Experiences" },
  { number: 5, title: "Adopting Models that Work" },
  { number: 6, title: "Data-Driven Instruction and Digital Assessments" },
  { number: 7, title: "Fostering Healthy, Equitable, and Inclusive Digital Co-learning" },
  { number: 8, title: "Artificial Intelligence" },
];

const ChapterList = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-foreground mb-8">Quick Access</h2>
        <Card className="overflow-hidden">
          <div className="divide-y divide-border">
            {chapters.map((chapter) => (
              <div 
                key={chapter.number} 
                className="flex items-center justify-between p-4 hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="font-semibold text-muted-foreground">
                    Chapter {chapter.number}
                  </span>
                  <span className="text-foreground">{chapter.title}</span>
                </div>
                <Button size="sm">Read</Button>
              </div>
            ))}
          </div>
        </Card>
        
        <div className="mt-4 text-center">
          <a 
            href="#glossary" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors underline inline-flex items-center gap-1"
          >
            See Key Terms & Glossary
          </a>
        </div>
      </div>
    </section>
  );
};

export default ChapterList;
