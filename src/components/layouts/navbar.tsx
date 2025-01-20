import { navLinks } from "@/data/nav-links";
import { DialogTitle } from "@radix-ui/react-dialog";
import { ChevronDown, MenuIcon } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

const NavBar = () => {
  return (
    <>
      {/* Mobile */}
      <div className="flex flex-row items-center md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <button className="transition-colors hover:bg-accent px-4 h-10 rounded-full bg-accent/70 text-accent-foreground border border-primary/20">
              <MenuIcon />
            </button>
          </SheetTrigger>
          <SheetContent>
            <div className="mt-8 flex flex-col space-y-4">
              {navLinks.map((navLink) => {
                if (navLink.items && navLink.items.length > 0) {
                  return (
                    <DropdownMenu key={navLink.title}>
                      <DropdownMenuTrigger className="text-left w-fit">
                        <span className="relative after:absolute after:bg-primary after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:transition-all after:duration-300 hover:after:w-full">
                          {navLink.title}{" "}
                          <ChevronDown className="size-4 inline" />
                        </span>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DialogTitle className="sr-only">
                          {navLink.title} Items
                        </DialogTitle>
                        {navLink.items.map((item) => (
                          <DropdownMenuItem key={item.title}>
                            {item.title}
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  );
                } else if (navLink.link) {
                  return (
                    <Link
                      key={navLink.title}
                      href={navLink.link}
                      className="w-fit"
                    >
                      <span className="relative after:absolute after:bg-primary after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:transition-all after:duration-300 hover:after:w-full">
                        {navLink.title}
                      </span>
                    </Link>
                  );
                }
              })}
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop */}
      <nav className="transition-colors hover:bg-accent hidden flex-row gap-8 items-center md:flex px-4 h-10 rounded-full bg-accent/70 text-accent-foreground border border-primary/20">
        {navLinks.map((navLink) => {
          if (navLink.items && navLink.items.length > 0) {
            return (
              <DropdownMenu key={navLink.title}>
                <DropdownMenuTrigger asChild>
                  <button className="flex flex-row gap-2">
                    {navLink.title} <ChevronDown />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel className="sr-only">
                    Talatuntunan
                  </DropdownMenuLabel>
                  {navLink.items.map((item) => (
                    <DropdownMenuItem key={item.title}>
                      <Link href={navLink.link + item.link}>{item.title}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            );
          } else if (navLink.link) {
            return (
              <Link key={navLink.title} href={navLink.link}>
                {navLink.title}
              </Link>
            );
          }
        })}
      </nav>
    </>
  );
};

export default NavBar;
