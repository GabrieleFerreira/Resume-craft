import { Editor } from "@/components/ui/editor";
import { ScrollText } from "lucide-react";
import { Controller, useFormContext } from "react-hook-form";
import { SectionTitle } from "../SectionTitle";

export const SummarySection = () => {
  const { control } = useFormContext();
  return (
    <div>
      <SectionTitle title="Sobre Você" icon={ScrollText} />
      <Controller
        control={control}
        name="content.summary"
        render={({ field }) => (
          <Editor {...field} className="min-h-[200px] max-h-[300px] pt-4" />
        )}
      />
    </div>
  );
};
