import { navLinks } from "@/data/nav-links";
import { DialogTitle } from "@radix-ui/react-dialog";
import { ChevronDown, Menu, Search, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import PageTransition from "../animations/page-transition";
import { Button } from "../ui/button";
import { Dialog, DialogContent } from "../ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Input } from "../ui/input";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

const searchItems: {
  title: string;
  link: string;
  description?: string;
}[] = [
  {
    title: "Buong Kuwento",
    link: "/buong-kuwento",
    description: "Tingnan ang detalyadong pangyayari.",
  },
  {
    title: "Buod",
    link: "/buod",
    description: "Isang maikling buod ng kuwento.",
  },
  {
    title: "Kuwentong May Larawan",
    link: "/kuwentong-may-larawan",
    description: "Ang kuwento sa pamamagitan ng mga larawan.",
  },
  {
    title: "Pahina 1",
    link: "/buong-kuwento/pahina-1",
  },
  {
    title: "Pahina 2",
    link: "/buong-kuwento/pahina-2",
  },
  {
    title: "Pahina 3",
    link: "/buong-kuwento/pahina-3",
  },
  {
    title: "Pahina 4",
    link: "/buong-kuwento/pahina-4",
  },
  {
    title: "Pahina 5",
    link: "/buong-kuwento/pahina-5",
  },
  {
    title: "Pahina 6",
    link: "/buong-kuwento/pahina-6",
  },
  {
    title: "Pahina 7",
    link: "/buong-kuwento/pahina-7",
  },
  {
    title: "Pahina 8",
    link: "/buong-kuwento/pahina-8",
  },
];

const NavBar = () => {
  const pathname = usePathname();
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchResults, setSearchResults] = useState<typeof searchItems>([]);
  const { animatePageOut } = PageTransition();

  // Update search results whenever search value changes
  useEffect(() => {
    if (!searchValue.trim()) {
      setSearchResults([]);
      return;
    }

    const filteredResults = searchItems.filter(
      (item) =>
        item.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.link.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.description?.toLowerCase().includes(searchValue.toLowerCase())
    );

    setSearchResults(filteredResults);
  }, [searchValue]);

  const handleSearch = (searchTerm: string) => {
    setSearchValue(searchTerm);
  };

  const handleResultClick = (link: string) => {
    if (pathname !== link) {
      animatePageOut(link);
    }
    setIsDialogOpen(false);
    setSearchValue("");
  };

  return (
    <>
      {/* Mobile */}
      <div className="flex flex-row gap-2 items-center md:hidden px-4 h-10 rounded-full bg-accent/70 text-accent-foreground border border-primary/20">
        <button onClick={() => setIsDialogOpen(true)}>
          <Search className="size-6" />
        </button>

        <Sheet
          open={isSheetOpen}
          onOpenChange={(isOpen) => {
            setIsSheetOpen(isOpen);
          }}
        >
          <SheetTrigger asChild>
            <button>
              <Menu className="size-6" />
            </button>
          </SheetTrigger>
          <SheetContent>
            <div className="mt-8 flex flex-col space-y-4">
              {/* Existing mobile menu code remains the same */}
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
                          <DropdownMenuItem key={item.link} asChild>
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
                        if (pathname !== navLink.link.split("#")[0]) {
                          animatePageOut(navLink.link);
                        } else {
                          window.location.hash = navLink.link.split("#")[1];
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
        {/* Existing desktop menu code remains the same */}
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
                    <DropdownMenuItem
                      key={item.link}
                      onClick={() => {
                        if (pathname !== item.link) {
                          animatePageOut(item.link);
                        }
                      }}
                    >
                      {item.title}
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
                  if (pathname !== navLink.link.split("#")[0]) {
                    animatePageOut(navLink.link);
                  } else {
                    window.location.hash = navLink.link.split("#")[1];
                  }
                }}
              >
                {navLink.title}
              </button>
            );
          }
        })}

        <button onClick={() => setIsDialogOpen(true)}>
          <Search className="size-6" />
        </button>
      </nav>

      {/* Search Dialog */}
      <Dialog
        open={isDialogOpen}
        onOpenChange={(isOpen: boolean) => {
          setIsDialogOpen(isOpen);
          if (!isOpen) {
            setSearchValue("");
            setSearchResults([]);
          }
        }}
      >
        <DialogTitle className="sr-only">Search</DialogTitle>
        <DialogContent className="sm:max-w-[425px]">
          <div className="mt-4">
            <div className="flex flex-row gap-2">
              <div className="relative flex-1">
                <Input
                  placeholder="Hanapin..."
                  value={searchValue}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="pr-8"
                />
                {searchValue && (
                  <button
                    onClick={() => handleSearch("")}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    <X className="size-4" />
                  </button>
                )}
              </div>
              <Button size="icon" onClick={() => handleSearch(searchValue)}>
                <Search className="size-6" />
              </Button>
            </div>

            <div className="mt-4 max-h-[60vh] overflow-y-auto">
              {searchResults.length > 0 ? (
                <div className="space-y-2">
                  {searchResults.slice(0, 5).map((result) => (
                    <button
                      key={result.link}
                      onClick={() => handleResultClick(result.link)}
                      className="w-full p-3 text-left transition-colors hover:bg-muted rounded-lg"
                    >
                      <h3 className="font-medium">{result.title}</h3>
                      {result.description && (
                        <p className="text-sm text-gray-500">
                          {result.description}
                        </p>
                      )}
                    </button>
                  ))}
                </div>
              ) : searchValue ? (
                <p className="text-center text-gray-500">No results found</p>
              ) : (
                searchItems.slice(0, 5).map((item) => (
                  <button
                    key={item.link}
                    onClick={() => handleResultClick(item.link)}
                    className="w-full p-3 text-left transition-colors hover:bg-muted rounded-lg"
                  >
                    <h3 className="font-medium">{item.title}</h3>
                    {item.description && (
                      <p className="text-sm text-gray-500">
                        {item.description}
                      </p>
                    )}
                  </button>
                ))
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default NavBar;
