"use client";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import PageTransition from "./PageTransition";

const TransitionLink = ({ href, children }) => {
  const router = useRouter();
  const pathname = usePathname(); // ambil path aktif
  const [showTransition, setShowTransition] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();

    const current = pathname.replace(/\/$/, "");
    const target = href.replace(/\/$/, "");

    if (current === target) {
      return false; // ✅ hentikan total
    }

    setShowTransition(true);

    setTimeout(() => {
      router.push(href);
    }, 600);
  };

  useEffect(() => {
    console.log("pathname:", pathname);
    console.log("href:", href);
  }, []);
  return (
    <>
      {showTransition && <PageTransition />}
      <a href={href} onClick={handleClick}>
        {children}
      </a>
    </>
  );
};

export default TransitionLink;
