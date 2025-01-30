import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, SquareUser } from "lucide-react";
import Link from "next/link";

export const Userdropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"ghost"} className=" w-full gap-2 justify-start px-2">
          <Avatar className="size-7 block">
            <AvatarImage src="https://github.com/gabrieleferreira.png" />
            <AvatarFallback>GF</AvatarFallback>
          </Avatar>
          <p>Gabriele Iara</p>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="center"
        className="w-[var(--radix-dropdown-menu-trigger-width)]"
      >
        <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
        <Link passHref href="/dashboard/account" className="cursor-pointer">
          <DropdownMenuItem className=" gap-2">
            <SquareUser size={16} />
            Configurações de Conta
          </DropdownMenuItem>
        </Link>

        <DropdownMenuItem className=" gap-2  text-red-500">
          <LogOut size={16} />
          Sair
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
