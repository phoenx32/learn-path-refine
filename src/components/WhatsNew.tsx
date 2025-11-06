import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const WhatsNew = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <Card className="bg-primary/5 border-primary/20">
          <div className="p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  What's New in the 2025 Edition?
                </h2>
                <p className="text-muted-foreground">
                  Updated chapters on artificial intelligence, UDL, and other emerging 
                  technologies to support digital age teaching and learning.
                </p>
              </div>
            </div>
            <Button size="lg" variant="default" className="whitespace-nowrap">
              See Full Changelog
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default WhatsNew;
