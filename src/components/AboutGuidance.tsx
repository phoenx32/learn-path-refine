import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Users, BookMarked } from "lucide-react";

const aboutLinks = [
  {
    title: "About the Guidance",
    description: "Learn about the project's mission and goals",
    icon: FileText,
    href: "#about",
  },
  {
    title: "Acknowledgments",
    description: "Contributors and partners",
    icon: Users,
    href: "#acknowledgments",
  },
  {
    title: "Foreword",
    description: "Introduction from project leadership",
    icon: BookMarked,
    href: "#foreword",
  },
];

const AboutGuidance = () => {
  return (
    <section className="py-8 bg-background">
      <div className="container mx-auto px-4">
        <h3 className="text-xl font-semibold text-foreground mb-4">Project Background</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {aboutLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Card 
                key={link.title}
                className="hover:shadow-md transition-all duration-300 border-muted"
              >
                <a href={link.href} className="block p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">{link.title}</h4>
                      <p className="text-xs text-muted-foreground">{link.description}</p>
                    </div>
                  </div>
                </a>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutGuidance;
