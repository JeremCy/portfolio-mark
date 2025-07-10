import Hero from "@/components/layout/hero";
import Project from "@/components/layout/project";
import { Contact } from "lucide-react";
export default async function Page({
  params,
}: {
  params: Promise<{ lang: "en" | "fr" }>;
}) {
  const { lang } = await params;
  return (
    <div className="min-h-screen bg-background">
      <Hero lang={lang} />
      <Project lang={lang} />
      <Contact lang={lang} />
    </div>
  );
}
