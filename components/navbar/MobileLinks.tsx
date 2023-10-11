import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
  SheetDescription,
} from "@/components/ui/sheet";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { NavbarProps } from "@/types";

const MobileLinks = ({ pages }: Pick<NavbarProps, "pages">) => {
  return (
    <Sheet>
      <SheetTrigger
        className="p-4"
        role="button"
        aria-roledescription="open menu"
        aria-label="menu"
      >
        <HamburgerMenuIcon width={24} height={24} />
      </SheetTrigger>
      <SheetContent side="left" role="menubar">
        <SheetDescription>
          {pages.map((page) => (
            <SheetClose asChild key={page.pathName} role="menuitem">
              <a
                href={page.pathName}
                className="block p-4 text-base font-bold hover:bg-gray-200"
              >
                {page.name}
              </a>
            </SheetClose>
          ))}
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileLinks;
