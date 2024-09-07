/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        'league-spartan': ['League Spartan', 'sans-serif'],
      },
      fontSize: {
        '64px': '64px',
      },
      lineHeight: {
        '58.88px': '58.88px',
      },
      boxShadow: {
        'custom': '0px 4px 92px 0px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
};
