/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  important: "#root",
  theme: {
    extend: {
      colors:{
        "primary": "#077DBB",
        "primary-700":"#055986",
        "primary-800":"#04476B", 
        "var": "#CCECFD",
        "neutral-dark": "#4B5563",
        "neutral": "#6B7280",
        "neutral-50":"#F9FAFB",
        "neutral-100":"#F3F4F6",
        "neutral-200":"#E5E7EB",
        "neutral-300":"#D1D5DB",
        "neutral-400":"#9CA3AF",
        "neutral-700":"#374151",
        "neutral-800":"#1F2937",
        "neutral-900":"#111827",
        "neutral-light":"#077dbb0a",
        "neutral-white":"#F9FAFB"
          
       
      },
    },
  },
  plugins: [],
}