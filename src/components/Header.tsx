"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navigation } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="HKNS Events"
              width={48}
              height={48}
              className="h-10 w-auto sm:h-14"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 xl:px-4 py-2 text-xs xl:text-sm font-medium rounded-lg transition-colors",
                  pathname === item.href
                    ? "text-primary-light bg-white/5"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 text-gray-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {open && (
        <div
          className="fixed inset-0 top-16 sm:top-20 z-30 bg-black/40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}
      <div
        className={cn(
          "fixed top-16 sm:top-20 right-0 z-40 w-full max-w-xs h-[calc(100dvh-4rem)] sm:h-[calc(100dvh-5rem)] bg-dark border-l border-white/10 lg:hidden transition-transform duration-300 ease-out shadow-2xl shadow-black/50",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col p-4 sm:p-6 gap-1">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "px-4 py-3 text-base font-medium rounded-lg transition-colors",
                pathname === item.href
                  ? "text-primary-light bg-white/5"
                  : "text-gray-300 hover:text-white hover:bg-white/5"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
