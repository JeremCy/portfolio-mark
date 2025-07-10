import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";
import { getDictionary } from "@/app/[lang]/dictionaries";

export async function Contact({ lang }: { lang: "en" | "fr" }) {
  const t = await getDictionary(lang);
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="space-y-6">
          <Badge variant="outline" className="w-fit mx-auto">
            {t.contact.badge}
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t.contact.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-[600px] mx-auto">
            {t.contact.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg">
              <Mail className="mr-2 h-4 w-4" />
              {t.contact.email}
            </Button>
            <Button variant="outline" size="lg">
              <Phone className="mr-2 h-4 w-4" />
              {t.contact.phone}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
