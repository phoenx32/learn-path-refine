import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Users, BookOpen, Play, Briefcase } from "lucide-react";

const resources = [
  {
    title: "Take the Course",
    description: "Complete the full Digital Learning Guidance course",
    icon: GraduationCap,
    action: "Enroll",
  },
  {
    title: "Facilitator's Guide",
    description: "Resources for workshop facilitators and trainers",
    icon: Users,
    action: "Explore",
  },
  {
    title: "Reader's Guides",
    description: "Chapter summaries and discussion questions",
    icon: BookOpen,
    action: "Read",
  },
  {
    title: "Videos",
    description: "Video tutorials and expert presentations",
    icon: Play,
    action: "Watch",
  },
  {
    title: "Training Materials",
    description: "Downloadable resources and templates",
    icon: Briefcase,
    action: "Browse",
  },
];

const ResourceCards = () => {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-foreground mb-8">Explore Key Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {resources.map((resource) => {
            const Icon = resource.icon;
            return (
              <Card 
                key={resource.title}
                className="hover:shadow-lg transition-all hover:scale-105 duration-300"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{resource.title}</h3>
                </CardHeader>
                <CardContent className="text-center pb-4">
                  <p className="text-sm text-muted-foreground">{resource.description}</p>
                </CardContent>
                <CardFooter className="justify-center">
                  <Button className="w-full">{resource.action}</Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResourceCards;
