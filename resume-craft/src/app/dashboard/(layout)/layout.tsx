import Logo from "@/assets/logo.svg";
import { NavITens } from "@/components/pages/dashboard/NavItens";
import { Userdropdown } from "@/components/pages/dashboard/UserDropdown";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { ReactNode } from "react";

type DashboardlayoutProps = {
  children: ReactNode;
};
export default function Dashboardlayout({ children }: DashboardlayoutProps) {
  return (
    <div className="w-full h-screen overflow-hidden grid grid-cols-[300px,1fr]">
      <aside className="w-full h-full flex flex-col items-center border-r border-muted">
        <div className=" w-full p-6 border-muted border-b ">
          <Logo className="max-w-[100px] mx-auto " />
        </div>
        <NavITens />
        <div className=" w-full mt-auto border-t border-muted px-3 py-4 flex items-center justify-between gap-2">
          <Userdropdown />
          <ThemeToggle />
        </div>
      </aside>

      <main className="p-6 flex flex-col w-full h-full overflow-auto ">
        {children}
      </main>
    </div>
  );
}
