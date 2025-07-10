import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { MapPin, Linkedin, Instagram, Facebook } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getDictionary } from "@/app/[lang]/dictionaries";

export default async function Hero({ lang }: { lang: "en" | "fr" }) {
  const t = await getDictionary(lang);
  return (
    <section className="relative py-20 px-4 md:py-32 lg:py-40 ">
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <Badge variant="outline" className="w-fit">
                {t.hero.badge}
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-primary">
                {t.hero.title}
                <span className="block text-primary">
                  {t.hero.titleHighlight}
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-[600px]">
                {t.hero.description}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="w-fit">
                <Mail className="mr-2 h-4 w-4" />
                {t.hero.cta.contact}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-fit bg-transparent"
              >
                {t.hero.cta.viewWork}
              </Button>
            </div>
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                {t.hero.location}
              </div>
              <div className="flex items-center gap-4">
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 p-8">
              <Image
                src="/placeholder.png?height=500&width=500"
                alt={t.common.altTexts.designerPortrait}
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-background border rounded-xl p-4 shadow-lg">
              <div className="text-2xl font-bold">50+</div>
              <div className="text-sm text-muted-foreground">
                {t.hero.stats.projects}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
