import { ReactNode } from "react";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  Dialog as DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "./primitive";

export type BaseDialogProps = {
  open?: boolean;
  setOpen?: (open: boolean) => void;
  children: ReactNode;
};

type DialogProps = BaseDialogProps & {
  title: string;
  description?: string;
  content: ReactNode;
};
export const Dialog = ({
  children,
  content,
  title,
  description,
  open,
  setOpen,
}: DialogProps) => {
  return (
    <DialogRoot open={open} onOpenChange={setOpen}>
      {children && <DialogTrigger asChild>{children}</DialogTrigger>}

      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        {content}
      </DialogContent>
    </DialogRoot>
  );
};
