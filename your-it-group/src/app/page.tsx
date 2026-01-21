"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  BookOpen,
  FlaskConical,
  Sigma,
  Atom,
  Smartphone,
  Code2,
  Cpu,
  Globe,
  Sparkles,
  Zap,
  Shield,
  Rocket,
  ChevronRight,
  Star,
  Trophy,
  Users,
  Layers,
  TrendingUp,
  Award,
  Moon,
  Sun,
  Languages,
  LucideIcon, 
} from "lucide-react";
import { FaAndroid } from "react-icons/fa";

import { useApp } from "@/lib/AppContext";
import { content } from "@/lib/constants";

// Defined interfaces for type safety
interface Feature {
  id: string | number;
  title: string;
  short: string;
  detail: string;
  icon?: LucideIcon; 
}

export default function HomePage() {
  const { lang, theme, toggleTheme, setLang } = useApp();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [langDropdown, setLangDropdown] = useState(false);
  const [openFeature, setOpenFeature] = useState<Feature | null>(null);

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // close modal on ESC
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenFeature(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Fallback to English if lang is not found
  const t = content[lang as keyof typeof content] || content.en;
  const isDark = theme === "dark";

  const changeLang = (newLang: any) => {
    setLang(newLang);
    setLangDropdown(false);
  };

  return (
    <div className="min-h-screen overflow-hidden transition-colors duration-500 bg-background text-foreground">
      {/* Fixed Header Controls */}
      <div className="fixed top-4 left-4 z-50 flex items-center gap-4">
        <Link href="/" className="font-bold text-xl" style={{ color: "var(--accent)" }}>
          <span className="flex items-center gap-2 px-4 py-3 glass backdrop-blur-xl border rounded-full font-semibold transition-all duration-300 hover:border-[var(--accent)]">
            Wasp-2 AI
          </span>
        </Link>
      </div>

      <div className="fixed top-4 right-4 z-50 flex items-center gap-4">
        {/* Language Selector */}
        <div className="relative">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setLangDropdown(!langDropdown)}
            className="flex items-center gap-2 px-4 py-3 glass backdrop-blur-xl border rounded-full font-semibold transition-all duration-300 hover:border-[var(--accent)]"
            style={{
              color: "var(--text)",
              borderColor: isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)",
            }}
          >
            <Languages className="w-5 h-5" />
            <span className="uppercase">{lang}</span>
          </motion.button>

          {langDropdown && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-full mt-2 right-0 glass border rounded-2xl overflow-hidden backdrop-blur-xl shadow-2xl min-w-[150px]"
              style={{ borderColor: isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)" }}
            >
              {["en", "uz", "ru"].map((language) => (
                <button
                  key={language}
                  onClick={() => changeLang(language)}
                  className={`block w-full px-6 py-3 text-left font-semibold transition ${
                    lang === language
                      ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                      : "hover:bg-purple-500/10 text-gray-700 dark:text-gray-200"
                  }`}
                >
                  {language === "en" ? "English" : language === "uz" ? "O'zbek" : "Русский"}
                </button>
              ))}
            </motion.div>
          )}
        </div>

        {/* Theme Toggle */}
        <motion.button
          whileHover={{ scale: 1.05, rotate: 180 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleTheme}
          className="p-3 glass backdrop-blur-xl border rounded-full transition-all duration-300 hover:border-[var(--accent)]"
          style={{ borderColor: isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)" }}
        >
          {isDark ? <Sun className="w-6 h-6 text-yellow-400" /> : <Moon className="w-6 h-6 text-purple-600" />}
        </motion.button>
      </div>

      {/* Animated Cursor Glow (Dark mode only) */}
      {isDark && (
        <motion.div
          className="fixed w-96 h-96 rounded-full pointer-events-none z-50 mix-blend-screen"
          style={{
            background: "radial-gradient(circle, rgba(147, 51, 234, 0.15) 0%, transparent 70%)",
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ opacity, scale }} className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-3 px-6 py-3 mb-8 glass border rounded-full backdrop-blur-xl"
            style={{ borderColor: isDark ? "rgba(147, 51, 234, 0.3)" : "rgba(147, 51, 234, 0.4)" }}
          >
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }}>
              <Sparkles className={`w-5 h-5 ${isDark ? "text-purple-400" : "text-purple-600"}`} />
            </motion.div>
            <span
              className={`text-sm font-semibold bg-gradient-to-r ${
                isDark ? "from-purple-400 via-blue-400 to-cyan-400" : "from-purple-600 via-blue-600 to-cyan-600"
              } bg-clip-text text-transparent tracking-wide`}
            >
              {t.badge}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-none"
          >
            <span
              className={`block bg-gradient-to-r ${
                isDark ? "from-white via-purple-200 to-white" : "from-gray-900 via-purple-600 to-gray-900"
              } bg-clip-text text-transparent`}
            >
              {t.heroTitle1 || "Transform Your"}
            </span>
            <span
              className={`block bg-gradient-to-r ${
                isDark ? "from-purple-400 via-blue-400 to-cyan-400" : "from-purple-600 via-blue-600 to-cyan-600"
              } bg-clip-text text-transparent`}
            >
              {t.heroTitle2 || "Digital Future"}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed opacity-70"
          >
            {t.heroDesc}
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-10 py-5 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-full font-bold text-lg overflow-hidden text-white shadow-xl"
            >
              <span className="relative z-10 flex items-center gap-3">
                {t.btnPortfolio}
                <Rocket className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 glass backdrop-blur-xl border rounded-full font-bold text-lg transition-all duration-300"
              style={{ color: "var(--text)", borderColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)" }}
            >
              {t.btnContact}
            </motion.button>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
          >
            {[
              { icon: Trophy, value: "250+", label: t.stats1 || "Projects", color: "from-yellow-400 to-orange-500" },
              { icon: Star, value: "98%", label: t.stats2 || "Satisfaction", color: "from-purple-400 to-pink-500" },
              { icon: Globe, value: "45+", label: t.stats3 || "Countries", color: "from-blue-400 to-cyan-500" },
              { icon: Users, value: "120+", label: t.stats4 || "Team", color: "from-green-400 to-emerald-500" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group relative p-6 glass backdrop-blur-xl rounded-2xl border transition-all duration-300"
                style={{ borderColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)" }}
              >
                <motion.div
                  className={`w-12 h-12 mx-auto mb-4 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className="w-6 h-6 text-white" />
                </motion.div>
                <div
                  className={`text-4xl font-black mb-2 bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`}
                >
                  {stat.value}
                </div>
                <div className="text-sm font-medium opacity-70">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div
            className="w-6 h-10 border-2 rounded-full flex items-start justify-center p-2"
            style={{ borderColor: isDark ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.3)" }}
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: "var(--text)" }}
            />
          </div>
        </motion.div>
      </section>

{/* --- NEW ROW: Card 3 & 4 (2 Columns on Phone) --- */}
          <div className="grid grid-cols-2 gap-3 md:gap-6 lg:gap-8 mt-3 md:mt-8">
            
            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600 rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl"
            >
              {/* Responsive Padding: p-3 on mobile, p-10 on desktop */}
              <div className="relative z-10 p-3 sm:p-6 lg:p-10 h-full flex flex-col justify-between">
                <div>
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-10 h-10 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mb-3 sm:mb-6 bg-white/20 backdrop-blur-xl rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg"
                  >
                    <Cpu className="w-5 h-5 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
                  </motion.div>

                  <h3 className="text-sm sm:text-2xl lg:text-4xl font-black mb-2 sm:mb-4 text-white leading-tight">
                    {t.card3Title || "AI Analysis"}
                  </h3>

                  <p className="text-xs sm:text-base lg:text-lg text-white/90 mb-4 sm:mb-8 leading-snug line-clamp-4 sm:line-clamp-none">
                    {t.card3Desc || "Deep learning algorithms analyzing student performance patterns."}
                  </p>
                </div>

                <motion.a
                  href="#"
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-1 sm:gap-3 text-white font-bold text-xs sm:text-xl"
                >
                  {t.cardLink || "Learn more"}
                  <ChevronRight className="w-3 h-3 sm:w-6 sm:h-6" />
                </motion.a>

                {/* Background Icons - Hidden on very small phones to prevent clutter */}
                <div className="hidden sm:flex absolute bottom-3 right-3 gap-2 lg:gap-6">
                  {[Globe, Layers].map((Icon, i) => (
                    <motion.div
                      key={i}
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 2 + i * 0.5, repeat: Infinity, delay: i * 0.2 }}
                    >
                      <Icon className="w-4 h-4 sm:w-6 sm:h-6 lg:w-10 lg:h-10 text-white/20" />
                    </motion.div>
                  ))} 
                </div>
              </div>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative bg-gradient-to-bl from-pink-600 via-purple-600 to-indigo-600 rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl"
            >
              <div className="relative z-10 p-3 sm:p-6 lg:p-10 h-full flex flex-col justify-between">
                <div>
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-10 h-10 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mb-3 sm:mb-6 bg-white/20 backdrop-blur-xl rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg"
                  >
                    <Layers className="w-5 h-5 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
                  </motion.div>

                  <h3 className="text-sm sm:text-2xl lg:text-4xl font-black mb-2 sm:mb-4 text-white leading-tight">
                    {t.card4Title || "Global Scale"}
                  </h3>

                  <p className="text-xs sm:text-base lg:text-lg text-white/90 mb-4 sm:mb-8 leading-snug line-clamp-4 sm:line-clamp-none">
                     {t.card4Desc || "Connect classrooms across borders with real-time translation."}
                  </p>
                </div>


                <motion.a
                  href="#"
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-1 sm:gap-3 text-white font-bold text-xs sm:text-xl"
                >
                  {t.cardLink || "Learn more"}
                  <ChevronRight className="w-3 h-3 sm:w-6 sm:h-6" />
                </motion.a>

                {/* Background Icons */}
                <div className="hidden sm:flex absolute bottom-3 right-3 gap-2 lg:gap-6">
                   <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <Globe className="w-4 h-4 sm:w-6 sm:h-6 lg:w-10 lg:h-10 text-white/20" />
                    </motion.div>
                </div>
              </div>
            </motion.div>

          </div>
      {/* --- SERVICES SECTION --- */}
      <section className="relative py-12 px-4 transition-colors duration-500">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">


            

            {/* Studentify */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="relative rounded-3xl p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600 text-white shadow-2xl overflow-hidden"
            >
              <div className="absolute top-6 right-6 flex items-center gap-2 bg-white/20 px-4 py-1.5 rounded-full text-sm font-semibold backdrop-blur-xl">
                <FaAndroid className="text-green-400" />
                <span>{t.studentBadge}</span>
              </div>

              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/20 backdrop-blur-xl flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-black mb-3">{t.studentTitle}</h3>
              <p className="text-sm sm:text-base opacity-90 mb-6 leading-relaxed">{t.studentDesc}</p>

              {/* Features grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {(t.features || []).map((f: Feature, i: number) => {
                  const Icon = f.icon || Sigma;
                  return (
                    <motion.button
                      key={f.id || i}
                      onClick={() => setOpenFeature(f)}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      whileHover={{ scale: 1.03 }}
                      transition={{ delay: i * 0.06 }}
                      className="flex items-start gap-3 bg-white/15 rounded-xl p-3 text-left text-sm sm:text-base hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white/30"
                    >
                      <Icon className="w-5 h-5 mt-0.5 text-white" />
                      <div>
                        <div className="font-semibold">{f.title}</div>
                        <div className="text-xs opacity-80">{f.short}</div>
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              <div className="flex items-center gap-3 font-bold text-lg">{t.learnTag}</div>
              <Smartphone className="absolute -bottom-12 -right-12 w-56 h-56 text-white/8" />
            </motion.div>

            {/* Teacherfy */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="relative rounded-3xl p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 text-white shadow-2xl overflow-hidden"
            >
              <div className="absolute top-6 right-6 flex items-center gap-2 bg-white/20 px-4 py-1.5 rounded-full text-sm font-semibold backdrop-blur-xl">
                <FaAndroid className="text-green-400" />
                <span>{t.teacherBadge}</span>
              </div>

              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/20 backdrop-blur-xl flex items-center justify-center mb-6">
                <Rocket className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-black mb-3">{t.teacherTitle}</h3>
              <p className="text-sm sm:text-base opacity-90 mb-6 leading-relaxed">{t.teacherDesc}</p>

              <ul className="space-y-3 mb-6">
                {[
                  "📋 Create subject-specific tests",
                  "🌍 Choose test language (UZ / RU / ENG)",
                  "⚡ Instant delivery to students",
                  "📊 Monitor results & performance",
                  "🔐 Secure teacher–student connection",
                ].map((s, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    className="bg-white/15 rounded-xl p-3 text-sm sm:text-base"
                  >
                    {s}
                  </motion.li>
                ))}
              </ul>

              <div className="inline-flex items-center gap-3 font-bold text-lg">
                {t.teachTag}
                <Rocket className="w-5 h-5" />
              </div>

              <Smartphone className="absolute -bottom-12 -left-12 w-56 h-56 text-white/8" />
            </motion.div>
          </div>

          {/* Feature modal */}
          <AnimatePresence>
            {openFeature && (
              <motion.div
                key="feature-modal"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4"
                aria-modal="true"
                role="dialog"
                onClick={() => setOpenFeature(null)}
              >
                {/* backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.6 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-black"
                />

                {/* panel */}
                <motion.div
                  initial={{ y: 40, scale: 0.98, opacity: 0 }}
                  animate={{ y: 0, scale: 1, opacity: 1 }}
                  exit={{ y: 20, scale: 0.98, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="relative z-10 max-w-3xl w-full bg-white rounded-2xl p-6 md:p-8 shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg p-3">
                        {openFeature.icon ? (
                          React.createElement(openFeature.icon, { className: "w-6 h-6 text-white" })
                        ) : (
                          <Sigma className="w-6 h-6 text-white" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-lg font-extrabold mb-1 text-gray-900">{openFeature.title}</h3>
                        <p className="text-sm text-gray-600">{openFeature.short}</p>
                      </div>
                    </div>

                    <button
                      onClick={() => setOpenFeature(null)}
                      className="text-gray-500 hover:text-gray-700 rounded-md p-1 transition"
                      aria-label="Close"
                    >
                      ✕
                    </button>
                  </div>

                  <div className="mt-4 text-gray-700 leading-relaxed">{openFeature.detail}</div>

                  <div className="mt-6 flex items-center justify-end gap-3">
                    <button
                      onClick={() => setOpenFeature(null)}
                      className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold transition"
                    >
                      Close
                    </button>

                    <button
                      onClick={() => alert(`${openFeature.title} — open deeper demo / docs`)}
                      className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold shadow-lg hover:shadow-xl transition"
                    >
                      See demo
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Feature grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 mt-12"
          >
            {[
              {
                icon: Zap,
                title: t.feature1Title || "Lightning Fast",
                desc: t.feature1Desc || "Optimized performance",
                gradient: "from-yellow-400 to-orange-500",
              },
              {
                icon: Shield,
                title: t.feature2Title || "Secure",
                desc: t.feature2Desc || "Enterprise security",
                gradient: "from-green-400 to-emerald-500",
              },
              {
                icon: TrendingUp,
                title: t.feature3Title || "Scalable",
                desc: t.feature3Desc || "Grows with you",
                gradient: "from-blue-400 to-purple-500",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass backdrop-blur-xl rounded-2xl p-8 border"
                style={{ borderColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)" }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 mb-6 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center shadow-xl`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h4 className="text-2xl font-bold mb-3" style={{ color: "var(--text)" }}>
                  {feature.title}
                </h4>
                <p className="opacity-70" style={{ color: "var(--text)" }}>
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="relative py-32 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-3xl p-16 overflow-hidden shadow-2xl"
          >
            <div className="relative z-10 text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="inline-block mb-6"
              >
                <Award className="w-20 h-20 text-white mx-auto" />
              </motion.div>

              <h2 className="text-5xl md:text-6xl font-black mb-6 text-white">
                {t.ctaTitle || "Ready to Build Something Amazing?"}
              </h2>
              <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                {t.ctaDesc || "Join hundreds of satisfied clients"}
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-6 bg-white text-gray-900 rounded-full font-black text-xl shadow-2xl hover:shadow-white/50 transition-all"
              >
                {t.ctaBtn || "Get Started Today"}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}