import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { NavbarProps } from "@/types";

const MobileLinks = ({ pages }: Pick<NavbarProps, "pages">) => {
  return (
    <Sheet>
      <SheetTrigger className="p-4">
        <HamburgerMenuIcon width={24} height={24} />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          {pages.map((page) => (
            <SheetClose asChild key={page.pathName}>
              <a
                href={page.pathName}
                className="block p-4 text-base font-bold hover:bg-gray-200"
              >
                {page.name}
              </a>
            </SheetClose>
          ))}
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileLinks;
