/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', 
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // For Next.js App Router
    "./src/app/pages/**/*.{js,ts,jsx,tsx,mdx}", // For Next.js App Router
    "./src/app/pages/about/**/*.{js,ts,jsx,tsx,mdx}", // For Next.js App Router
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // For src directory
    "./src/components/layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}