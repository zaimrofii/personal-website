"use client";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import PageTransition from "./PageTransition";

const TransitionLink = ({ href, children }) => {
  const router = useRouter();
  const pathname = usePathname(); // ambil path aktif
  const [showTransition, setShowTransition] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();

    if (pathname === href) return; // ⛔ jangan transisi ke halaman yang sama

    setShowTransition(true);

    setTimeout(() => {
      router.push(href);
    }, 200);
  };

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
