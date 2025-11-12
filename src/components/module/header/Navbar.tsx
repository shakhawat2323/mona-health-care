"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../../public/images/healthcare.png";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { usePathname } from "next/navigation";
import { cn } from "@/components/lib/utils";
import { ModeToggle } from "@/components/themes/ModeToggle";

type NavLinkItem = { href: string; label: string };

const navigationLinks: NavLinkItem[] = [
  { href: "/", label: "Home" },
  { href: "/consultation", label: "Consultation" },
  { href: "/healthplans", label: "Health Plans" },
  { href: "/diagnostics", label: "Diagnostics" },
  { href: "/ngos", label: "NGOs" },
  { href: "/contact", label: "Contact" },
];

function NavLink({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  const pathname = usePathname() || "/";
  const isActive =
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(href + "/");

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "block px-3 py-2 rounded-md text-sm font-medium transition-all",
        isActive
          ? "text-[color:var(--primary)] bg-[color:var(--primary-foreground)/10] font-semibold"
          : "text-[color:var(--muted-foreground)] hover:text-[color:var(--primary)] hover:bg-[color:var(--popover)]/5",
        className
      )}
    >
      {children}
    </Link>
  );
}

export default function Navbar() {
  return (
    <header className="bg-[color:var(--background)] text-[color:var(--foreground)] border-b border-[color:var(--border)] sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <nav className="flex h-16 items-center justify-between" role="navigation" aria-label="Main navigation">
          {/* LEFT: logo + desktop nav */}
          <div className="flex items-center gap-6">
            <Link href="/" aria-label="Healthcare home" className="flex items-center gap-3">
              <span className="sr-only">Healthcare</span>
              <div className="relative w-10 h-10 rounded-lg overflow-hidden shadow-sm">
                <Image src={Logo} alt="Healthcare logo" fill sizes="40px" priority />
              </div>
              <div className="hidden md:block">
                <span className="text-lg font-semibold text-[color:var(--foreground)]">HealthCare</span>
                <p className="text-xs text-[color:var(--muted-foreground)] -mt-0.5">Trusted care, close to you</p>
              </div>
            </Link>

            {/* Desktop navigation */}
            <div className="hidden md:block">
              <NavigationMenu>
                <NavigationMenuList className="flex items-center ml-40 gap-2">
                  {navigationLinks.map((link) => (
                    <NavigationMenuItem key={link.href}>
                      <NavLink href={link.href}>{link.label}</NavLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>

          {/* RIGHT: actions */}
          <div className="flex items-center gap-3">
            {/* Helpline (desktop) */}
            <div className="hidden sm:flex items-center gap-3 mr-2">
              <div className="flex flex-col text-right">
                <span className="text-xs text-[color:var(--muted-foreground)]">24/7 Helpline</span>
                <a href="tel:+1234567890" className="text-sm font-medium text-[color:var(--primary)] hover:underline">
                  +1 (234) 567-890
                </a>
              </div>
            </div>

            {/* Desktop CTA */}
            <div className="hidden sm:flex items-center gap-2">
              <Button asChild variant="ghost" size="sm" className="text-sm text-[color:var(--foreground)]">
                <Link href="/signin">Sign In</Link>
              </Button>
        
            </div>

            {/* Mode toggle (always visible) */}
            <div className="flex items-center">
              <ModeToggle />
            </div>

            {/* Mobile menu (Popover) */}
            <div className="md:hidden">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="ghost" size="icon" aria-label="Open menu">
                    {/* simple hamburger icon */}
                    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="pointer-events-none">
                      <path d="M3 6h18" />
                      <path d="M3 12h18" />
                      <path d="M3 18h18" />
                    </svg>
                  </Button>
                </PopoverTrigger>

                <PopoverContent align="end" className="w-56 p-2 bg-[color:var(--popover)] text-[color:var(--popover-foreground)] border border-[color:var(--border)]">
                  <div className="flex flex-col gap-1">
                    {navigationLinks.map((link) => (
                      <NavLink key={link.href} href={link.href} className="px-2">
                        {link.label}
                      </NavLink>
                    ))}

                    <div className="border-t mt-2 pt-2 border-[color:var(--sidebar-border)]">
                      <a href="tel:+1234567890" className="block text-sm font-medium text-[color:var(--primary)]">
                        Call +1 (234) 567-890
                      </a>

                      <div className="mt-2 flex gap-2">
                    
                        <Button asChild variant="ghost" size="sm" className="w-full text-[color:var(--foreground)]">
                          <Link href="/signin">Sign In</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
