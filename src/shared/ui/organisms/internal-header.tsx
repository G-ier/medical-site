import React from "react";
import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import { LogoutButton } from "./LogoutButton";

const navLinks = [
  { label: "Subscriptions", href: "/subscriptions" },
  { label: "Appointments", href: "/appointments" },
  { label: "Profile", href: "/profile" },
  { label: "Support", href: "/contact" },
];

export const InternalHeader: React.FC = () => {
  return (
    <header className="w-full h-[62px] px-6 bg-white flex items-center relative">
      {/* Left: Logo */}
      <div className="flex items-center z-10">
        <Image src="/icons/logo.svg" alt="Logo" width={100} height={100} />
      </div>
      {/* Center: Nav links */}
      <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-[14px] font-medium hover:text-[#CAB8FF] transition-colors"
          >
            {link.label}
          </Link>
        ))}
        <LogoutButton />
      </nav>
      {/* Right: Account and menu */}
      <div className="flex items-center gap-4 ml-auto z-10">
        <Link href="/profile">
          <button className="h-[30px] border border-[#CAB8FF] rounded-full px-4 py-1 text-[12px] font-medium hover:bg-purple-50 transition-colors">
            My account
          </button>
        </Link>
        <MobileMenu />
      </div>
    </header>
  );
};

export default InternalHeader;
