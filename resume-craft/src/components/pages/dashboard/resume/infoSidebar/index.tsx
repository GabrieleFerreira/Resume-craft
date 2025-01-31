import Logo from "@/assets/logo.svg";

import { Separator } from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
import { AiGeneratorDropdown } from "./AiGeneratorDropDown";
import { BasicInfoSection } from "./sections/BasicInfo";
import { SummarySection } from "./sections/Summary";
export const InfoSidebar = () => (
  <aside className="w-full h-full p-6 overflow-y-auto">
    <div className="w-full flex items-center justify-between">
      <Link href="/dashboard/resumes">
        <Logo className="w-full max-w-[80px]" />
      </Link>
      <AiGeneratorDropdown />
    </div>
    <Separator className="my-5" />
    <BasicInfoSection />
    <Separator className="my-5" />
    <SummarySection />
  </aside>
);
