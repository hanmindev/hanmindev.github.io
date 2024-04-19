"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import clsx from "clsx";

export function TopButton() {
  const [isScrolled, setScrolled] = useState(false);

  useEffect(() => {
    const scrollListener = () => setScrolled(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20);

    window.addEventListener("scroll", scrollListener);

    return () => window.removeEventListener("scroll", scrollListener);
  }, []);

  return <div className="absolute w-full">
    <div className="absolute right-6 lg:-left-12">

      <Link
        className={clsx("fixed top-24 z-50 cursor-pointer p-0 transition-opacity duration-1000 delay-200", isScrolled ? "opacity-100" : "opacity-0")}
        href="">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path>
        </svg>
      </Link>
    </div>
  </div>;
}