import { Badge } from "@/components/ui/badge";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "@/app/[lang]/dictionaries";
import { ExternalLink } from "lucide-react";

export default async function Project({ lang }: { lang: "en" | "fr" }) {
  const t = await getDictionary(lang);
  const projects = [
    {
      id: 1,
      key: "brandIdentity",
      image: "/placeholder.png?height=300&width=400",
      link: "#",
    },
    {
      id: 2,
      key: "ecommerce",
      image: "/placeholder.png?height=300&width=400",
      link: "#",
    },
    {
      id: 3,
      key: "mobileApp",
      image: "/placeholder.png?height=300&width=400",
      link: "#",
    },
    {
      id: 4,
      key: "printCampaign",
      image: "/placeholder.png?height=300&width=400",
      link: "#",
    },
    {
      id: 5,
      key: "packaging",
      image: "/placeholder.png?height=300&width=400",
      link: "#",
    },
    {
      id: 6,
      key: "socialMedia",
      image: "/placeholder.png?height=300&width=400",
      link: "#",
    },
  ];
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="w-fit mx-auto">
            {t.portfolio.badge}
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t.portfolio.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-[600px] mx-auto">
            {t.portfolio.description}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const projectData =
              t.portfolio.projects[
                project.key as keyof typeof t.portfolio.projects
              ];
            return (
              <Card
                key={project.id}
                className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.png"}
                    alt={projectData.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
                <CardHeader className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {projectData.tags.map((tag: string) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {projectData.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {projectData.description}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                    asChild
                  >
                    <Link href={project.link}>
                      {t.portfolio.cta}
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
