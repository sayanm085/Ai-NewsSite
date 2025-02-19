import React from "react"

// shadcn UI components (adjust paths to match your setup)
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
  SheetFooter,
} from "@/components/ui/sheet"

// Lucide icon for hamburger
import { Menu } from "lucide-react"

export default function Navbar() {
  return (
    <header className="border-b bg-white">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* BRAND */}
        <a href="/" className="text-2xl font-bold">
        AI NewsSite
        </a>

        {/* DESKTOP NAV LINKS (hidden on mobile) */}
        <nav className="hidden md:flex items-center space-x-6">
               <a href="/" className="hover:underline">
                  Home
                </a>
          <a href="/articles" className="text-sm font-medium text-gray-700 hover:text-black">
            Articles
          </a>
          <a href="/categories" className="text-sm font-medium text-gray-700 hover:text-black">
            Categories
          </a>
          <a href="/about" className="text-sm font-medium text-gray-700 hover:text-black">
            About
          </a>
          {/* "Pages" dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="text-sm font-medium text-gray-700 hover:text-black">
              Pages ▾
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-36">
              <DropdownMenuItem>
                <a href="/pages/page1" className="w-full text-left">
                  Page 1
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="/pages/page2" className="w-full text-left">
                  Page 2
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* DESKTOP "CONTACT" BUTTON (hidden on mobile) */}
        <div className="hidden md:flex">
          <Button className="bg-black text-white hover:bg-black">
            Contact →
          </Button>
        </div>

        {/* MOBILE MENU (Sheet) - visible only on small screens */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="default"
              className="md:hidden bg-black text-white hover:bg-black px-3 py-2"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          {/* Sheet slides from top and covers screen */}
          <SheetContent side="top" size="full" className="bg-white">
            {/* SHEET HEADER: brand + close button */}
            <SheetHeader className="flex items-center justify-between px-4 py-4 border-b">
              <SheetTitle className="text-2xl font-bold">AI NewsSite</SheetTitle>
              <SheetClose asChild>
                <Button variant="ghost" className="bg-black text-white hover:bg-black px-3 py-2">
                  ✕
                </Button>
              </SheetClose>
            </SheetHeader>

            {/* NAV LINKS + CONTACT BUTTON in mobile sheet */}
            <div className="p-6">
              <nav className="flex flex-col gap-6 text-lg font-medium">
              <a href="/" className="hover:underline">
                  Home
                </a>
                <a href="/articles" className="hover:underline">
                  Articles
                </a>
                <a href="/categories" className="hover:underline">
                  Categories
                </a>
                <a href="/about" className="hover:underline">
                  About
                </a>
                <div className="flex items-center gap-1 hover:underline cursor-pointer">
                  <span>Pages</span>
                  <span>▾</span>
                </div>
              </nav>
              <div className="mt-8">
                <Button className="bg-black text-white hover:bg-black">
                  Contact →
                </Button>
              </div>
            </div>

            <SheetFooter />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
