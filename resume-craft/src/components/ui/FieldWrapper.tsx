import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { Label } from "./label";

type FieldWrapperProps = {
  label: string;
  children: ReactNode;
  className?: string;
};
export const FieldWrapper = ({
  children,
  label,
  className,
}: FieldWrapperProps) => {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <Label>{label}</Label>
      {children}
    </div>
  );
};
