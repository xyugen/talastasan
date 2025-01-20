import { navLinks } from "@/data/nav-links";
import { DialogTitle } from "@radix-ui/react-dialog";
import { ChevronDown, MenuIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import PageTransition from "../animations/page-transition";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";

const NavBar = () => {
  const pathname = usePathname();

  const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false);

  const { animatePageOut } = PageTransition();

  return (
    <>
      {/* Mobile */}
      <div className="flex flex-row items-center md:hidden">
        <Sheet
          open={isSheetOpen}
          onOpenChange={(isOpen) => {
            setIsSheetOpen(isOpen);
          }}
        >
          <SheetTrigger asChild>
            <Button size={"icon"} className="transition-colors hover:bg-accent px-4 h-10 rounded-full bg-accent/70 text-accent-foreground border border-primary/20">
              <MenuIcon />
            </Button>
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
                          <DropdownMenuItem key={item.title} asChild>
                            <button
                              className="w-full"
                              onClick={() => {
                                if (pathname !== item.link) {
                                  animatePageOut(item.link);
                                }
                                setIsSheetOpen(false);
                              }}
                            >
                              {item.title}
                            </button>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  );
                } else if (navLink.link) {
                  return (
                    <button
                      key={navLink.title}
                      className="text-left"
                      onClick={() => {
                        if (pathname !== navLink.link) {
                          animatePageOut(navLink.link);
                        }
                        setIsSheetOpen(false);
                      }}
                    >
                      <span className="relative after:absolute after:bg-primary after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:transition-all after:duration-300 hover:after:w-full">
                        {navLink.title}
                      </span>
                    </button>
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
                    <DropdownMenuItem key={item.title} asChild>
                      <button
                        className="w-full"
                        onClick={() => {
                          if (pathname !== item.link) {
                            animatePageOut(item.link);
                          }
                        }}
                      >
                        {item.title}
                      </button>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            );
          } else if (navLink.link) {
            return (
              <button
                key={navLink.title}
                onClick={() => {
                  if (pathname !== navLink.link) {
                    animatePageOut(navLink.link);
                  }
                }}
              >
                {navLink.title}
              </button>
            );
          }
        })}
      </nav>
    </>
  );
};

export default NavBar;
