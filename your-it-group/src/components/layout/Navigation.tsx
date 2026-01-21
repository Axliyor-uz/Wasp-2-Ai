"use client";
import { useApp } from "@/lib/AppContext";
import Link from "next/link";

export default function Navigation() {
  const { lang, setLang, theme, toggleTheme } = useApp();

  return (
    <nav className="flex justify-between items-center p-6 border-b border-[var(--text)]/10">. </nav>
  );
}