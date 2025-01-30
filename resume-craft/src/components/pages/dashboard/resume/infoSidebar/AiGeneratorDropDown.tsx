import { Button } from "@/components/ui/button";
import { Bot } from "lucide-react";

export const AiGeneratorDropdown = () => {
  return (
    <Button className="px-2.5 h-9 py-1 gap-2 text-xs">
      <Bot size={20} />
      Inteligência artificial
    </Button>
  );
};
