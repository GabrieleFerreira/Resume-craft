import Link from "next/link";
import { ResumeCardButton } from "./ResumeCardButton";

export const ResumeCard = () => {
  return (
    <Link href={"/dashboard/resumes/example"} className="block w-full">
      <ResumeCardButton
        title="Meu Currículo"
        description="Última atualização há 22 minutos"
      />
    </Link>
  );
};
