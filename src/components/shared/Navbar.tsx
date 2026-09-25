"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { usePlan } from "@/src/context/PlanContext";
import Image from "next/image";
import Logo from "@/src/assets/logo.png";

const navLinks = [
  { label: "Workouts", href: "/" },
  { label: "My Plan", href: "/my-plan" },
];

const Navbar = () => {
  const pathname = usePathname();
  const { plan, saved } = usePlan();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" || pathname.startsWith("/workouts") : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-base-300 bg-[#0c0d10]/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-y-3 px-4 py-4 md:px-8">
        {/* CHANGED: wrapped Image + added text, all inside Link */}
        <Link href="/" className="flex items-center gap-2">
          <Image src={Logo} alt="Logo" className="h-8 w-auto" priority />
          <span className="text-lg font-extrabold uppercase tracking-widest text-white">
            Fitlog
          </span>
        </Link>

        <ul className="order-last flex w-full justify-center gap-2 md:order-none md:w-auto">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-colors ${
                  isActive(link.href)
                    ? "bg-[#1a2312] text-primary"
                    : "text-muted hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4 text-xs">
          <Link href="/my-plan" className="flex items-center gap-2 font-semibold text-white">
            Plan
            <span className="badge badge-primary badge-sm rounded-full font-bold">{plan.length}</span>
          </Link>
          <Link href="/my-plan" className="flex items-center gap-2 text-muted hover:text-white">
            Saved
            <span className="badge badge-outline badge-sm rounded-full border-base-300 text-white">
              {saved.length}
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;