import Link from "next/link";
import { Linkedin, Instagram, Dribbble } from "lucide-react";
import { getDictionary } from "@/app/[lang]/dictionaries";

export default async function Footer({ lang }: { lang: "en" | "fr" }) {
  const t = await getDictionary(lang);
  return (
    <footer className="border-t py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">{t.footer.copyright}</p>
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
              <Dribbble className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
