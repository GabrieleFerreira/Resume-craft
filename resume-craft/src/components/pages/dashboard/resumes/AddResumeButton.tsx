import { Plus } from "lucide-react";
import { ResumeCardButton } from "./resumes-list/ResumeCardButton";

export const AddResumeButton = () => {
  return (
    <ResumeCardButton
      title="Criar novo currículo"
      description="Comece do zero"
      icon={<Plus size={50} />}
    />
  );
};
