import { Separator } from "@radix-ui/react-dropdown-menu";
import { TemplatesListSection } from "./sections/Template-list";

export const StructureSidebar = () => {
  return (
    <aside className="w-full h-full p-6 overflow-y-auto">
      <TemplatesListSection />
      <Separator className="my-5" />
    </aside>
  );
};
