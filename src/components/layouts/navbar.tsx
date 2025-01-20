import { navLinks } from "@/data/nav-links";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

const NavBar = () => {
  return (
    <>
      {/* Mobile */}
      <div className="flex flex-row items-center md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <button>
              <MenuIcon />
            </button>
          </SheetTrigger>
          <SheetContent>
            <div className="mt-8 flex flex-col space-y-4">
              {navLinks.map((navLink) => {
                if (navLink.items && navLink.items.length > 0) {
                  return (
                    <DropdownMenu key={navLink.title}>
                      <DropdownMenuTrigger className="text-left">
                        {navLink.title}
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
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
                      legacyBehavior
                      passHref
                    >
                      {navLink.title}
                    </Link>
                  );
                }
              })}
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop */}
      <NavigationMenu className="hidden flex-row items-center md:flex">
        <NavigationMenuList>
          {navLinks.map((navLink) => {
            if (navLink.items && navLink.items.length > 0) {
              return (
                <NavigationMenuItem key={navLink.title}>
                  <NavigationMenuTrigger>{navLink.title}</NavigationMenuTrigger>
                  <NavigationMenuContent className="p-4">
                    {navLink.items.map((item) => (
                      <Link
                        key={item.title}
                        href={item.link}
                        legacyBehavior
                        passHref
                      >
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                        >
                          {item.title}
                        </NavigationMenuLink>
                      </Link>
                    ))}
                  </NavigationMenuContent>
                </NavigationMenuItem>
              );
            } else if (navLink.link) {
              return (
                <Link
                  key={navLink.title}
                  href={navLink.link}
                  legacyBehavior
                  passHref
                >
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {navLink.title}
                  </NavigationMenuLink>
                </Link>
              );
            }
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
};

export default NavBar;
