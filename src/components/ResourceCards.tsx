import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Users, BookOpen, Play, Briefcase } from "lucide-react";

const resources = [
  {
    title: "Online Course",
    description: "Self-paced online course for educators and program staff",
    icon: GraduationCap,
    action: "Enroll",
  },
  {
    title: "Facilitator's Guide",
    description: "Resources for workshop facilitators and trainers",
    icon: Users,
    action: "Access",
  },
  {
    title: "Reader's Guides",
    description: "Chapter summaries and discussion questions",
    icon: BookOpen,
    action: "Explore",
  },
  {
    title: "Podcasts and Videos",
    description: "Video tutorials and expert presentations",
    icon: Play,
    action: "Watch",
  },
  {
    title: "Literature Review",
    description: "Summaries of research that informed the Guidance",
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
                className="hover:shadow-lg transition-all hover:scale-105 duration-300 flex flex-col"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg min-h-[3.5rem] flex items-center justify-center">{resource.title}</h3>
                </CardHeader>
                <CardContent className="text-center pb-4 flex-grow">
                  <p className="text-sm text-muted-foreground min-h-[4rem]">{resource.description}</p>
                </CardContent>
                <CardFooter className="justify-center mt-auto">
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
