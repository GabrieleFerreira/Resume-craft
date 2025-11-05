import { Separator } from "@/components/ui/separator";
import { LanguageSection } from "./sections/Language";
import { LayoutSection } from "./sections/layout";
import { TemplatesListSection } from "./sections/Template-list";
import { ThemeSection } from "./sections/Theme";

export const StructureSidebar = () => {
  return (
    <aside className="w-full h-full p-6 overflow-y-auto">
      <TemplatesListSection />
      <Separator className="my-5" />
      <LayoutSection />
      <Separator className="my-5" />
      <ThemeSection />

      <Separator className="my-5" />
      <LanguageSection />
    </aside>
  );
};
