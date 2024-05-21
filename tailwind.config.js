/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        oxford: "#00072D",
        penn: "#001C55",
        royal: "#0A2472",
        bice: "#0E6BA8",
      },
    },
  },
  plugins: [],
}
