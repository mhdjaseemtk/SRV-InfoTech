"use client";

import { useState } from "react";
import Image from "next/image";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Programmes", href: "#programmes" },
  { label: "Features", href: "#features" },
  { label: "Media", href: "#media" },
  { label: "Gallery", href: "#gallery" },
  { label: "District Pages", href: "#district" },
  { label: "Contact", href: "#contact" },
];

function LanguageSwitch() {
  return (
    <button className="flex shrink-0 items-center gap-1.5 rounded-full border border-blackish px-2.5 py-2 text-sm text-blackish">
      <Image
        src="https://api.builder.io/api/v1/image/assets/TEMP/339773326ab76caac09552196bba719469fbd78e?width=40"
        alt=""
        width={20}
        height={20}
      />
      <span className="font-mulish">മലയാളം</span>
    </button>
  );
}

function SearchBox({ className = "" }) {
  return (
    <div className={`relative shrink-0 ${className}`}>
      <input
        type="text"
        placeholder="What are you looking?"
        className="h-[50px] w-full rounded-md border border-green/20 pl-[15px] pr-9 text-sm text-textclr placeholder:text-textclr focus:outline-none focus:ring-1 focus:ring-green"
      />
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        className="absolute right-3 top-1/2 -translate-y-1/2"
      >
        <path
          d="M12.857 6.429A6.429 6.429 0 1 1 0 6.429a6.429 6.429 0 0 1 12.857 0Z"
          fill="#039123"
        />
        <path d="m15 14.464-3.857-3.857" stroke="#039123" />
      </svg>
    </div>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/[.91] backdrop-blur-sm lg:h-[130px]">
      <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-4 py-4 sm:px-6 lg:px-[70px] lg:py-0">
        <a href="/" className="flex shrink-0 items-center gap-[10px] lg:h-[86px] lg:w-[291px]">
          <Image
            src="https://api.builder.io/api/v1/image/assets/TEMP/73d50cf87e61a9465cbcec9d297d5eb4e9ac89ce?width=180"
            alt="Stree Shakthi logo"
            width={90}
            height={86}
            className="h-14 w-auto object-contain lg:h-[86px] lg:w-[90px]"
          />
          <div className="flex flex-col leading-tight lg:w-[191px]">
            <span className="font-serif text-xl uppercase text-neutral-700 lg:text-2xl">
              Stree Shakthi
            </span>
            <span className="border-t border-neutral-400 pt-1 text-xs text-neutral-700 lg:text-sm">
              Empowering kerala women
            </span>
          </div>
        </a>

        <div className="hidden lg:flex lg:flex-col lg:justify-center lg:gap-[15px] lg:py-[15px]">
          <div className="flex items-center justify-end gap-[15px]">
            <Image
              src="https://api.builder.io/api/v1/image/assets/TEMP/0f1df5b5fa5e88af92b8670499f2c03c5267ce58?width=360"
              alt="Government of India emblem and Swachh Bharat logo"
              width={180}
              height={50}
              className="h-[42px] w-auto object-contain"
            />
            <span className="h-[22px] w-px shrink-0 bg-black/20" />
            <SearchBox className="w-[220px]" />
            <button className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-[10px] bg-bluedark text-white">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M13.65 11.3 8 5.65 13.65 0 19.3 5.65 13.65 11.3ZM0 9.3V1.3h8v8H0Zm10 10V11.3h8v8h-8Zm-10 0V11.3h8v8H0Z"
                  fill="currentColor"
                />
              </svg>
            </button>
            <button className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full border border-green text-green">
              <svg width="18" height="24" viewBox="0 0 18 24" fill="none">
                <path
                  d="M9 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM6 19V7a30 30 0 0 1-6-1l.5-2a35 35 0 0 0 15 0l.5 2a30 30 0 0 1-6 1v12h-2v-6H8v6H6Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>

          <nav className="flex items-center justify-end gap-5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-blackish transition-colors hover:text-green"
              >
                {link.label}
              </a>
            ))}
            <LanguageSwitch />
          </nav>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-blackish/20 text-blackish lg:hidden"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            {menuOpen ? (
              <path
                d="M6 6l12 12M18 6 6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="flex flex-col gap-3 border-t border-neutral-100 px-4 py-4 lg:hidden">
          <SearchBox />
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-md px-2 py-2 text-sm text-blackish hover:bg-neutral-50 hover:text-green"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <LanguageSwitch />
        </div>
      )}
    </header>
  );
}
