import { navLinks } from "@/data/nav-links";
import searchItems from "@/data/search-items";
import type NavLink from "@/interface/NavLink";
import { DialogTitle } from "@radix-ui/react-dialog";
import { ChevronDown, Menu, Search, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { memo, useMemo, useState, useCallback } from "react";
import PageTransition from "../animations/page-transition";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Input } from "../ui/input";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { useStateStore } from "@/lib/state-store";

// Create a memoized search result item component
const SearchResultItem = memo(
  ({
    result,
    onClick,
  }: {
    result: (typeof searchItems)[0];
    onClick: (link: string) => void;
  }) => (
    <button
      key={result.link}
      onClick={() => onClick(result.link)}
      className="w-full p-3 text-left transition-colors hover:bg-muted/50 first:rounded-t-lg last:rounded-b-lg"
    >
      <h3 className="font-medium text-foreground">{result.title}</h3>
      {result.description && (
        <p className="text-sm text-muted-foreground">
          {result.description}
        </p>
      )}
    </button>
  )
);

SearchResultItem.displayName = "SearchResultItem";

const NavBar = () => {
  const {
    isSearchExpanded,
    setIsSearchExpanded,
    searchValue,
    setSearchValue,
  } = useStateStore();
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false);
  const { animatePageOut } = PageTransition();

  // Memoize the filtered search results
  const filteredResults = useMemo(() => {
    if (!searchValue.trim()) {
      return [];
    }

    return searchItems.filter(
      (item) =>
        item.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.link.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.description
          ?.toLowerCase()
          .includes(searchValue.toLowerCase())
    );
  }, [searchValue]);

  // Remove the useEffect since we're now using useMemo
  const handleSearch = (searchTerm: string) => {
    setSearchValue(searchTerm);
  };

  const handleResultClick = useCallback(
    (link: string) => {
      const [pagePath, hash] = link.split("#");

      if (pathname === pagePath) {
        // If on same page, just scroll to element
        if (hash) {
          document
            .getElementById(hash)
            ?.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // Navigate to new page
        animatePageOut(link);
      }
      setIsSearchExpanded(false);
      setSearchValue("");
    },
    [pathname, animatePageOut, setIsSearchExpanded, setSearchValue]
  );

  const handleNavClick = (navLink: NavLink) => {
    if (pathname !== navLink.link.split("#")[0] && !navLink.disabled) {
      animatePageOut(navLink.link);
    } else {
      window.location.hash = navLink.link.split("#")[1];
    }
    if (isSheetOpen) setIsSheetOpen(false);
    setIsSearchExpanded(false);
    setSearchValue("");
  };

  const handleNavItemClick = (navLink: NavLink, navItem: NavLink) => {
    const itemLink = navLink.link
      ? navLink.link + navItem.link
      : navItem.link;
    if (pathname !== itemLink && !navItem.disabled) {
      animatePageOut(itemLink);
    }
    if (isSheetOpen) setIsSheetOpen(false);
    setIsSearchExpanded(false);
    setSearchValue("");
  };

  // Update the search results rendering in both mobile and desktop sections
  const searchResultsList = useMemo(
    () =>
      searchValue &&
      filteredResults.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border/50 rounded-lg shadow-lg shadow-primary/5 z-50">
          {filteredResults.slice(0, 5).map((result) => (
            <SearchResultItem
              key={result.link}
              result={result}
              onClick={handleResultClick}
            />
          ))}
        </div>
      ),
    [searchValue, filteredResults, handleResultClick]
  );

  return (
    <>
      {/* Mobile Search - Moved outside navbar */}
      <div className="fixed top-[72px] left-0 right-0 px-4 z-40 lg:hidden">
        {isSearchExpanded && (
          <div className="relative">
            <Input
              placeholder="Hanapin..."
              value={searchValue}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full bg-background/95 border-primary/30 
                text-muted-foreground shadow-lg
                focus-visible:ring-primary/30 placeholder:text-muted-foreground"
            />
            <button
              onClick={() => {
                setSearchValue("");
                setIsSearchExpanded(false);
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="size-4" />
            </button>
            {searchResultsList}
          </div>
        )}
      </div>

      {/* Mobile Navbar */}
      <div className="flex flex-row gap-2 items-center lg:hidden px-4 h-10 rounded-full bg-accent/70 text-accent-foreground border border-primary/20">
        <button
          onClick={() => setIsSearchExpanded(!isSearchExpanded)}
          className="text-accent-foreground hover:text-primary transition-colors"
        >
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
                          <DropdownMenuItem
                            key={item.link}
                            asChild
                          >
                            <button
                              className="w-full"
                              onClick={() => {
                                handleNavItemClick(
                                  navLink,
                                  item
                                );
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
                      onClick={handleNavClick.bind(
                        null,
                        navLink
                      )}
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
      <nav className="transition-colors hover:bg-accent hidden flex-row gap-8 items-center lg:flex px-4 h-10 rounded-full bg-accent/70 text-accent-foreground border border-primary/20">
        <div className="relative flex items-center">
          {isSearchExpanded ? (
            <>
              <Input
                placeholder="Hanapin..."
                value={searchValue}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-[320px] bg-background/95 border-primary/30 
                                text-muted-foreground
                                focus-visible:ring-primary/30 placeholder:text-muted-foreground"
              />
              <button
                onClick={() => {
                  setSearchValue("");
                  setIsSearchExpanded(false);
                }}
                className="absolute right-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="size-4" />
              </button>
              {searchResultsList}
            </>
          ) : (
            <button
              onClick={() => setIsSearchExpanded(true)}
              className="text-accent-foreground hover:text-primary transition-colors"
            >
              <Search className="size-6" />
            </button>
          )}
        </div>

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
                        handleNavItemClick(
                          navLink,
                          item
                        );
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
                onClick={handleNavClick.bind(null, navLink)}
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
